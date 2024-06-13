// src/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerUser, recoverPassword } from '../api';

export const registerUserThunk = createAsyncThunk(
    'auth/registerUser',
    async (userData) => {
        const { data } = await registerUser(userData);
        return data;
    }
);

export const recoverPasswordThunk = createAsyncThunk(
    'auth/recoverPassword',
    async (email) => {
        const {data} = await recoverPassword(email);
        return data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUserThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(registerUserThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.user = action.payload;
            })
            .addCase(registerUserThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(recoverPasswordThunk.fulfilled, (state) => {
                state.status = 'succeeded';
            });
    },
});

export default authSlice.reducer;
