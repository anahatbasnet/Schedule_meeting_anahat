import {createSlice} from "@reduxjs/toolkit"
const dataSlice = createSlice({
    name:"userdata",
    initialState:{
        username:"",
        email:"",
        guestemail:"",
        description:""
    },
    reducers:{
        setUsername:(state,action)=>{
            state.username=action.payload
            console.log(state.username)
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },
        setguestEmail:(state,action)=>{
            state.guestemail=action.payload
        },
        setDesrciption:(state,action)=>{
            state.description=action.payload
        },
       

    }
});
export const {setUsername,setEmail,setDesrciption,setguestEmail}=dataSlice.actions
export default dataSlice.reducer