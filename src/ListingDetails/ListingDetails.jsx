import {React, useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {Link, useLocation} from 'react-router-dom'
import { inputValidation,validateEmail } from "../inputValidation";

const ListingDetails = () => {
    const location = useLocation()
    
    const {details} = location.state
    
    useEffect (()=>{
        console.log(location)
    },[location])

    
    // console.log(details)

    let [properties, setProperties] = useState(details['properties']);
    const [id,setID] = useState(details['id']);
    const [addComment, setAddComment] = useState(false)
    const [comment_, setComment] = useState("")
    const [email_, setEmail] = useState("")
    const [deleted,setDeleted] = useState(false)

    //for input validations, states checks for live error
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const [commentAdded,setCommentAddded] = useState(false)

    const toggleComment = () =>{
        setAddComment(!addComment)
    } 
    const toggleCommentAdded = () =>{
        setCommentAddded(!commentAdded)
    } 

    const toggleError=  () => {
        setError(!error)
    }

    const updateDB = () => {
        console.log(properties)
    }
    //add Newly made comment to property's comment list
    //then save updated properties into local db
    const addCommentToProperty = (e) => {
        e.preventDefault();
        // reset error before check
        if (error) toggleError()

        const newCom = {comment: comment_, email:email_}
        //returns string whether error or no error(null)
        const errString = validateEmail(newCom);
        
        if (errString == null)
        {
            //no error
            properties[id]['comments'].push(newCom)
            localStorage.setItem('properties-list', JSON.stringify(properties));
            toggleComment()
            toggleCommentAdded()
        }
        else
        {
            //validation error occured
            toggleError()
            setErrorMsg("")
            setErrorMsg(errString)
        }
    }
    // find property by id to delete it
    // update localstorage after deletion
    const deleteProperty = () => {
        const newVal = properties.filter((property)=>{return property.listingID != id})
        localStorage.setItem('properties-list', JSON.stringify(newVal));
        properties = newVal
        setDeleted(true)
    }

    const property_details = `${properties[id]['bedroomNumber']} bds | ${properties[id]['bathroomNumber']} ba | ${properties[id]['sqftNumber']} sqft - House For Sale`
    
    //Once the properties data is updated refresh the page to reflect the comment changes
    useEffect(() => {
        
    }, [properties]);

    return(
        <div className="container">
        <Navbar/>
        <div className="flex flex-row m-28 shadow-lg divide-x-4">
        <div className="w-1/2">
            <img src="../home.jpg" alt="home image"></img>
            <h1 className='text-4xl mt-4 font-bold text-black'>Comments & Reviews</h1>
            <div  className="pr-2 divide-y-2">
            {properties[id]['comments'].map((comment,ind)=>{
                return  <div key={ind} className="mt-4 p-2 bg-slate-500 rounded-md">
                        <h1 className="text-xl">{comment.comment}</h1>
                        <p className="text-sm text-end">by {comment.email}</p>
                        </div> 
            })} 
            <Button className="bg-green-700" onSelect={toggleComment}>Add Comment</Button>
            {/*show comment fields to add new comment*/}
            {addComment &&<div>
                <form onSubmit={(addCommentToProperty)}>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="write comment here" name="comment" 
                onChange={(e) => setComment(e.target.value)} value={comment_}/>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="Enter email Address" name="email" 
                onChange={(e) => setEmail(e.target.value)} value={email_}/>
                {!commentAdded && <h1 className="text-xl text-red-800">{errorMsg}</h1>}
                <Button type="submit">Submit</Button>
                </form>
                </div>}
            </div>
            
        </div>
        <div className="w-1/2 pl-10 overflow-auto">
        <a className='text-xl font-bold'>{`$${properties[id]['listingPrice']}`}</a>
        <p className='text-'>{property_details}</p>
        <p className='text-xs'>{properties[id]['listingAddress']}</p>
        <p className='text-'>{properties[id]['contact']}</p>
        <p className='text-xs'>{properties[id]['coordinates']}</p>
        {/*deletes Single Listing Property*/}
        <Button className='bg-navBackgroundColor m-2' onSelect={deleteProperty}>Delete</Button>
        {/*edits Listing Property
            Link library helps Buttons to navigate to different components alongwith payload
            which in this case is id of present listing property
        */}
        <Link to="/editing" state={{from:id}}><Button className='bg-green-600'>Edit</Button></Link>
        {/*once the deleted button is pressed show message on screen*/}
        {deleted && <h1 className="text-xl text-red-800">Property has been deleted!</h1>}
        </div>
        </div>
        
        </div>
        
    );
}

export default ListingDetails