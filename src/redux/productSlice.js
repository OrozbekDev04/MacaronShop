// src/slices/productSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts, addProduct, deleteProduct } from '../api';

export const fetchProductsThunk = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const { data } = await fetchProducts();
        return data;
    }
);

export const addProductThunk = createAsyncThunk(
    'products/addProduct',
    async (product) => {
        const {data} = await addProduct(product);
        return data;
    }
);

export const deleteProductThunk = createAsyncThunk(
    'products/deleteProduct',
    async (productId) => {
        await deleteProduct(productId);
        return productId;
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
            })
            .addCase(addProductThunk.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (product) => product.id !== action.payload
                );
            });
    },
});

export default productSlice.reducer;
