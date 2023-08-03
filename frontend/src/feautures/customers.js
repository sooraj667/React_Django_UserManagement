import {createSlice} from "@reduxjs/toolkit"

const INITITALSTATE={

    name:"",
    email:"",
    phone:"",
    password:"",
    repassword:""
}


const customersSlice = createSlice(
    {
        name:"customers",
        initialState:{
            value:INITITALSTATE
        },
        reducers:{
            // changeUsername:(state,action)=>{
            //     state.value.username=action.payload
            // },
            changeName:(state,action)=>{
                state.value.name=action.payload
            },
            changeEmail:(state,action)=>{
                state.value.email=action.payload
            },
            changePhone:(state,action)=>{
                state.value.phone=action.payload
            },
            changePassword:(state,action)=>{
                state.value.password=action.payload
            },
            changeRepassword:(state,action)=>{
                state.value.repassword=action.payload
            },

        }








    }


)

export const {changeUsername,changeName,changeEmail,changePhone,changePassword,changeRepassword} = customersSlice.actions

export default customersSlice.reducer