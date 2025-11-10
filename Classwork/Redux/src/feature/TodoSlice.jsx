import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name : "todo",
    initialState : {record : []},
    reducers : {
        addData : (state,action)=>{
            state.record.push(action.payload)
        },
        deleteData : (state,action)=>{

        },
        updateData : (state,action)=>{

        }
    }
})

export default todo.reducer
export const {addData,deleteData,updateData} = todo.actions