import React,{useEffect,useState} from 'react'
import axiosInstance from '../../axios/axios'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { changeName,changeEmail,changePhonenumber,changePassword,changeEditstate,changeDeletestate } from "../../feautures/adminhome";
import axios from 'axios';
import "./Adminhome.css"

const Adminhome = () => {
    const admin= useSelector((state)=> state.adminhome)
    const dispatch=useDispatch()



    
    const addUserHandler =()=>{
        console.log(admin.value.name + admin.value.email +admin.value.password +admin.value.phonenumber);
        const datas={
            "name":admin.value.name,
            "email":admin.value.email,
            "password":admin.value.password,
            "phonenumber":admin.value.phonenumber
        }
        axiosInstance.post("adminadduser/",datas).then((res)=>{
            alert("User Added")
            localStorage.setItem("alluserdetails",JSON.stringify(res.data.userdatas))
            setUserDatas(()=>JSON.parse(localStorage.getItem("alluserdetails")))
            setAddUserState(()=>false)

        }).catch((err)=>alert(err))
    }
    
    const[userDatas,setUserDatas]=useState(JSON.parse(localStorage.getItem("alluserdetails")))

    const [deleteState,setDeleteState]=useState(false)
    const [editState,setEditState]=useState(false)
    const [addUserState,setAddUserState]=useState(false)







    








    const data=JSON.parse(localStorage.getItem("alluserdetails"))
    console.log(userDatas);
    const navigate=useNavigate()

    const editUserHandler=()=>{
        const datas={
            id:admin.value.editactive,
            name:admin.value.name,
            email:admin.value.email,
            phonenumber:admin.value.phonenumber


        }
        axiosInstance.put("edituser/",datas).then((res)=>{
            localStorage.setItem("alluserdetails",JSON.stringify(res.data.userdatas))
            setUserDatas(()=>JSON.parse(localStorage.getItem("alluserdetails")))
            setEditState(()=>false)
        })
    }


    const deleteHandlerfunc=()=>{
        console.log(admin.value.deleteactive)
        
        // const values={
        //     id:admin.value.deleteactive,

        // }
    
        axiosInstance.post(`admindeleteuser/${admin.value.deleteactive}`).then((res)=>{
            console.log(res.data.msg)
            localStorage.setItem("alluserdetails",JSON.stringify(res.data.userdatas))
            setUserDatas(()=>JSON.parse(localStorage.getItem("alluserdetails")))
            setDeleteState(()=>false)
        }).catch((err)=>alert(err))
    }
    // useEffect(
    //     ()=>{
    //         axiosInstance.get("admindisplay/").then((res)=>{
    //             // console.log(res.data.userdatas)
    //             const parsed=JSON.parse(localStorage.getItem("alluserdetails"))
    //             setUserDatas(parsed)
               
    //             //console.log(parsed);
             
           
                

    //         }).catch((err)=>console.log(err))
            
    //     },[]
    // )

    // useEffect(() => {
    //     const storedDetails = localStorage.getItem("alluserdetails");
    //     if (storedDetails) {
    //       const parsedData = JSON.parse(storedDetails);
    //       setUserDatas(parsedData);
    //       //setImage(`http://127.0.0.1:8000${parsedData.image}`)
    //       console.log(parsedData);
    //     }
    //   }, []);
        
    
  return (
    <div>


        
        
        <button className="btn btn-danger logoutbtn" onClick={
            ()=>{
                localStorage.removeItem("adminAccessToken")
                localStorage.removeItem("alluserdetails")
                navigate("../adminlogin/")
                
            }
        }>Logout</button>

        <button className='btn btn-warning adduserbtn' onClick={()=>setAddUserState((prev)=>!(prev))}>Add User</button>
    



        {
            deleteState? <div>
                <h2>Are you sure you want to Delete?</h2>
                <button onClick={deleteHandlerfunc}>Confirm</button>
            </div>: ""
        }

    {
        addUserState? 
        <div class="addusercard ">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control "
                id="name"
                name="name"
                required
                value={admin.value.name}
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
                value={admin.value.email}
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
                value={admin.value.phonenumber}
                onChange={(e) => dispatch(changePhonenumber(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Password:</label>
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
            <button onClick={addUserHandler} className='btn btn-success'>Add User</button>


        </div>: ""
    }

<div class="container mt-5">
  <h2>Users List</h2>
  <table class="table table-bordered table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone Number</th>
    
      </tr>
    </thead>
    <tbody>
    {userDatas.map(
            (item)=>{
                return(
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phonenumber}</td>
                    <td><button className='btn btn-warning' onClick={()=>{
                        dispatch(changeEditstate(item.id))
                        setEditState(()=>true)


                    }}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={()=>{
                        dispatch(changeDeletestate(item.id))
                        setDeleteState(()=>true)
                    }}>Delete</button></td>
                    
                  </tr>


                   

                )
           
            }
        )
        }
    </tbody>
  </table>
  {
    editState ? 
    <div className="editcard">
        <h1>Edit Details</h1>
        <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={admin.value.name}
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
                value={admin.value.email}
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
                value={admin.value.phone}
                onChange={(e) => dispatch(changePhonenumber(e.target.value))}
              />
            </div>
            <button onClick={editUserHandler} className="btn btn-success">Submit</button>

            {/* <div>{admin.value.editactive}</div> */}
        


        
    </div>  :""
    
  }


</div>


    

      

        

   



    </div>
  )
}

export default Adminhome