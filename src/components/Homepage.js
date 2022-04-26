import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from './Card';
import "./homepage.css"
import { useEffect, useState } from 'react';



export default function HomePage(props) {
    const [users,setUsers] = useState([])

    const usersData = async() => {
        const response = await axios.get(`https://reqres.in/api/users/`);
        console.log(response.data.data);
        await setUsers(response.data.data);
        await console.log("users =",users);
    } 

     useEffect(() => {
    usersData();
  },[])


  return (
    <div className="block">
        <h1 className="users">Users</h1>
        <div classname="home">
        {users.map((user) => {
          return (
              <div className="cardpice">
                <div classname="display3" className="text">{user.first_name}</div>
                <Link onClick={<Card/>} to={`/users/${user.id}`} className="text1"> <div className="know">Know more!!!</div> </Link>
              </div>
          );
        })}
        </div>
    </div>
  );
}