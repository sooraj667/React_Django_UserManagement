import React, { useState, useContext } from "react";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { changeUsername, changePassword } from "../../feautures/customerlogin";
import axiosInstance from "../../axios/axios";
import jwt_decode from "jwt-decode";
import Authcontext from "../../context/Logincontext";
import { useNavigate } from "react-router-dom";
import "./Login.css"
const Login = () => {
  const { userDecode, setUserDecode, accessToken, setAccessToken } =
    useContext(Authcontext);

  

  const navigate = useNavigate();
  const cust = useSelector((state) => state.customerlogin);
  const dispatch = useDispatch();
  const handleLoginSubmit = () => {
    const userData = {
      email: cust.value.email,
      password: cust.value.password
    };
    axiosInstance
      .post("login/",userData)
      .then((res) => {
        console.log(res.data);
        console.log(res);

        const tokensobj = {
          refresh: res.data.refresh,
          access: res.data.access,
        };

        setAccessToken(tokensobj);

        const reqdatas = jwt_decode(res.data.access);
        setUserDecode(reqdatas);
        localStorage.setItem("authToken", JSON.stringify(res.data.access));
        localStorage.setItem("details", JSON.stringify(res.data.alldatas));


        navigate("/dashboard");
      })
      .catch((err) => alert(err + "MWONE"));
  };
  // axios({
  //   method: "post",
  //   url: "http://127.0.0.1:8000/api/token/",
  //   data: {
  //     username: cust.value.username,
  //     password: cust.value.password,
  //   },
  // })

  return (
    <div>
      <Header />
      <div className="card  addusercard">
      <div className="container mt-5">
        <h2 className="mb-4">Login Form</h2>

        <div className="form-group">
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            className="form-control"
            id="username"
            name="username"
            required
            value={cust.value.username}
            onChange={(e) => dispatch(changeUsername(e.target.value))}
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

        <button onClick={handleLoginSubmit} className="btn btn-success mt-4 mb-3">
          Login
        </button>
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
