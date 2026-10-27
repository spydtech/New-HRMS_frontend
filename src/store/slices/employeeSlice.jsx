// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import EmployeeService from '../../services/employeeService';

// // // Async thunks
// // export const fetchAllEmployees = createAsyncThunk(
// //   'employees/fetchAllEmployees',
// //   async (_, { rejectWithValue }) => {
// //     try {
// //       console.log('📋 FetchAllEmployees thunk started');
// //       const result = await EmployeeService.getAllEmployees();
      
// //       if (result.success) {
// //         console.log('✅ FetchAllEmployees thunk successful:', result.data.length, 'employees');
// //         return result.data;
// //       } else {
// //         console.log('❌ FetchAllEmployees thunk failed:', result.message);
// //         return rejectWithValue(result.message);
// //       }
// //     } catch (error) {
// //       console.error('❌ FetchAllEmployees thunk error:', error);
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const registerEmployee = createAsyncThunk(
// //   'employees/registerEmployee',
// //   async (employeeData, { rejectWithValue }) => {
// //     try {
// //       console.log('➕ RegisterEmployee thunk started:', employeeData);
// //       const result = await EmployeeService.registerEmployee(employeeData);
      
// //       if (result.success) {
// //         console.log('✅ RegisterEmployee thunk successful:', result.data);
// //         return result;
// //       } else {
// //         console.log('❌ RegisterEmployee thunk failed:', result.message);
// //         return rejectWithValue({ 
// //           message: result.message, 
// //           errors: result.errors 
// //         });
// //       }
// //     } catch (error) {
// //       console.error('❌ RegisterEmployee thunk error:', error);
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const updateEmployee = createAsyncThunk(
// //   'employees/updateEmployee',
// //   async ({ employeeId, employeeData }, { rejectWithValue }) => {
// //     try {
// //       console.log('✏️ UpdateEmployee thunk started:', employeeId, employeeData);
// //       const result = await EmployeeService.updateEmployee(employeeId, employeeData);
      
// //       if (result.success) {
// //         console.log('✅ UpdateEmployee thunk successful:', result.data);
// //         return result;
// //       } else {
// //         console.log('❌ UpdateEmployee thunk failed:', result.message);
// //         return rejectWithValue({ 
// //           message: result.message, 
// //           errors: result.errors 
// //         });
// //       }
// //     } catch (error) {
// //       console.error('❌ UpdateEmployee thunk error:', error);
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// // export const deleteEmployee = createAsyncThunk(
// //   'employees/deleteEmployee',
// //   async (employeeId, { rejectWithValue }) => {
// //     try {
// //       console.log('🗑️ DeleteEmployee thunk started:', employeeId);
// //       const result = await EmployeeService.deleteEmployee(employeeId);
      
// //       if (result.success) {
// //         console.log('✅ DeleteEmployee thunk successful');
// //         return { employeeId, message: result.message };
// //       } else {
// //         console.log('❌ DeleteEmployee thunk failed:', result.message);
// //         return rejectWithValue(result.message);
// //       }
// //     } catch (error) {
// //       console.error('❌ DeleteEmployee thunk error:', error);
// //       return rejectWithValue(error.message);
// //     }
// //   }
// // );

// // // Initial state
// // const initialState = {
// //   employees: [],
// //   isLoading: false,
// //   error: null,
// //   success: null,
// //   currentEmployee: null
// // };

// // // Slice
// // const employeeSlice = createSlice({
// //   name: 'employees',
// //   initialState,
// //   reducers: {
// //     clearEmployeeError: (state) => {
// //       state.error = null;
// //     },
// //     clearEmployeeSuccess: (state) => {
// //       state.success = null;
// //     },
// //     setCurrentEmployee: (state, action) => {
// //       state.currentEmployee = action.payload;
// //     },
// //     clearCurrentEmployee: (state) => {
// //       state.currentEmployee = null;
// //     },
// //     // Add this to manually add an employee (for immediate UI update)
// //     addEmployee: (state, action) => {
// //       state.employees.push(action.payload);
// //     },
// //     // Add this to manually update an employee
// //     updateEmployeeInState: (state, action) => {
// //       const index = state.employees.findIndex(emp => emp.ID === action.payload.ID);
// //       if (index !== -1) {
// //         state.employees[index] = action.payload;
// //       }
// //     },
// //     // Add this to manually remove an employee
// //     removeEmployee: (state, action) => {
// //       state.employees = state.employees.filter(emp => emp.ID !== action.payload);
// //     }
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       // Fetch all employees
// //       .addCase(fetchAllEmployees.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchAllEmployees.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.employees = action.payload;
// //         state.error = null;
// //       })
// //       .addCase(fetchAllEmployees.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //       })
      
// //       // Register employee
// //       .addCase(registerEmployee.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;
// //         state.success = null;
// //       })
// //       .addCase(registerEmployee.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         // Add the new employee to the list
// //         if (action.payload.data) {
// //           state.employees.push(action.payload.data);
// //         }
// //         state.success = action.payload.message;
// //         state.error = null;
// //       })
// //       .addCase(registerEmployee.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //         state.success = null;
// //       })
      
// //       // Update employee
// //       .addCase(updateEmployee.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;
// //         state.success = null;
// //       })
// //       .addCase(updateEmployee.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         // Update the employee in the list
// //         if (action.payload.data) {
// //           const index = state.employees.findIndex(emp => emp.ID === action.payload.data.ID);
// //           if (index !== -1) {
// //             state.employees[index] = action.payload.data;
// //           }
// //         }
// //         state.success = action.payload.message;
// //         state.error = null;
// //       })
// //       .addCase(updateEmployee.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //         state.success = null;
// //       })
      
// //       // Delete employee
// //       .addCase(deleteEmployee.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;
// //         state.success = null;
// //       })
// //       .addCase(deleteEmployee.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         // Remove the employee from the list
// //         state.employees = state.employees.filter(emp => emp.ID !== action.payload.employeeId);
// //         state.success = action.payload.message;
// //         state.error = null;
// //       })
// //       .addCase(deleteEmployee.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //         state.success = null;
// //       });
// //   }
// // });

// // // Export actions
// // export const { 
// //   clearEmployeeError, 
// //   clearEmployeeSuccess, 
// //   setCurrentEmployee, 
// //   clearCurrentEmployee,
// //   addEmployee,
// //   updateEmployeeInState,
// //   removeEmployee
// // } = employeeSlice.actions;

// // export default employeeSlice.reducer;










// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { employeesAPI } from "../../services/api";

// const extractError = (error, fallback = "Request failed.") => {
//   if (typeof error === "string") return error;
//   const detail = error?.response?.data?.detail;
//   if (Array.isArray(detail)) {
//     return detail
//       .map((e) => `${(e.loc || []).filter((x) => x !== "body").join(".")}: ${e.msg}`)
//       .join(" | ");
//   }
//   if (typeof detail === "string") return detail;
//   return error?.response?.data?.message || error?.message || fallback;
// };

// export const fetchEmployees = createAsyncThunk(
//   "employees/fetchAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await employeesAPI.getAll();
//       const list = res.data?.data || res.data?.users || res.data || [];
//       return Array.isArray(list) ? list : [];
//     } catch (err) {
//       return rejectWithValue(extractError(err, "Failed to fetch employees"));
//     }
//   }
// );

// const employeeSlice = createSlice({
//   name: "employees",
//   initialState: {
//     list: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployees.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.list = action.payload;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default employeeSlice.reducer;








// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { employeesAPI } from "../../services/api";

// const extractError = (error, fallback = "Request failed.") => {
//   if (typeof error === "string") return error;
//   const detail = error?.response?.data?.detail;
//   if (Array.isArray(detail)) {
//     return detail
//       .map((e) => `${(e.loc || []).filter((x) => x !== "body").join(".")}: ${e.msg}`)
//       .join(" | ");
//   }
//   return detail || error?.response?.data?.message || error?.message || fallback;
// };

// export const fetchEmployees = createAsyncThunk(
//   "employees/fetchAll",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await employeesAPI.getAll();
//       return Array.isArray(res.data) ? res.data : res.data?.data || [];
//     } catch (err) {
//       return rejectWithValue(extractError(err, "Failed to fetch employees"));
//     }
//   }
// );

// const employeeSlice = createSlice({
//   name: "employees",
//   initialState: { list: [], isLoading: false, error: null },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchEmployees.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchEmployees.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.list = action.payload;
//       })
//       .addCase(fetchEmployees.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default employeeSlice.reducer;




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { employeesAPI } from "../../services/api";

const extractError = (error, fallback = "Request failed.") => {
  if (typeof error === "string") return error;
  const detail = error?.response?.data?.detail;
  if (Array.isArray(detail)) {
    return detail
      .map((e) => `${(e.loc || []).filter((x) => x !== "body").join(".")}: ${e.msg}`)
      .join(" | ");
  }
  return detail || error?.response?.data?.message || error?.message || fallback;
};

export const fetchEmployees = createAsyncThunk(
  "employees/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await employeesAPI.getAll();
      return Array.isArray(res.data) ? res.data : res.data?.data || [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch employees"));
    }
  }
);

const employeeSlice = createSlice({
  name: "employees",
  initialState: { list: [], isLoading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// ---- SELECTORS (these were missing) ----
export const selectEmployees = (state) => state.employees.list;
export const selectEmployeesLoading = (state) => state.employees.isLoading;
export const selectEmployeesError = (state) => state.employees.error;

export default employeeSlice.reducer;