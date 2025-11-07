import { createSlice } from "@reduxjs/toolkit";

export const Counter = createSlice({
    name : "Counter",
    initialState : {Count : 0},
    reducers : {
        incremnet : (state,actions)=>{
            state.Count += 1
        },
        decrement : (state,actions)=>{
            state.Count -= 1
        }
    }
})

export default Counter.reducer
export const {incremnet,decrement} = Counter.actions