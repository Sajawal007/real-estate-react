import React from 'react';

const Card=(props)=>{
    const img=props.imgsrc;
    const price=props.price;
    const property_details = `${props.beds} bds | ${props.baths} ba | ${props.area} sqft - House For Sale`
    const address= props.address
    const userName = props.userName

return (
    <div className="py-10 pl-10 mx-10">
        <div className='rounded overflow-hidden shadow-lg max-w-sm text-start p-5 bg-gray-100'>
            <img className="w-full h-auto p-5" src="../home.jpg" alt="property img"></img>
            <a className='text-xl font-bold'>{`$${price}`}</a>
            <p>{property_details}</p>
            <p>{address}</p>
            <p className='text-xs'>Listing by {userName}</p>
        </div>
    </div>
);
}

export default Card;