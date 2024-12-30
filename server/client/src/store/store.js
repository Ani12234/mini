import {configureStore }  from "@reduxjs/toolkit";

// import  authReducer from './auth-slice'
import adminProductsSlice from "./products-slice";
import shopCartSlice from "./shop/cart-slice/index"

const store= configureStore({
    reducer:{
        // auth:authReducer
        adminProducts: adminProductsSlice,
        shopCart: shopCartSlice,

    }
})


export default store;