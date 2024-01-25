import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'




export const fetchProducts = createAsyncThunk("Productsslice/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    const data = await res.json()
    return data
})

const Productsslice = createSlice({
    initialState: [],
    name: "Productsslice",
    reducers: {

    },
    extraReducers: (bulder) => {
        bulder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload
        })
    }
})


export const { } = Productsslice.actions
export default Productsslice.reducer