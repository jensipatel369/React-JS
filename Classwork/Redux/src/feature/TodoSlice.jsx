import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name : "todo",
    initialState : {record : []},
    reducers : {
        addData : (state,action)=>{
            state.record.push(action.payload)
        },
        deleteData : (state,action)=>{
            state.record = state.record.filter(item => item.id !== action.payload)
        },
        updateData : (state,action)=>{

        }
    }
})

export default todo.reducer
export const {addData,deleteData,updateData} = todo.actions