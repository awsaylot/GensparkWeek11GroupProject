import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ProductService from '../services/product.service'
import axios from 'axios';
const initialState = {
  products: [],
  status: 'idle', //idle, loading, succeeded, failed
  error: null
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/products')
    return [...response.data];
  } catch (error) {
    return error.message
  }
})


const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = state.products.concat(action.payload)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
});

export const selectAllProducts = (state) => state.product.products;
export const getProductsStatus = (state) => state.product.status;
export const getProductsError = (state) => state.product.error;

export const {} = productSlice.actions

export default productSlice.reducer