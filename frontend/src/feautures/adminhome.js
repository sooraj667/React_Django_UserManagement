import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={
    name:"",
    email:"",
    phonenumber:"",
    editactive:null,
    deleteactive:null

  
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
            changeEditstate:(state,action)=>{
                state.value.editactive=(action.payload)
            },
            changeDeletestate:(state,action)=>{
                state.value.deleteactive=action.payload
            }
        
    

        }



    }


)

export const {changeEmail,changeName,changePhonenumber,changeEditstate,changeDeletestate} = adminHomeSlice.actions

export default adminHomeSlice.reducer