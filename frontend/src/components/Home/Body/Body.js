import React from 'react'

const Body = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome to Our Hotel Starlight Inn</h2>
          <p className="lead">Discover luxurious and comfortable accommodations for your next getaway.</p>
          <button className="btn btn-primary">Book Now</button>
        </div>
        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
            alt="Hotel Lobby"
            className="img-fluid rounded"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Room"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Luxury Rooms</h5>
              <p className="card-text">Experience our well-appointed and stylish luxury rooms.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Dining"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Gourmet Dining</h5>
              <p className="card-text">Indulge in our exquisite dining options, crafted by top chefs.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              alt="Spa"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Relaxing Spa</h5>
              <p className="card-text">Pamper yourself with rejuvenating spa treatments.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body