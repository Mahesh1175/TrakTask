import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/cards/cardSlice.js"; 

export default configureStore({
    reducer:{
        cards:usersReducer,
    },
})