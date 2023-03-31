import { configureStore } from '@reduxjs/toolkit'
import cartReducer from  '../redux/slices/countSlice'


export const store = configureStore({
    reducer:cartReducer
})