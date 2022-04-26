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
    } 

    useEffect(() => {
        usersData();
    },[])
   
  return (
    <div className="data" >
        <div className="info">
            <img className="avatar" src={users.avatar}></img> 
            <div className="display2">
              <div><span className="title">Email :</span></div> 
              <div> {users.email}</div>
            </div>
            <div className="display2">
              <div><span className="title">First Name :</span> </div> 
              <div>{users.first_name} </div>
            </div>
            <div className="display2">
              <div><span className="title">Last Name :</span> </div>
              <div>{users.last_name} </div>
            </div>
        </div>
    </div>
  );
}