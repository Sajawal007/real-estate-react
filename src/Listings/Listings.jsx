import React from "react";
import Card from "../components/Card";
import { Users } from "../Data/Data";
import { useState,useEffect } from "react";
import { Properties } from "../Data/Data";
import Navbar from "../components/Navbar";
import ListingDetails from '../ListingDetails/ListingDetails'
import { Link } from "react-router-dom";

export default function Listings (props) {
    /* Searching String */
    const [query,setQuery] = useState("")
    const [clicked, setClicked] = useState(false)
    const [clicked_key,setClickedKey] = useState(-1)

    let [properties, setProperties] = useState(Properties);
    /*Get the clicked component's ID*/
    const handleClick = (key) => {
      setClicked(!clicked);
      setClickedKey(key);
    }
    // load listings data from local storage
    const getUpdatedData = () => {
        let list = localStorage.getItem('properties-list');
        if (list)
        {
          const lists = JSON.parse(list);
          properties = lists
          
        }
      }
      
      getUpdatedData()
    return(
        <>
        
        <Navbar Listings = {properties}/>
        {/*IF a property is selected show its details*/}
        <div className="ml-[500px]">
            <div>
              {/*Show search bar only when no component is selected to view in details*/}
               {!clicked && <input type='text' className='border rounded-lg border-gray-800 p-4 mt-[100px]' placeholder='Search by Coordinates' value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
                /> }
            </div>
            </div>
        <div className="w-full h-screen bg-white mx-auto">
        <div className='flex flex-row bg-white overflow-auto'>
          {/*Show all the listings properties if no component is selected to view in details*/}
        {properties.filter((property)=>property.coordinates.includes(query)).map((property,ind)=>{ 
        return <Link key={ind} to="/details" state={{"details": {"properties": properties, "id": ind}}}>
          <Card id={ind} key={property.listingID} price={property.listingPrice}
            beds={property.bedroomNumber} baths={property.bathroomNumber} area = {property.sqftNumber}
            userName = {Users[property.userAdded].name} address ={property.coordinates}
           ></Card></Link>
        })}
        </div>
        </div>
        </>
    );
}