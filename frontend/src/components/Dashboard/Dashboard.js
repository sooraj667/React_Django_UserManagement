import React, { useContext,useEffect,useState } from "react";
import Authcontext from "../../context/Logincontext";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios/axios";
import axios from "axios";

const Dashboard = () => {
  const { userDecode,accessToken,setAccessToken,setUserDecode } = useContext(Authcontext);
  
  const [userdetails,setUserDetails]=useState("")
  const[toEdit,setToEdit]=useState(false)
  const[nameChange,setNameChange]=useState("")
  const [image,setImage]=useState("")
  const handleEdit=()=>{
    axiosInstance.post(`edituser/${userdetails.id}`,{"name":nameChange}).then((res)=>{
      console.log(res.data)
      localStorage.setItem("details",JSON.stringify(res.data))
      setUserDetails(res.data)

    }).catch((err)=>alert(err))}


  useEffect(() => {
    const storedDetails = localStorage.getItem("details");
    if (storedDetails) {
      const parsedData = JSON.parse(storedDetails);
      setUserDetails(parsedData);
      setImage(`http://127.0.0.1:8000${parsedData.image}`)
      console.log(parsedData);
    }
  }, []);


  const navigate=useNavigate()
  console.log(accessToken)

  const logout=()=>{
    setAccessToken("")
    setUserDecode("")
    localStorage.removeItem("authToken")
    localStorage.removeItem("details")
    navigate("/loginpage")


  }

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
      User Dashboard
      {console.log(accessToken)}
      <button onClick={logout}>Log Out</button>
      <h1>Welcome</h1>{ userDecode.username}
      <div>
        {/* {JSON.parse(localStorage.getItem("details")).name} */}
        <img src={image} alt="sd" />
     
        
        
     
      </div>
      {/* <button onClick={()=>{
        setUserDetails(JSON.parse(localStorage.getItem("details")))
        

      }}>CLICK</button> */}
     

      {console.log(userdetails,"##################")}

      {console.log(image)}







      {userdetails? <h1>{userdetails.name +"  " + userdetails.email} </h1>:<div>hh</div> }


      <button onClick={()=>{
        setToEdit(true)
      }}>EDIT CLICK</button>

      { toEdit &&  
      <div>
            <div className="form-group">
            <label htmlFor="username">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              value={nameChange}
              onChange={(e)=>setNameChange(e.target.value)}
             
            />
            
          </div>
          <button onClick={handleEdit}>SUBMIT</button>

          </div>

      
    
    
    
    
    }






      

    </div>
  );
};

export default Dashboard;
