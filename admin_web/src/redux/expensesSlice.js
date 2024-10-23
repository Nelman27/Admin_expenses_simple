import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: [],
    reducers:{
        addExpense(state,action){
            state.push(action.payload)
        }

    }
})

export const {addExpense} = expensesSlice.actions;
export default expensesSlice.reducer;