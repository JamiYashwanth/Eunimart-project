import "./card.css";
import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios'

const id = window.location.pathname.split('/')[2];
export default function Card(props) {
    const [users,setUsers] = useState([])

    const usersData = async() => {
    const response = await axios.get(`https://reqres.in/api/users/${id}`);
    console.log(response.data.data);
    await setUsers(response.data.data);
    await console.log("users =",users);
  } 

    useEffect(() => {
        usersData();
    },[])
   
  return (
    <div className="data" >
        <div className="info">
            <p>Email : {users.email} <br /><br /></p>
            <p>First Name : {users.first_name} <br/><br /></p>
            <p>Last name : {users.last_name} <br /><br /></p>
            <p><img src={users.avatar}></img></p>
        </div>
    </div>
  );
}