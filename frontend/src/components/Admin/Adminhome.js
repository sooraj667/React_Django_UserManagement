import React,{useEffect,useState} from 'react'
import axiosInstance from '../../axios/axios'
import { useNavigate } from 'react-router-dom'
const Adminhome = () => {
    const[userDatas,setUserDatas]=useState(JSON.parse(localStorage.getItem("alluserdetails")))
    const data=JSON.parse(localStorage.getItem("alluserdetails"))
    console.log(userDatas);
    const navigate=useNavigate()
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

        {userDatas.map(
            (item)=>{
                console.log(item.email);
                <h1>{item.email}</h1>
            }
        )
        }

        {console.log(userDatas+"HEYY")}

        {
            data.map(
                (item)=>{
                    return (
                        <h1>{item.email}</h1>
                    )
                    
                    // <input type="text" value={item.name} />
                    // console.log(item.name);
                }
            )
        }
        <input type="text" value={{data}} />

   



    </div>
  )
}

export default Adminhome