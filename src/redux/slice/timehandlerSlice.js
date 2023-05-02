import {createSlice} from "@reduxjs/toolkit"
const timehandlerSlice = createSlice({
    name:"timehandler",
    initialState:{
        timebtn:""
    },
    reducers:{
        settimebtn:(state,action)=>{
            state.timebtn=action.payload
        },

    }

})
export const { settimebtn } = timehandlerSlice.actions;
export default timehandlerSlice.reducer;