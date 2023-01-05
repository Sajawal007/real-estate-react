import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage/Homepage';
import reportWebVitals from './reportWebVitals';
import CreateListing from './CreateListing/CreateListing';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom';
import Listings from './Listings/Listings';
import Login from './Login/Login';
import ListingDetails from './ListingDetails/ListingDetails'
import EditListing from './EditListing/EditListing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Defining Multiple Pages paths on respective link access 
    e.g: localhost:3000/create to access page for new property to create*/}
    <BrowserRouter>
    <Routes>
      <Route exact path = "/" element = {<Homepage/>}/>
      <Route path = "/create" element = {<CreateListing/>}/>
      <Route path = "/listings" element = {<Listings/>}/>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/details" element = {<ListingDetails/>}/>
      <Route path = "/editing" element = {<EditListing/>}/>
      </Routes>
    </BrowserRouter>
    {/* <CreateListing/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
