import React from 'react'
import "./Header.css"
import { Link,Route,Routes } from 'react-router-dom'
const Header = () => {
  return (
    <div class="container-fluid bg-secondary header-div">
        <div className="col-md-4 ">
            <Link to="/" className="links">Home</Link>
            <Link to="/signuppage" className="links">Sign Up</Link>
            <Link to="/loginpage" className="links">Login</Link>

          




        </div>
        




    </div>
  )
}

export default Header