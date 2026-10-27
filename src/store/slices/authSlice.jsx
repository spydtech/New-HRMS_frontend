// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import AuthService from '../../services/authService';

// // Async thunk for login
// export const login = createAsyncThunk(
//     'auth/login',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             console.log('🔐 authSlice: Starting login process for:', credentials.email);
            
//             const result = await AuthService.login(credentials.email, credentials.password);
            
//             console.log('🔐 authSlice: AuthService.login result:', result);
            
//             if (result.success) {
//                 console.log('✅ authSlice: Login successful, user:', result.user);
//                 return {
//                     success: true,
//                     user: result.user,
//                     token: result.token
//                 };
//             } else {
//                 console.error('❌ authSlice: Login failed:', result.message);
//                 return rejectWithValue(result.message || 'Login failed');
//             }
//         } catch (error) {
//             console.error('❌ authSlice: Login error:', error);
//             return rejectWithValue(error.message || 'Login failed');
//         }
//     }
// );



// // Async thunk for registration
// export const register = createAsyncThunk(
//     'auth/register',
//     async (userData, { rejectWithValue }) => {
//         try {
//             console.log('📝 authSlice: Starting registration process for:', userData.email);
            
//             const result = await AuthService.register(userData);
            
//             console.log('📝 authSlice: AuthService.register result:', result);
            
//             if (result.success) {
//                 console.log('✅ authSlice: Registration successful');
//                 return {
//                     success: true,
//                     data: result.data,
//                     message: result.message
//                 };
//             } else {
//                 console.error('❌ authSlice: Registration failed:', result.message);
//                 return rejectWithValue(result.message || 'Registration failed');
//             }
//         } catch (error) {
//             console.error('❌ authSlice: Registration error:', error);
//             return rejectWithValue(error.message || 'Registration failed');
//         }
//     }
// );

// // Async thunk for getting user profile
// export const getUser = createAsyncThunk(
//     'auth/getUser',
//     async (_, { rejectWithValue }) => {
//         try {
//             console.log('👤 authSlice: Getting user profile...');
            
//             const result = await AuthService.getProfile();
            
//             console.log('👤 authSlice: getProfile result:', result);
            
//             if (result.success) {
//                 console.log('✅ authSlice: Profile fetched successfully:', result.user);
//                 return {
//                     success: true,
//                     user: result.user
//                 };
//             } else {
//                 console.error('❌ authSlice: Failed to fetch profile:', result.message);
//                 return rejectWithValue(result.message || 'Failed to fetch user profile');
//             }
//         } catch (error) {
//             console.error('❌ authSlice: Get user error:', error);
//             return rejectWithValue(error.message || 'Failed to fetch user');
//         }
//     }
// );

// // Async thunk for logout
// export const logoutUser = createAsyncThunk(
//     'auth/logout',
//     async (_, { rejectWithValue }) => {
//         try {
//             await AuthService.logout();
//             return { success: true };
//         } catch (error) {
//             console.error('❌ authSlice: Logout error:', error);
//             return rejectWithValue(error.message || 'Logout failed');
//         }
//     }
// );

// // const authSlice = createSlice({
// //     name: 'auth',
// //     initialState: {
// //         user: AuthService.getCurrentUser(),
// //         token: localStorage.getItem('token'),
// //         isLoading: false,
// //         error: null,
// //         isAuthenticated: AuthService.isAuthenticated(),
// //         lastLogin: localStorage.getItem('lastLogin')
// //     },
// //     reducers: {
// //         setUser: (state, action) => {
// //             state.user = action.payload;
// //             state.isAuthenticated = true;
// //             if (action.payload) {
// //                 localStorage.setItem('user', JSON.stringify(action.payload));
// //             }
// //         },
// //         setToken: (state, action) => {
// //             state.token = action.payload;
// //             if (action.payload) {
// //                 localStorage.setItem('token', action.payload);
// //             }
// //         },
// //         logout: (state) => {
// //             AuthService.logout();
// //             state.user = null;
// //             state.token = null;
// //             state.isAuthenticated = false;
// //             state.error = null;
// //         },
// //         clearError: (state) => {
// //             state.error = null;
// //         },
// //         updateUserProfile: (state, action) => {
// //             if (state.user) {
// //                 state.user = { ...state.user, ...action.payload };
// //                 localStorage.setItem('user', JSON.stringify(state.user));
// //             }
// //         }
// //     },
// //     extraReducers: (builder) => {
// //         builder
// //             // Login cases
// //             .addCase(login.pending, (state) => {
// //                 state.isLoading = true;
// //                 state.error = null;
// //             })
// //             .addCase(login.fulfilled, (state, action) => {
// //                 state.isLoading = false;
// //                 state.user = action.payload.user;
// //                 state.token = action.payload.token;
// //                 state.isAuthenticated = true;
// //                 state.error = null;
// //                 state.lastLogin = new Date().toISOString();
                
// //                 // Update localStorage
// //                 if (action.payload.token) {
// //                     localStorage.setItem('token', action.payload.token);
// //                 }
// //                 if (action.payload.user) {
// //                     localStorage.setItem('user', JSON.stringify(action.payload.user));
// //                 }
// //                 localStorage.setItem('lastLogin', state.lastLogin);
                
// //                 console.log('✅ authSlice: State updated after login');
// //             })
// //             .addCase(login.rejected, (state, action) => {
// //                 state.isLoading = false;
// //                 state.error = action.payload;
// //                 state.isAuthenticated = false;
// //                 console.error('❌ authSlice: Login rejected:', action.payload);
// //             })
            
// //             // Get user cases
// //             .addCase(getUser.pending, (state) => {
// //                 state.isLoading = true;
// //                 state.error = null;
// //             })
// //             .addCase(getUser.fulfilled, (state, action) => {
// //                 state.isLoading = false;
// //                 state.user = action.payload.user;
// //                 state.isAuthenticated = true;
// //                 state.error = null;
                
// //                 // Update localStorage
// //                 if (action.payload.user) {
// //                     localStorage.setItem('user', JSON.stringify(action.payload.user));
// //                 }
// //             })
// //             .addCase(getUser.rejected, (state, action) => {
// //                 state.isLoading = false;
// //                 state.error = action.payload;
// //                 state.isAuthenticated = false;
// //             })
            
// //             // Logout cases
// //             .addCase(logoutUser.pending, (state) => {
// //                 state.isLoading = true;
// //             })
// //             .addCase(logoutUser.fulfilled, (state) => {
// //                 state.isLoading = false;
// //                 state.user = null;
// //                 state.token = null;
// //                 state.isAuthenticated = false;
// //                 state.error = null;
// //             })
// //             .addCase(logoutUser.rejected, (state, action) => {
// //                 state.isLoading = false;
// //                 state.error = action.payload;
// //             });
// //     }
// // });

// // export const { setUser, setToken, logout, clearError, updateUserProfile } = authSlice.actions;

// // export const selectCurrentUser = (state) => state.auth.user;
// // export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// // export const selectAuthLoading = (state) => state.auth.isLoading;
// // export const selectAuthError = (state) => state.auth.error;
// // export const selectUserRole = (state) => state.auth.user?.role;

// // export default authSlice.reducer;



// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: AuthService.getCurrentUser(),
//     token: localStorage.getItem("token"),
//     isLoading: false,
//     error: null,
//     success: null,                          // ← NEW
//     isAuthenticated: AuthService.isAuthenticated(),
//     lastLogin: localStorage.getItem("lastLogin"),
//   },
//   reducers: {
//     setUser: (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = !!action.payload;
//       if (action.payload) {
//         localStorage.setItem("user", JSON.stringify(action.payload));
//       }
//     },
//     setToken: (state, action) => {
//       state.token = action.payload;
//       if (action.payload) localStorage.setItem("token", action.payload);
//     },
//     logout: (state) => {
//       // sync state clear; async cleanup happens in logoutUser thunk
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.error = null;
//       state.success = null;
//       AuthService.clearAuthData();
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//     clearSuccess: (state) => {              // ← NEW
//       state.success = null;
//     },
//     updateUserProfile: (state, action) => {
//       if (state.user) {
//         state.user = { ...state.user, ...action.payload };
//         localStorage.setItem("user", JSON.stringify(state.user));
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.success = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.error = null;
//         state.success = "Login successful";
//         state.lastLogin = new Date().toISOString();
//         if (action.payload.token) localStorage.setItem("token", action.payload.token);
//         if (action.payload.user) localStorage.setItem("user", JSON.stringify(action.payload.user));
//         localStorage.setItem("lastLogin", state.lastLogin);
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//       })

//       .addCase(register.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.success = null;
//       })
//       .addCase(register.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.success = action.payload.message || "Registration successful";
//       })
//       .addCase(register.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       .addCase(getUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.user;
//         state.isAuthenticated = true;
//         if (action.payload.user) localStorage.setItem("user", JSON.stringify(action.payload.user));
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//         state.isAuthenticated = false;
//       })

//       .addCase(logoutUser.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(logoutUser.fulfilled, (state) => {
//         state.isLoading = false;
//         state.user = null;
//         state.token = null;
//         state.isAuthenticated = false;
//         state.error = null;
//         state.success = null;
//       })
//       .addCase(logoutUser.rejected, (state) => {
//         state.isLoading = false;
//         state.user = null;
//         state.token = null;
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const {
//   setUser,
//   setToken,
//   logout,
//   clearError,
//   clearSuccess,
//   updateUserProfile,
// } = authSlice.actions;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
// export const selectAuthLoading = (state) => state.auth.isLoading;
// export const selectAuthError = (state) => state.auth.error;
// export const selectUserRole = (state) => state.auth.user?.role;

// export default authSlice.reducer;




import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/authService";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    const result = await AuthService.login(credentials.email, credentials.password);
    if (result.success) {
      return { success: true, user: result.user, token: result.token };
    }
    return rejectWithValue(result.message || "Login failed");
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    const result = await AuthService.register(userData);
    if (result.success) {
      return { success: true, data: result.data, message: result.message };
    }
    return rejectWithValue(result.message || "Registration failed");
  }
);

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    const result = await AuthService.getProfile();
    if (result.success) return { success: true, user: result.user };
    return rejectWithValue(result.message || "Failed to fetch user profile");
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await AuthService.logout();
      return { success: true };
    } catch (error) {
      return rejectWithValue(error.message || "Logout failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: AuthService.getCurrentUser(),
    token: localStorage.getItem("token"),
    isLoading: false,
    error: null,
    success: null,
    isAuthenticated: AuthService.isAuthenticated(),
    lastLogin: localStorage.getItem("lastLogin"),
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = !!action.payload;
      if (action.payload) localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setToken: (state, action) => {
      state.token = action.payload;
      if (action.payload) localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      state.success = null;
      AuthService.clearAuthData();
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    updateUserProfile: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.success = "Login successful";
        state.lastLogin = new Date().toISOString();
        if (action.payload.token) localStorage.setItem("token", action.payload.token);
        if (action.payload.user)
          localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("lastLogin", state.lastLogin);
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload.message || "Registration successful";
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        if (action.payload.user)
          localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
      })

      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = null;
        state.success = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const {
  setUser,
  setToken,
  logout,
  clearError,
  clearSuccess,
  updateUserProfile,
} = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectAuthLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;
export const selectUserRole = (state) => state.auth.user?.role;

export default authSlice.reducer;