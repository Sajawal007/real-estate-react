import React from 'react';


//listing property small cards
// shows brief infos of properties
const Card=(props)=>{
    const img=props.imgsrc;
    const price=props.price;
    const property_details = `${props.beds} bds | ${props.baths} ba | ${props.area} sqft - House For Sale`
    const address= props.address
    const userName = props.userName

return (
    /* onSelect function is being called from homepage or listings, 
        it helps to return Key of the selected card to homepage or listings*/
    <div className="py-10 pl-10 mx-10" onClick={()=>{props.onSelect(props.id)}}>
        <div className='rounded overflow-hidden shadow-lg max-w-sm text-start p-5 bg-gray-100'>
            <img className="w-full h-auto p-5" src="../home.jpg" alt="property img"></img>
            <a className='text-xl font-bold'>{`$${price}`}</a>
            <p className='text-s'>{property_details}</p>
            <p className='text-xs'>{address}</p>
            <p className='text-xs'>Listing by {userName}</p>
        </div>
    </div>
);
}

export default Card;