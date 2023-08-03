import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light py-4">
      <div className="row">
        <div className="col-md-4">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="col-md-4">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="col-md-4">
          <h3>Company Info</h3>
          <p>About Us</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
}


export default Footer