import { createSlice } from "@reduxjs/toolkit";



const productSlice = createSlice({
    name: '',

    initialState: {
        isLoading : false,
        data : null ,
        isError : false,
    },


})

export default  productSlice.reducer;