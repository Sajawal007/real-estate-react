import {React, useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const ListingDetails = (props) => {
    const [properties, setProperties] = useState(props.properties);
    const [id,setID] = useState(props.id);
    const [addComment, setAddComment] = useState(false)
    const [comment_, setComment] = useState("")
    const [email_, setEmail] = useState("")
    

    const toggleComment = () =>{
        setAddComment(!addComment)
    } 

    const updateDB = () => {
        console.log(properties)
    }

    const addCommentToProperty = (e) => {
        e.preventDefault();
        const newCom = {comment: comment_, email:email_}
        // console.log(newCom)
        properties[id]['comments'].push(newCom)
        localStorage.setItem('properties-list', JSON.stringify(properties));
        toggleComment()
    }

    const property_details = `${properties[id]['bedroomNumber']} bds | ${properties[id]['bathroomNumber']} ba | ${properties[id]['sqftNumber']} sqft - House For Sale`
    useEffect(() => {
        // localStorage.setItem('properties-list', JSON.stringify(properties));
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
            {addComment &&<div>
                <form onSubmit={(addCommentToProperty)}>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="write comment here" name="comment" 
                onChange={(e) => setComment(e.target.value)} value={comment_}/>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="Enter email Address" name="email" 
                onChange={(e) => setEmail(e.target.value)} value={email_}/>
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
        </div>
        </div>
        </div>
    );
}

export default ListingDetails