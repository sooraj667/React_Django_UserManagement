import React from "react";
import Header from "../Home/Header/Header";
import axios from "axios";
import axiosInstance from "../../axios/axios";
import { useEffect } from 'react';
import {  useSelector,useDispatch } from 'react-redux';
import {changeName,changeEmail,changePhone,changePassword,changeRepassword} from "../../feautures/customers"
const Signup = () => {
    const cust=useSelector((state)=>state.customers)
    const dispatch=useDispatch()

    const handleSubmit=()=>{
      console.log(cust.value)
      const data={
            
        "name":cust.value.name,
        "email":cust.value.email,
        "phonenumber":cust.value.phone,
        "password":cust.value.password,
        // "repassword":cust.value.repassword,

      }

      axiosInstance.post("signup/",data).then((res)=> console.log(res.data)).catch((err)=>console.log(err))


      // axios(
      //   {
      //     method:"post",
      //     url:"http://127.0.0.1:8000/api/signup/",
      //     data:{
            
      //       "name":cust.value.name,
      //       "email":cust.value.email,
      //       "phone":cust.value.phone,
      //       "password":cust.value.password,
      //       "repassword":cust.value.repassword,

      //     }
      //   }
      // ).then((res)=> console.log(res.data))
    }

  return (
    <div>
      <div className="container mt-5">
        <h2>Sign Up Form</h2>
    
          {/* <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              required
              value={cust.value.username}
              onChange={(e)=> dispatch(changeUsername(e.target.value))}
             
            />
            
          </div> */}

          <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              value={cust.value.name}
              onChange={(e)=> dispatch(changeName(e.target.value))}
             
            />
            
          </div>
          

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              value={cust.value.email}
              onChange={(e)=> dispatch(changeEmail(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Phone:</label>
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              required
              value={cust.value.phone}
              onChange={(e)=> dispatch(changePhone(e.target.value))}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              required
              value={cust.value.password}
              onChange={(e)=> dispatch(changePassword(e.target.value))}
            />
          </div>

          {/* <div className="form-group">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              name="confirm_password"
              required
              value={cust.value.repassword}
              onChange={(e)=> dispatch(changeRepassword(e.target.value))}
            />
          </div> */}

          <button onClick={handleSubmit}  className="btn btn-primary">
            Sign Up
          </button>
    
      
      </div>
    </div>
  );
};

export default Signup;
