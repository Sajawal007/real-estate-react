import React from "react";
import Card from "../components/Card";
import { Users } from "../Data/Data";
import { useState } from "react";
import { Properties } from "../Data/Data";
import Navbar from "../components/Navbar";

export default function Listings (props) {


    const [properties, setProperties] = useState(Properties);
    const setListingObject = (newObject) => {
        const updatedProperties = [...properties, ...[newObject]]
        setProperties(updatedProperties);
        console.log(properties);
      }
    return(
        <>
        <Navbar Listings = {properties}/>
        <div className="w-full h-screen bg-white mx-auto pt-40">
        <div className='flex flex-row bg-white overflow-auto'>
        {properties.map((property)=>{ 
        return <Card key={property.listingID} price={property.listingPrice}
            beds={property.bedroomNumber} baths={property.bathroomNumber} area = {property.sqftNumber}
            userName = {Users[property.userAdded].name} address ={property.address}
        />
        })}

        </div>
        </div>
        </>
    );
}