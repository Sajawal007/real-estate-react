
const inputValidation = (listingObject) => {
    if(!listingObject.listingAddress || listingObject.listingAddress.length > 200)
    {
        return "Failed! Please Enter Address within 200 characters"
    }
    else if(!listingObject.coordinates || !listingObject.coordinates.match(/^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/))
    {
        return "Failed! Please Enter Coordinates e.g 47.000, 23.4523"
    }
    else if(!listingObject.listingPrice || !listingObject.listingPrice.match((/^[0-9]+$/)))
    {
        return "Failed! Please Check Price :)"
    }   
    else if(!listingObject.bedroomNumber || !listingObject.bedroomNumber.match((/^[0-9]+$/)))
    {
        return "Failed! Enter Valid Bedroom Numbers"
    }
    else if(!listingObject.bathroomNumber || !listingObject.bathroomNumber.match((/^[0-9]+$/)))
    {
        return "Failed! Enter Valid Bathroom Numbers"
    }   
    else if(!listingObject.sqftNumber || !listingObject.sqftNumber.match((/^[0-9]+$/)))
    {
        return "Failed! Enter Valid Area in sqft"
    }
    else if(!listingObject.contact || !(listingObject.contact.length > 9))
    {
        return "Enter valid Phone Number"
    }
    else
    {
        return null
    }
}
const validateEmail = (comment) => {
    if(!comment.email || !comment.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !comment.comment)
    {
        return "Enter Valid Comment"
    }
    else
    {
        return null
    }
}

export {inputValidation,validateEmail}