import './App.css';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Card from '../components/Card';
import Login from '../Login/Login';
import { useEffect, useState } from 'react';
import { Users, Properties } from '../Data/Data';
import CreateListing from '../CreateListing/CreateListing';
import Map from '../components/Map';
import { click } from '@testing-library/user-event/dist/click';
import ListingDetails from '../ListingDetails/ListingDetails';



function Homepage() {
  const [query,setQuery] = useState("")
  const [verify,setVerification] = useState(false)
  const [clicked, setClicked] = useState(false)
  const [clicked_key,setClickedKey] = useState(-1)
  let [properties,setProperty] = useState(Properties)

  //for login purpose,checks user is logged in or not, not useful
  const toggleVerify = () => {
    setVerification(!verify);
  }
  //detect the click over a listing component and show its details on click
  const handleClick = (key) => {
    setClicked(!clicked);
    setClickedKey(key);
  }
  //load data fom local storage, to retain data on refresh
  const getUpdatedData = () => {
    let list = localStorage.getItem('properties-list');
    if (list)
    {
      const lists = JSON.parse(list);
      properties = lists
    }
  }
  
  getUpdatedData()
  return (
    <div className="App">
      {/*SHOW Homepage only when No listings property is selected*/}
      {!clicked && <header>
        <Navbar/>
        <div className="w-full h-screen shadow-sm bg-[url('./bg.jpg')]">
          <Search/>
            <div>
                <input type='text' className='border rounded-lg border-gray-300 p-4 pl-10' placeholder='Search by Coordinates' value={query}
                onChange={(e)=>{setQuery(e.target.value)}}/>
            </div>
          <div className='flex h-3/4 mt-4 mx-10 pb-10'>
            <div className='w-0 bg-gray-300 lg:visible invisible lg:w-2/3 overflow-auto'>
              {/*MAP API IS INSERTED HERE, properties passed as props value*/}
              <Map properties={properties}/>
            </div>
            <div className='lg:w-2/6 md:w-2/6 bg-white overflow-auto sm:w-full'>
            {/*SHOW ALL LISTINGS propertie on right side of homepage*/}
              {properties.filter((property)=>property.coordinates.includes(query)).map((property)=>{ 
                return <Card onSelect ={handleClick} id={property.listingID} key={property.listingID} price={property.listingPrice} 
                  beds={property.bedroomNumber} baths={property.bathroomNumber} area = {property.sqftNumber}
                  userName = {Users[property.userAdded].name} address ={property.coordinates}
                />
              })}
              

            </div>
          </div>
        </div>
        
      </header>}
      {/*IF a listing is selected/clicked show its detailing page*/}
      {clicked && <ListingDetails properties={properties} id={clicked_key}/>}

    {/* <Login verify={verify} toggle={toggleVerify}/> */}
    </div>
  );
}

export default Homepage;
