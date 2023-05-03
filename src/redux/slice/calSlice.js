import { createSlice } from "@reduxjs/toolkit";
const calSlice = createSlice({
  name: "CalendarSlice",
  initialState: {
    date: "",
    timeCountry: "",
    day: "",
    month: "",
    timezone: "",
    countryhour: "",
    daymonth:"",
    year:"",
  },
  reducers: {
    setdate: (state, action) => {
      state.date = action.payload;
    },
    setyear: (state, action) => {
      state.year = action.payload;
    },
    setdaymonth: (state, action) => {
      state.daymonth = action.payload;
    },
    setcountryhour: (state, action) => {
      state.countryhour = action.payload;
    },

    settimecountry: (state, action) => {
      state.time = action.payload;
      console.log(state.timeCountry);
    },
    setday: (state, action) => {
      state.day = action.payload;
      console.log(state.day);
    },
    setmonth: (state, action) => {
      state.month = action.payload;
    },
    settimezone: (state, action) => {
      state.timezone = action.payload;
      console.log("this is time zone");
    },
  },
});
export const {
  setdate,
  settimezoneplace,
  setday,
  settimecountry,
  setmonth,
  settimezone,
  setcountryhour,
  setdaymonth,
  setyear
} = calSlice.actions;
export default calSlice.reducer;
