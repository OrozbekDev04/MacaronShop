// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../redux/productSlice.js';
import authReducer from '../redux/authSlice.js';

const store = configureStore({
    reducer: {
        products: productReducer,
        auth: authReducer,
    },
});

export default store;
