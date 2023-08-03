import { configureStore } from "@reduxjs/toolkit"
import customersSlice from "../feautures/customers"

const appstore=configureStore({
    reducer:{
        customers:customersSlice,

    }
})


export default appstore