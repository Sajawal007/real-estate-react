import React, { useState } from 'react'
import Button from './Button';
import CreateListing from '../CreateListing/CreateListing';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    
    let [open,setOpen]=useState(false);

    const [properties,setProperty] = useState(props.properties);

    
    const newTo = {
      pathname:"/create",
    }
    
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <Link to="/"><div className='hover:animate-bounce font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
        <span className='text-4xl text-indigo-500 mr-2 pt-2'>
        <ion-icon name="home"></ion-icon>
        </span>
        New York Renters Group
      </div>
      </Link>
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
            <li key="HOME" className='md:ml-8 text-xl md:my-0 my-7'>
              <a className='text-gray-800 hover:text-gray-400 duration-500'><Link to="/">HOME</Link></a>
            </li>
            <li key="LISTINGS" className='md:ml-8 text-xl md:my-0 my-7'>
              <a className='text-gray-800 hover:text-gray-400 duration-500'><Link to="/listings">LISTINGS</Link></a>
            </li>
        
        <Link to={newTo}>
        <Button className="md:ml-8">
          Add Listing
        </Button>
        </Link>
        
      </ul>
      </div>
    </div>
  )
}

export default Navbar