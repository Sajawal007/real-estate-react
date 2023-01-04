import './App.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Card from '../components/Card';
import Login from '../Login/Login';
import { useState } from 'react';
import { Users, Properties } from '../Data/Data';



function Homepage() {
  const [verify,setVerification] = useState(false)
  const toggleVerify = () => {
    setVerification(!verify);
  }

  return (
    <div className="App">
      <header>
        <Navbar/>
        <div className='bg-indigo-600 w-full h-screen shadow-sm'>
          <Search/>
          <div className='flex h-3/4 mt-4 mx-10'>
            <div className='w-2/3 bg-black'>
            </div>
            <div className='w-2/6 bg-white overflow-auto'>

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
