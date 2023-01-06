import {useState,React, useEffect} from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Properties } from "../Data/Data";
import { Link, useLocation } from "react-router-dom";
import {inputValidation} from '../inputValidation'





const CreateListing = (prop) =>{
    const [updated,setUpdated] = useState(false)
    const [error, setError] = useState(false)
    
    const toggleUpdated = () => {
        setUpdated(!updated)
    }
    const toggleError=  () => {
        setError(!error)
    }

    let [listinID,setListingID] = useState(-1);
    let [listingAddress,setListingAddress] = useState("")
    let [listingPrice,setListingPrice] = useState("")
    let [bedrooms,setBedrooms] = useState("")
    let [bathrooms,setBathrooms] = useState("")
    let [sqftNumber,setSqftNumber] = useState("")
    let [contact,setContact] = useState("")
    let [comments,setComments] = useState([])
    let[coordinates,setCoordinates] = useState("")
    let [listingObject, setListingObject_] = useState(Properties[0])
    let [properties,addProperty] = useState(Properties)
    const list = localStorage.getItem('properties-list')
    if(list){
        const lists = JSON.parse(list)
        properties = lists
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (error) toggleError()

        const newProperty = {
            listingID: properties.length, 
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
        setListingObject_(newProperty);
        // validation check
        const errString = inputValidation(newProperty);

        if (errString == null)
        {
            properties.push(newProperty);
            toggleUpdated()
            localStorage.setItem('properties-list',JSON.stringify(properties))
        }
        else
        {
            toggleError()
            alert(errString)
        }
    }

    return (
        <>
        <Navbar/>
        <div className="w-1/3 h-screen bg-white mx-auto">
            <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <h1 className="text-black pt-40 w-1/2 mx-auto text-2xl font-bold">POST PROPERTY</h1>
                <Button className="w-1/2 mx-auto">Upload Picture</Button>
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
                {updated && <h1 className="text-green-600">Success! Your Property Details Are Posted.</h1>}
            
                <Button className="w-1/2 mx-auto" type="submit">
                    Submit
                </Button>
                
            </div>
            </form>
        </div>
        </>
    );
}

export default CreateListing;