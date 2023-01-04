import './App.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Card from '../components/Card';
import Login from '../Login/Login';
import { useState } from 'react';
import { Users, Properties } from '../Data/Data';
import CreateListing from '../CreateListing/CreateListing';



function Homepage() {

  const [verify,setVerification] = useState(false)
  

  const toggleVerify = () => {
    setVerification(!verify);
  }
 

  return (
    <div className="App">
      <header>
        <Navbar/>
        <div className="w-full h-screen shadow-sm bg-[url('./bg.jpg')]">
          <Search/>
          <div className='flex h-3/4 mt-4 mx-10'>
            <div className='w-0 bg-gray-300 lg:visible invisible lg:w-2/3'>
              {/*Paste your MAP API here*/}
            </div>
            <div className='lg:w-2/6 md:w-2/6 bg-white overflow-auto sm:w-full'>

              {Properties.map((property)=>{ 
                return <Card key={property.listingID} price={property.listingPrice}
                  beds={property.bedroomNumber} baths={property.bathroomNumber} area = {property.sqftNumber}
                  userName = {Users[property.userAdded].name} address ={property.address}
                />
              })}

            </div>
          </div>
        </div>
      </header>

    {/* <Login verify={verify} toggle={toggleVerify}/> */}
    </div>
  );
}

export default Homepage;
