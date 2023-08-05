import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    name:"",
    email:"",
    phonenumber:"",
    password:"",
    editactive:null,
    deleteactive:null,
    searchvalue:""

  
}


const adminHomeSlice = createSlice(
    {
        name:"adminhome",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            changeEmail:(state,action)=>{
                state.value.email=action.payload
            },
            changeName:(state,action)=>{
                state.value.name=action.payload
            },
            changePhonenumber:(state,action)=>{
                state.value.phonenumber=action.payload
            },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },
            changeEditstate:(state,action)=>{
                state.value.editactive=(action.payload)
            },
            changeDeletestate:(state,action)=>{
                state.value.deleteactive=action.payload
            },
            changeSearch:(state,action)=>{
                state.value.searchvalue=action.payload
            }
        
    

        }



    }


)

export const {changeEmail,changeName,changePhonenumber,changePassword,changeEditstate,changeDeletestate,changeSearch} = adminHomeSlice.actions

export default adminHomeSlice.reducer