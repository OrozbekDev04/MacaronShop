// src/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, deleteProduct } from '../api';

export const fetchProductsThunk = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const data = await fetchProducts();
        return data;
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
