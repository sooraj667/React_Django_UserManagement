import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {changeEmail,changePassword} from "../../feautures/adminlogin";
import axiosInstance from "../../axios/axios";
import "./Adminhome.css"
const Adminlogin = () => {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.adminlogin);
  const dispatch = useDispatch();

  const handleLoginSubmit=()=>{
    const data={
        email:admin.value.email,
        password:admin.value.password
    }
    axiosInstance.post("adminlogin/",data).then((res)=>{
        console.log(res.data);
        if(res.data.msg=="User Not found"){
            alert("Invalid Username Password")
        }
        else{
          console.log(res.data);
          localStorage.setItem("adminAccessToken",JSON.stringify(res.data.access))
          localStorage.setItem("alluserdetails",JSON.stringify(res.data.userdatas))
          navigate("../adminhome/")
        }
        
    }).catch((err)=>alert(err))

  }
  return (
    <div>
     

      <div className="container mt-5 addusercard">
    

        <div className="form-group">
          <label htmlFor="username ">Email:</label>
          <input
            type="email"
            className="form-control"
            id="username"
            name="username"
            required
            value={admin.value.email}
            onChange={(e) => dispatch(changeEmail(e.target.value))}
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
            value={admin.value.password}
            onChange={(e) => dispatch(changePassword(e.target.value))}
          />
        </div>

        <button onClick={handleLoginSubmit} className="btn btn-success">
          Login
        </button>
      </div>
    </div>
  );
};

export default Adminlogin;
