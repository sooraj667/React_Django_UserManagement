import React, { useState,useEffect } from 'react'
import axiosInstance from '../../axios/axios'
const Dashnext = () => {
    const [datas,setDatas]=useState([])
    useEffect(
        ()=>{
            axiosInstance.get("getdata/").then((res)=>{
                setDatas(()=>res.data)
            }).catch((err)=>alert(err))
        },[]
      
    )
  return (
    <div>
        HELLO
        <h1>  {datas.name}</h1>
        <h1>   {datas.email}</h1>
        {
            datas.map(
                (item)=>{
                    return(
                        <div>{item.name}</div>
                    )
                }
            )
        }
      
       




    </div>
  )
}

export default Dashnext