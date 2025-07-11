import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState: {
        user: "",
        userID:"",
        useremail:"",
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers:{
        adduser:(state,action)=>{
            state.user = action.payload
        },
        adduserId:(state,action)=>{
            state.userID= action.payload
        },
        adduseremail:(state,action)=>{
            state.useremail=action.payload;
        }


    }

})

export const { adduser, adduserId,adduseremail} = userSlice.actions;
export default userSlice.reducer;