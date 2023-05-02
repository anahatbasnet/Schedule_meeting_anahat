import { createSlice } from "@reduxjs/toolkit";
const homeSlice15 = createSlice({
  name: "fifteenminSlice",
  initialState: {
    fifteenminValue: "15 Minutes",
    fifteenVal:15,
    fifLink:"15minutes"
  },
  reducers: {
    setfifteenminValue: (state, action) => {
      state.fifteenminValue = action.payload;
    },
    setfifteenVal : (state,action)=>{
      state.fifteenVal=action.payload;
    },
    setfifLink : (state,action)=>{
      state.fifLink=action.payload;
    }
  },
});
export const { setfifteenminValue } = homeSlice15.actions;
export default homeSlice15.reducer;
