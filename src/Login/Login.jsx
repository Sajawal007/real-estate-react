import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import {Users} from "../Data/Data"
import Button from "../components/Button";


const authenticate = (userName, password) => {
    for(let i =0; i< Users.length;i++)
    { 
        if(Users[i].name == userName.toString() && Users[i].password == password.toString())
        {
            console.log("hellp")
            return true;
        }
    }
    return false;
}
const Login = (props) => {
    let [userName, setUserName] = useState("");
    let [password, setPassword] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault();

       const newEntry = {userName: userName, password:password};
       if (authenticate(newEntry["userName"],newEntry["password"]) == true)
       {    
        props.toggle()
       }
    }

    return (
    <>
    {<Navbar/>}
    <div className="w-1/3 mx-auto pb-4 py-60">
        <form onSubmit = {handleSubmit}>
        <h1 className="text-2xl font-semibold">LOGIN</h1>
        <div className={`flex flex-col rounded bg-slate-200 ${props.verify ? "hidden": ""}`}>
        <input className="border rounded border-gray-800 m-4 p-2" 
        type="text" placeholder="enter name" name="username" onChange={(e) => setUserName(e.target.value)} value={userName}>
        </input>
        <input className="border rounded border-gray-800 m-4 p-2" type="password" placeholder="enter password" name="password"
        onChange={(e) => setPassword(e.target.value)} value={password}
        ></input>
        <Button type="submit">
            Submit
        </Button>
        </div>
        </form> 
        {props.verify && <h1>Login Successfull!</h1>}
    </div>
    </>
    );
}

export default Login