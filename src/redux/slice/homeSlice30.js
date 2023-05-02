import { createSlice } from "@reduxjs/toolkit";
const homeSlice30 = createSlice({
  name: "thirtyminSlice",
  initialState: {
    thirtyminValue: "30 Minutes",
    thirtyVal:30,
    thirtyLink:"30minutes"
  },
  reducers: {
    setthirtyminValue: (state, action) => {
      state.thirtyminValue = action.payload;
    },
    setthirtyVal :(state,action)=>{
      state.thirtyVal=action.payload
    },
    setthirtyLink : (state,action)=>{
      state.thirtyLink=action.payload;
    }
  },
});
export const { setthirtyminValue } = homeSlice30.actions;
export default homeSlice30.reducer;
