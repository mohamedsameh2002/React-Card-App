import { createSlice } from "@reduxjs/toolkit";



export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers: {
        addToCart: (state, action) => {
            const search = state.find((el) => el.id === action.payload.id)
            if (search) {
                search.qtn += 1
            } else {
                let productClone = { ...action.payload, qtn: 1 }
                state.push(productClone)
            }
        },
        deleteFromCart: (state, action) => {
            return state.filter((el) => el.id !== action.payload.id)
        },
        clearCart: (state, action) => { return [] },
    },


})


export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer