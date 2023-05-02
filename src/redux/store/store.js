import { configureStore } from "@reduxjs/toolkit";

import homeSlice15Reducer from "../slice/homeSlice15";
import homeSlice30Reducer from "../slice/homeSlice30";

import calSliceReducer from "../slice/calSlice";
import timehandlerSliceReducer from "../slice/timehandlerSlice";
import dataSliceReducer from "../slice/dataSlice";


const store = configureStore({
  reducer: {
    fifteenminSlice: homeSlice15Reducer,
    thirtyminSlice: homeSlice30Reducer,
    timehandler: timehandlerSliceReducer,
    userdata: dataSliceReducer,
    CalendarSlice: calSliceReducer,
   
  },
});
export default store;
