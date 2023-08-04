import React,{useEffect,useState} from 'react'
import axiosInstance from '../../axios/axios'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux";
import { changeName,changeEmail,changePhonenumber,changeEditstate,changeDeletestate } from "../../feautures/adminhome";
import axios from 'axios';

const Adminhome = () => {
    const admin= useSelector((state)=> state.adminhome)
    const dispatch=useDispatch()





    
    const[userDatas,setUserDatas]=useState(JSON.parse(localStorage.getItem("alluserdetails")))







    








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

        {/* {
            userDatas &&userDatas.map(
                (item)=>{
                    <div>hello</div>

                }
            )
        } */}
        
        Adminhome
        <button onClick={
            ()=>{
                localStorage.removeItem("adminAccessToken")
                localStorage.removeItem("alluserdetails")
                navigate("../adminlogin/")
                
            }
        }>Logout</button>
        {console.log(userDatas)}

        {/* {
            userDatas.map(
                (item)=>{
                    <h1>{item.email}</h1>
                }
            )

            
        } */}
{/* 
        {
            userDatas.forEach(user => {
                <div>
                {console.log(user.email)}
                <h2>{user.email}</h2>
                <h1>{user.phonenumber}</h1>
                </div>
           
              })
        } */}

        {
            admin.value.deleteactive? <div>
                <h2>Are you sure you want to Delete?</h2>
                <button onClick={deleteHandlerfunc}>Confirm</button>
            </div>: ""
        }

<div class="container mt-5">
  <h2>Product List</h2>
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
                    <td><button className='btn btn-warning' onClick={()=>dispatch(changeEditstate(item.id))}>Edit</button></td>
                    <td><button className='btn btn-danger' onClick={()=>dispatch(changeDeletestate(item.id))}>Delete</button></td>
                    
                  </tr>


                   

                )
           
            }
        )
        }
    </tbody>
  </table>
  {
    admin.value.editactive ? 
    <div>
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
            <button onClick={editUserHandler}>Submit</button>

            <div>{admin.value.editactive}</div>
        


        
    </div>  :
     <h1>Not Hello</h1> 
  }

  {
    admin.value.deleteactive? <h1>{admin.value.deleteactive}</h1>:""
  }
</div>


    

      

        {/* {
            data.map(
                (item)=>{
                    return (
                        <h1>{item.email}</h1>
                    )
                    
                    // <input type="text" value={item.name} />
                    // console.log(item.name);
                }
            )
        } */}
        

   



    </div>
  )
}

export default Adminhome