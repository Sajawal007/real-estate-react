const Users = [
    {
        userID: 0,
        name: "John",
        password: "1234"
    },
    {
        userID: 1,
        name: "Mayo",
        password: "1234567"
    }
] 

const Properties = [
    {
        listingID: 0,
        listingAddress: "771 Curry Road, Rotterdam, NY 12306",
        coordinates:"40.7819273838117, -73.97160095063394",
        listingPrice: "275,000",
        bedroomNumber: "5",
        bathroomNumber: "2",
        sqftNumber: "2,667",
        contact: "+1-232313123",
        comments: [
            {
                comment:"This house is well built and have a prime location.",
                email:"mrwarmachine12@gmail.com"
        },
        {
            comment:"This house is well built but the price is quite high!",
            email:"warlordd11@yahoo.com"
    }

        ],
        userAdded: 0,
    },
    {
        listingID: 1,
        listingAddress: "1701 Campbell Avenue, Schenectady, NY 12306",
        coordinates:"40.77183331184797, -73.9652717149323",
        listingPrice: "219,000",
        bedroomNumber: "3",
        bathroomNumber: "2",
        sqftNumber: "1,684",
        contact: "+1-232313123",
        comments: [

            {
                comment:"This house is well built and have a prime location.",
                email:"mrwarmachine12@gmail.com"
        },
        {
            comment:"This house is well built but the price is quite high!",
            email:"warlordd11@yahoo.com"
    }
        ],
        userAdded: 1,
    }
]

export {Users,Properties}