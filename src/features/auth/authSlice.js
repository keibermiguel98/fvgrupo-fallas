import { createSlice} from "@reduxjs/toolkit";

 export const authSlice = createSlice({
    name: 'auth',
    initialState: [],
    reducers:{
     addAuth: (state,action)=>{console.log(state,action)}
    }
})

export const { addAuth } = authSlice.actions
export default authSlice.reducer