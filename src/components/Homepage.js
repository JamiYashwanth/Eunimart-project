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
    <div >
        {users.map((user) => {
          return (
            <div classname="home">
            <li className="text">
              <div className="cardpice">
                  <Link onClick={<Card/>} to={`/users/${user.id}`} className="text"> {user.first_name} </Link>
                </div>
            </li>
            </div>
          );
        })}
    </div>
  );
}