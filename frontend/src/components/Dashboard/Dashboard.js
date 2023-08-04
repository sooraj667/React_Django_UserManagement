import React, { useContext, useEffect, useState } from "react";
import Authcontext from "../../context/Logincontext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import axios from "axios";
import "./Dashboard.css";
import { storage } from "../../firebase/firebaseconfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
const Dashboard = () => {
  const { userDecode, accessToken, setAccessToken, setUserDecode } =
    useContext(Authcontext);

  const [userdetails, setUserDetails] = useState("");
  const [toEdit, setToEdit] = useState(false);
  const [nameChange, setNameChange] = useState("");
  const [image, setImage] = useState("");
  const [fireimage, setFireimage] = useState("");

  const [userImage,setUserImage]=useState("")

  const uploadImage = () => {
    if (fireimage != "") {
      const imageref = ref(storage, `images/${fireimage.name + v4()}`);
      uploadBytes(imageref, fireimage)
        .then((res) => {
          console.log(res);
          getDownloadURL(imageref)
            .then((url) => {
              console.log(url);
              //ithuvare sheri aa
              // const imageurl=url
              const parsit=JSON.parse(localStorage.getItem("details"))
              const userid=parsit.id
              console.log(userid)
              const datas={
                imageurl:url,
                userid:userid
                
              }
              axiosInstance.post("uploadimage/",datas).then((res)=>{
                console.log(res.data);
                localStorage.setItem("details", JSON.stringify(res.data.userdatas));
                setUserDetails(res.data.userdatas);

              }).catch((err)=>alert(" errro in calling the django view"))
            })
            .catch((err) => alert("ERROR ON DOWNLOADING URL"));
        })
        .catch((err) => alert(err));
    }
  };

  const handleEdit = () => {
    axiosInstance
      .post(`edituser/${userdetails.id}`, { name: nameChange })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("details", JSON.stringify(res.data));
        setUserDetails(res.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    if (storedDetails) {
      const parsedData = JSON.parse(storedDetails);
      setUserDetails(parsedData);
      setImage(`http://127.0.0.1:8000${parsedData.image}`);
      console.log(parsedData);
    }
  }, []);

  const navigate = useNavigate();
  console.log(accessToken);

  const logout = () => {
    setAccessToken("");
    setUserDecode("");
    localStorage.removeItem("authToken");
    localStorage.removeItem("details");
    navigate("/loginpage");
  };

  // const updateToken=()=>{
  //   console.log(accessToken.refresh +" BEFORE");
  //   axios(
  //     {
  //       method:"post",
  //       url: "http://127.0.0.1:8000/api/token/refresh/",
  //       data: {
  //       refresh: accessToken.refresh,

  //     },
  //     }
  //   ).then((res)=>{
  //       console.log(res+"  ACCESS");
  //       console.log(res+"  REFRESH");

  //   }).catch((err)=>{
  //     alert(err)
  //   })

  // }

  return (
    <div>
      {userdetails ? <h1>Welcome {userdetails.name} </h1> : <div></div>}

      {console.log(accessToken)}
      <button className="btn btn-danger btnlogout" onClick={logout}>
        Log Out
      </button>

      <div>
        {/* {JSON.parse(localStorage.getItem("details")).name} */}
        {/* <img src={image} alt="sd" /> */}

        <div className="row">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
              alt="Hotel Lobby"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6">
            <button
              className="btn btn-warning btnedit"
              onClick={() => {
                setToEdit((prev) => !prev);
              }}
            >
              Edit Details
            </button>

            {toEdit && (
              <div className="editcard card p-3">
                <div className="form-group">
                  <label htmlFor="username">Name:</label>
                  <input
                    type="text"
                    className="form-control mt-4"
                    id="name"
                    name="name"
                    required
                    value={nameChange}
                    onChange={(e) => setNameChange(e.target.value)}
                  />
                </div>
                <button className="btn btn-success mt-4" onClick={handleEdit}>
                  SUBMIT
                </button>
              </div>
            )}
          </div>
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
              <p className="card-text">
                Experience our well-appointed and stylish luxury rooms.
              </p>
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
              <p className="card-text">
                Indulge in our exquisite dining options, crafted by top chefs.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={()=>{
        setUserDetails(JSON.parse(localStorage.getItem("details")))
        

      }}>CLICK</button> */}

      {console.log(userdetails, "##################")}

      {console.log(image)}

      <label htmlFor="">Select Image</label>
      <input type="file" onChange={(e) => setFireimage(e.target.files[0])} />
      <button onClick={uploadImage}>Upload Image</button>


      <div>

        {
          userdetails && <img src={userdetails.image} alt="loading" />
        }
      </div>


    </div>
    
  );
};

export default Dashboard;
