import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("api/fetchData", async () => {
    const response = await axios.get("http://localhost:5000/data")
    return response.data
})

export const addData = createAsyncThunk("api/addData", async (newData) => {
    const response = await axios.post("http://localhost:5000/data", newData)
    return response.data
})

export const deleteData = createAsyncThunk("api/deleteData", async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`)
    return id
})

export const updateData = createAsyncThunk("api/updateData", async ({ id, data }) => {
    const response = await axios.put(`http://localhost:5000/data/${id}`, {
        id: id,
        name: data.name,
        age: data.age,
        city: data.city,
        subject: data.subject,
        gender: data.gender
    })
    return response.data
})

export const api = createSlice({
    name: "api",
    initialState: { record: [], loading: true },
    reducers: {},
    extraReducers: (builder => {
        // Fetch Data
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.record = action.payload
            state.loading = false
        })
        // Add Data
        builder.addCase(addData.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addData.fulfilled, (state, action) => {
            state.record.push(action.payload)
            state.loading = false
        })
        // Delete Data
        builder.addCase(deleteData.fulfilled, (state, action) => {
            state.record = state.record.filter(item => item.id !== action.payload)
            state.loading = false
        })
        // Update Data
        builder.addCase(updateData.fulfilled, (state, action) => {
            const index = state.record.findIndex(item => item.id === action.payload.id)
            if (index !== -1) {
                state.record[index] = action.payload
            }
            state.loading = false
        })
    })
})

export default api.reducer