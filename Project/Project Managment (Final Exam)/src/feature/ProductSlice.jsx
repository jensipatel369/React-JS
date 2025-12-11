import { createSlice } from "@reduxjs/toolkit";

export const product = createSlice({
    name: "product",
    initialState: { record: [] },
    reducers: {
        addData: (state, action) => {
            state.record.push(action.payload)
        },
        deleteData: (state, action) => {
            // state.record = state.record.filter(item => item.id != action.payload)
            let newData = state.record.filter(item => item.id != action.payload)
            state.record = newData
        },
        updateData: (state, action) => {
            let singleData = state.record.find((item) => item.id == action.payload.id);
            singleData.name = action.payload.data.name
            singleData.age = action.payload.data.age
        }
    }
})

export default product.reducer
export const { addData, deleteData, updateData } = product.actions