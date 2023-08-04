import React from "react";
import Header from "../Home/Header/Header";
import axios from "axios";
import axiosInstance from "../../axios/axios";
import { useEffect } from 'react';
import {  useSelector,useDispatch } from 'react-redux';
import {changeName,changeEmail,changePhone,changePassword,changeRepassword} from "../../feautures/customers"
import "./Signup.css"
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const cust=useSelector((state)=>state.customers)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=()=>{
      console.log(cust.value)
      const data={
            
        "name":cust.value.name,
        "email":cust.value.email,
        "phonenumber":cust.value.phone,
        "password":cust.value.password,
        // "repassword":cust.value.repassword,

      }

      axiosInstance.post("signup/",data).then((res)=>{
        console.log(res.data)
        navigate("/loginpage")


      } ).catch((err)=>console.log(err))


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
  <div className="row justify-content-center">
    <div className="col-md-6">
      <div className="card signupcard">
        <div className="card-header">
          <h2>Sign Up Form</h2>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={cust.value.name}
                onChange={(e) => dispatch(changeName(e.target.value))}
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
                onChange={(e) => dispatch(changeEmail(e.target.value))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                required
                value={cust.value.phone}
                onChange={(e) => dispatch(changePhone(e.target.value))}
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
                onChange={(e) => dispatch(changePassword(e.target.value))}
              />
            </div>

            <button onClick={handleSubmit} className="btn btn-success btn-block">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Signup;
