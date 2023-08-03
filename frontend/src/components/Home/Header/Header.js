import React from 'react'
import "./Header.css"
import { Link,Route,Routes } from 'react-router-dom'
const Header = () => {
  return (
    <div className="container-fluid bg-secondary py-3">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-4">
          <Link to="/" className="text-light mx-3">Home</Link>
          <Link to="/signuppage" className="text-light mx-3">Sign Up</Link>
          <Link to="/loginpage" className="text-light mx-3">Login</Link>
        </div>
        <div className="col-md-4 text-center">
          <h1 className="text-light">Your Logo</h1>
        </div>
        <div className="col-md-4 text-end">
          <button className="btn btn-light mx-3">Profile</button>
          <button className="btn btn-danger mx-3">Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Header