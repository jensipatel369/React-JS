import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api", async () => {
    const response = await axios.get("http://localhost:5000/data")
    return response.data
})

export const api = createSlice({
    name: "api",
    initialState: { record: [], loading: true },
    reducers: {
        addData: (state, action) => {
            state.record.push(action.payload)
        },
        deleteData: (state, action) => {
            let newData = state.record.filter(item => item.id != action.payload)
            state.record = newData
        },
        updateData: (state, action) => {
            let singleData = state.record.find((item) => item.id == action.payload.id);
            singleData.name = action.payload.data.name
            singleData.age = action.payload.data.age
        }
    },
    extraReducers: (builder => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.record = []
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.record = action.payload
            state.loading = false
        })
        builder.addCase(addData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addData.fulfilled, (state, action) => {
            state.record.push(action.payload)
            state.loading = false
        })
        builder.addCase(deleteData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteData.fulfilled, (state, action) => {
            let newData = state.record.filter(item => item.id != action.payload)
            state.record = newData
            state.loading = false
        })
        builder.addCase(updateData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updateData.fulfilled, (state, action) => {
            let singleData = state.record.find((item) => item.id == action.payload.id);
            singleData.name = action.payload.data.name
            singleData.age = action.payload.data.age
            state.loading = false
        })
    })
})

export default api.reducer
export const { addData, deleteData, updateData } = api.actions