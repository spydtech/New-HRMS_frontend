import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import employeeReducer from "./employeeSlice";
import attendanceReducer from "./attendanceSlice";
import leaveReducer from "./leaveSlice";
import holidayReducer from "./holidaySlice";
import teamReducer from "./teamSlice";


export const store = configureStore({
  reducer: {
    auth: authReducer,
    employees: employeeReducer,
    attendance: attendanceReducer,
    leaves: leaveReducer,
    holidays: holidayReducer,
     teams: teamReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;