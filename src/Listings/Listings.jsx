import React from "react";
import Card from "../components/Card";
import { Users } from "../Data/Data";
import { useState } from "react";
import { Properties } from "../Data/Data";
import Navbar from "../components/Navbar";
import ListingDetails from '../ListingDetails/ListingDetails'

export default function Listings (props) {
    const [query,setQuery] = useState("")
    const [clicked, setClicked] = useState(false)
    const [clicked_key,setClickedKey] = useState(-1)
    const handleClick = (key) => {
      setClicked(!clicked);
      setClickedKey(key);
    }
    let [properties, setProperties] = useState(Properties);
    const getUpdatedData = () => {
        let list = localStorage.getItem('properties-list');
        if (list)
        {
          const lists = JSON.parse(list);
          properties = lists
          // lists.map((elem) => {
          //   let found = false
          //   for(let j=0;j<properties.length;j++)
          //   {
          //     if(properties[j].listingID == elem.listingID)
          //     {
          //       found = true
          //     }
          //   }
          //   if(found==false)
          //   properties.push(elem)
          
        }
      }
      
      getUpdatedData()
    return(
        <>
        
        <Navbar Listings = {properties}/>
        {clicked && <ListingDetails properties={properties} id={clicked_key}/>}
        <div className="ml-[500px]">
            <div>
               {!clicked && <input type='text' className='border rounded-lg border-gray-800 p-4 mt-[100px]' placeholder='Search by Coordinates' value={query}
                onChange={(e)=>{setQuery(e.target.value)}}
                /> }
            </div>
            </div>
        <div className="w-full h-screen bg-white mx-auto">
        <div className='flex flex-row bg-white overflow-auto'>
        {!clicked && properties.filter((property)=>property.coordinates.includes(query)).map((property)=>{ 
        return <Card onSelect ={handleClick} id={property.listingID} key={property.listingID} price={property.listingPrice}
            beds={property.bedroomNumber} baths={property.bathroomNumber} area = {property.sqftNumber}
            userName = {Users[property.userAdded].name} address ={property.coordinates}
        />
        })}
        </div>
        </div>
        </>
    );
}