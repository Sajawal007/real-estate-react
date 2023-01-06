import {useState,React} from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Properties } from "../Data/Data";
import { Link, useLocation } from "react-router-dom";
import { inputValidation } from "../inputValidation";





const EditListing = () =>{
    //check status whether user has updated the forms or not
    const [updated,setUpdated] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")


    const toggleUpdated = () => {
        setUpdated(!updated)
    }

    const toggleError=  () => {
        setError(!error)
    }
    {/*Using <Link> library to obtain values(ID) passed as propes through button press */}
    const location = useLocation()
    const { from } = location.state
    
    const [id,setID] = useState(from)
    let [properties,addProperty] = useState(Properties)
    const list = localStorage.getItem('properties-list')
    if(list){
        const lists = JSON.parse(list)
        properties = lists
    }
    // declaring each attribute of listings to take inputs
    let [listinID,setListingID] = useState(id);
    let [listingAddress,setListingAddress] = useState(properties[listinID]['listingAddress'])
    let [listingPrice,setListingPrice] = useState(properties[listinID]['listingPrice'])
    let [bedrooms,setBedrooms] = useState(properties[listinID]['bedroomNumber'])
    let [bathrooms,setBathrooms] = useState(properties[listinID]['bathroomNumber'])
    let [sqftNumber,setSqftNumber] = useState(properties[listinID]['sqftNumber'])
    let [contact,setContact] = useState(properties[listinID]['contact'])
    let [comments,setComments] = useState(properties[listinID]['comments'])
    let[coordinates,setCoordinates] = useState(properties[listinID]['coordinates'])
    let [listingObject, setListingObject_] = useState(Properties[0])

    //handles and updates the updated values
    const handleSubmit = (e) => {
        e.preventDefault();

        if (error) toggleError()

        const updatedProperty = {
            listingID: id, 
            listingAddress: listingAddress,
            coordinates:coordinates,
            listingPrice: listingPrice,
            bedroomNumber: bedrooms,
            bathroomNumber: bathrooms,
            sqftNumber: sqftNumber,
            contact: contact,
            comments: [],
            userAdded: 0,
        }
        setListingObject_(updatedProperty);
        // validation check
        const errString = inputValidation(updatedProperty);

        if (errString == null)
        {
            properties[id] = updatedProperty
            toggleUpdated()
            localStorage.setItem('properties-list',JSON.stringify(properties))
        }
        else
        {
            toggleError()
            setErrorMsg("")
            setErrorMsg(errString)
        }
    }

    return (
        <>
        <Navbar/>
        <div className="w-1/3 h-screen bg-white mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <h1 className="text-black pt-40 w-1/2 mx-auto text-2xl font-bold">EDIT PROPERTY</h1>
                <Button>Upload Picture</Button>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="Enter Address" name="address" 
                onChange={(e) => setListingAddress(e.target.value)} value={listingAddress}/>
                <input className="border rounded border-white-800 m-4 p-4" type="text" placeholder="Enter Coordinates lat,long" name="coordinates" 
                onChange={(e) => setCoordinates(e.target.value)} value={coordinates}/>
                
                <input className="border rounded border-white-800 m-4 p-2" type="text" placeholder="Enter Price" name="price" 
                onChange={(e) => setListingPrice(e.target.value)} value={listingPrice}/>
                <input className="border rounded border-white-800 m-4 p-2" type="text" placeholder="Number of Bedrooms" name="bedrooms" 
                onChange={(e) => setBedrooms(e.target.value)} value={bedrooms}/>
                <input className="border rounded border-white-800 m-4 p-2" type="text" placeholder="Number of Bathrooms" name="bathrooms" 
                onChange={(e) => setBathrooms(e.target.value)} value={bathrooms}/>
                <input className="border rounded border-white-800 m-4 p-3" type="text" placeholder="Enter Area" name="area" 
                onChange={(e) => setSqftNumber(e.target.value)} value={sqftNumber}/>
                <input className="border rounded border-white-800 m-4 p-2" type="text" placeholder="Enter Contact" name="contact" 
                onChange={(e) => setContact(e.target.value)} value={contact}/>
                {/*Let the user edit and save different input fields*/}
                {!updated && <h1 className="text-red-600">{errorMsg}</h1>}
                {!updated && <Button className="w-1/2 mx-auto" type="submit">
                    Save
                </Button>}
                {/*Display success message if the page is updated*/}
                {updated && !error && <h1 className="text-green-600">Success! Your Details Are Updated.</h1>}

            </div>
            </form>
        </div>
        </>
    );
}

export default EditListing;
