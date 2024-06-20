// src/api.js
import axios from 'axios';

// const BASE_URL = 'http://192.168.68.151:4444';
const BASE_URL = 'https://663cb99e17145c4d8c3769d3.mockapi.io/Movie/api/1';

// export const fetchProducts = async () => {
//     const response = await axios.get(`${BASE_URL}/products/`);
//     return response.data;
// };
export const fetchProducts = async () => {
    const response = await axios.get(`${BASE_URL}/macaronShop/`);
    return response.data;
};

export const addProduct = async (product) => {
    const response = await axios.post(`${BASE_URL}/products/`, product);
    return response.data;
};

export const deleteProduct = async (productId) => {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`);
    return response.data;
};

// Additional functions for registration, password recovery, etc.
export const registerUser = async (userData) => {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
};

export const recoverPassword = async (email) => {
    const response = await axios.post(`${BASE_URL}/recover-password`, { email });
    return response.data;
};



