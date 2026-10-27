// import { authAPI } from './api';

// class AuthService {
//   // Login user
//   static async login(email, password) {
//     try {
//       console.log('🔐 AuthService: Attempting login for:', email);
      
//       const response = await authAPI.login({ email, password });
//       console.log('🔐 AuthService: API Response:', response.data);
      
//       // Extract data based on different possible response structures
//       let responseData = response.data;
      
//       // Handle different response structures
//       if (responseData.data) {
//         // Structure: { success: true, data: { user, token } }
//         responseData = responseData.data;
//       }
      
//       const user = responseData.user || responseData;
//       const token = responseData.token || responseData.access_token || responseData.accessToken;
      
//       if (!user || !token) {
//         console.error('❌ AuthService: Missing user or token in response');
//         throw new Error('Invalid response from server');
//       }
      
//       // Store token and user in localStorage
//       localStorage.setItem('token', token);
//       localStorage.setItem('user', JSON.stringify(user));
//       localStorage.setItem('lastLogin', new Date().toISOString());
      
//       console.log('✅ AuthService: Login successful, user stored:', user);
//       console.log('✅ AuthService: Token stored:', token ? 'Yes' : 'No');
      
//       return {
//         success: true,
//         user,
//         token
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Login error:', {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message,
//         config: error.config
//       });
      
//       // Clear any existing auth data on error
//       this.clearAuthData();
      
//       const errorMessage = error.response?.data?.message || 
//                           error.response?.data?.error || 
//                           error.message || 
//                           'Login failed. Please try again.';
      
//       return {
//         success: false,
//         message: errorMessage,
//         errors: error.response?.data?.errors
//       };
//     }
//   }

//   // Register user
//   static async register(userData) {
//     try {
//       console.log('📝 AuthService: Registering user:', { 
//         ...userData, 
//         password: '[HIDDEN]' 
//       });
      
//       const response = await authAPI.register(userData);
      
//       console.log('📝 AuthService: Register response:', response.data);
      
//       return {
//         success: true,
//         data: response.data.data,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Register error:', {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message
//       });
      
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Registration failed. Please try again.',
//         errors: error.response?.data?.errors
//       };
//     }
//   }

//   // Get current user profile
//   static async getProfile() {
//     try {
//       const token = localStorage.getItem('token');
      
//       if (!token) {
//         console.warn('⚠️ AuthService: No token found for getProfile');
//         return {
//           success: false,
//           message: 'No authentication token found'
//         };
//       }

//       console.log('👤 AuthService: Fetching profile with token');
//       const response = await authAPI.getProfile();
      
//       console.log('👤 AuthService: Profile response:', response.data);
      
//       if (response.data.success) {
//         let userData = null;
        
//         // Check different possible response structures
//         if (response.data.data?.user) {
//           userData = response.data.data.user;
//         } else if (response.data.user) {
//           userData = response.data.user;
//         } else if (response.data.data) {
//           userData = response.data.data;
//         } else {
//           userData = response.data;
//         }
        
//         console.log('✅ AuthService: Extracted user data:', userData);
        
//         if (userData) {
//           localStorage.setItem('user', JSON.stringify(userData));
//           return {
//             success: true,
//             user: userData
//           };
//         }
//       }
      
//       return {
//         success: false,
//         message: response.data.message || 'No user data found'
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Get profile error:', {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message
//       });
      
//       if (error.response?.status === 401) {
//         this.clearAuthData();
//       }
      
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to fetch profile.'
//       };
//     }
//   }

//   // Get all users
//   static async getAllUsers() {
//     try {
//       console.log('📋 AuthService: Fetching all users...');
//       const response = await authAPI.getAllUsers();
      
//       console.log('📊 AuthService: Users response:', response.data);
      
//       if (response.data.success) {
//         let users = [];
        
//         if (response.data.data?.users) {
//           users = response.data.data.users;
//         } else if (response.data.users) {
//           users = response.data.users;
//         } else if (response.data.data) {
//           users = response.data.data;
//         }
        
//         console.log(`✅ AuthService: Extracted ${users.length} users`);
        
//         return {
//           success: true,
//           users: users
//         };
//       } else {
//         return {
//           success: false,
//           message: response.data.message || 'Failed to fetch users'
//         };
//       }
//     } catch (error) {
//       console.error('❌ AuthService: Error fetching users:', error);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to fetch users.'
//       };
//     }
//   }

//   // Update profile
//   static async updateProfile(userData) {
//     try {
//       const response = await authAPI.updateProfile(userData);
      
//       // Update user in localStorage
//       const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
//       const updatedUser = { ...currentUser, ...response.data.data?.user || response.data.data };
//       localStorage.setItem('user', JSON.stringify(updatedUser));
      
//       return {
//         success: true,
//         user: updatedUser,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Update profile error:', error);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to update profile.',
//         errors: error.response?.data?.errors
//       };
//     }
//   }

//   // Change password
//   static async changePassword(currentPassword, newPassword) {
//     try {
//       const response = await authAPI.changePassword({
//         currentPassword,
//         newPassword,
//         confirmNewPassword: newPassword
//       });
      
//       return {
//         success: true,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Change password error:', error);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to change password.',
//         errors: error.response?.data?.errors
//       };
//     }
//   }

//   // Forgot password
//   static async forgotPassword(email) {
//     try {
//       const response = await authAPI.forgotPassword(email);
//       return {
//         success: true,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Forgot password error:', error);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to process request.'
//       };
//     }
//   }

//   // Reset password
//   static async resetPassword(token, newPassword) {
//     try {
//       const response = await authAPI.resetPassword({
//         token,
//         newPassword
//       });
      
//       return {
//         success: true,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ AuthService: Reset password error:', error);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to reset password.',
//         errors: error.response?.data?.errors
//       };
//     }
//   }

//   // Logout
//   static async logout() {
//     try {
//       const token = localStorage.getItem('token');
//       if (token) {
//         await authAPI.logout();
//       }
//     } catch (error) {
//       console.error('❌ AuthService: Logout error:', error);
//     } finally {
//       this.clearAuthData();
//     }
//   }

//   // Clear authentication data
//   static clearAuthData() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     localStorage.removeItem('lastLogin');
//     console.log('🗑️ AuthService: Cleared all auth data');
//   }

//   // Check if user is authenticated
//   static isAuthenticated() {
//     const token = localStorage.getItem('token');
//     const user = localStorage.getItem('user');
    
//     const isAuth = !!(token && user);
//     console.log('🔒 AuthService: isAuthenticated:', isAuth);
//     return isAuth;
//   }

//   // Get current user
//   static getCurrentUser() {
//     const userStr = localStorage.getItem('user');
//     if (userStr) {
//       try {
//         return JSON.parse(userStr);
//       } catch (error) {
//         console.error('❌ AuthService: Error parsing user from localStorage:', error);
//         return null;
//       }
//     }
//     return null;
//   }

//   // Get user role
//   static getUserRole() {
//     const user = this.getCurrentUser();
//     const role = user?.role || user?.user_role || user?.userRole;
//     console.log('👑 AuthService: getUserRole:', role);
//     return role;
//   }

//   // Check if user has specific role
//   static hasRole(role) {
//     const userRole = this.getUserRole();
//     const hasRole = userRole === role;
//     console.log(`👑 AuthService: hasRole(${role}):`, hasRole);
//     return hasRole;
//   }

//   // Check if user has any of the specified roles
//   static hasAnyRole(roles) {
//     const userRole = this.getUserRole();
//     const hasAny = roles.includes(userRole);
//     console.log(`👑 AuthService: hasAnyRole(${roles}):`, hasAny);
//     return hasAny;
//   }

//   // Get auth headers for API calls
//   static getAuthHeaders() {
//     const token = localStorage.getItem('token');
//     return {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//     };
//   }
// }

// export default AuthService;








// import { authAPI } from "./api";

// const extractError = (error, fallback = "Request failed. Please try again.") => {
//   if (typeof error === "string") return error;
//   return (
//     error?.response?.data?.detail ||
//     error?.response?.data?.message ||
//     error?.response?.data?.error ||
//     error?.message ||
//     fallback
//   );
// };

// class AuthService {
//   static async login(email, password) {
//     try {
//       const response = await authAPI.login({ email, password });
//       let responseData = response.data;
//       if (responseData.data) responseData = responseData.data;

//       const user = responseData.user || responseData;
//       const token = responseData.token || responseData.access_token || responseData.accessToken;

//       if (!user || !token) throw new Error("Invalid response from server");

//       localStorage.setItem("token", token);
//       localStorage.setItem("user", JSON.stringify(user));
//       localStorage.setItem("lastLogin", new Date().toISOString());

//       return { success: true, user, token };
//     } catch (error) {
//       this.clearAuthData();
//       return { success: false, message: extractError(error, "Login failed.") };
//     }
//   }

//   static async register(userData) {
//     try {
//       const response = await authAPI.register(userData);
//       return {
//         success: true,
//         data: response.data.data,
//         message: response.data.message,
//       };
//     } catch (error) {
//       return {
//         success: false,
//         message: extractError(error, "Registration failed."),
//       };
//     }
//   }

//   static async getProfile() {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) return { success: false, message: "No authentication token found" };

//       const response = await authAPI.getProfile();

//       let userData = null;
//       if (response.data?.data?.user) userData = response.data.data.user;
//       else if (response.data?.user) userData = response.data.user;
//       else if (response.data?.data) userData = response.data.data;
//       else userData = response.data;

//       if (userData) {
//         localStorage.setItem("user", JSON.stringify(userData));
//         return { success: true, user: userData };
//       }
//       return { success: false, message: "No user data found" };
//     } catch (error) {
//       if (error.response?.status === 401) this.clearAuthData();
//       return { success: false, message: extractError(error, "Failed to fetch profile.") };
//     }
//   }

//   static async getAllUsers() {
//     try {
//       const response = await authAPI.getAllUsers();
//       let users = [];
//       if (Array.isArray(response.data?.data)) users = response.data.data;
//       else if (Array.isArray(response.data?.data?.users)) users = response.data.data.users;
//       else if (Array.isArray(response.data?.users)) users = response.data.users;
//       else if (Array.isArray(response.data)) users = response.data;
//       return { success: true, users };
//     } catch (error) {
//       return { success: false, message: extractError(error, "Failed to fetch users.") };
//     }
//   }

//   static async updateProfile(userData) {
//     try {
//       const response = await authAPI.updateProfile(userData);
//       const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
//       const updated = { ...currentUser, ...(response.data?.data || {}) };
//       localStorage.setItem("user", JSON.stringify(updated));
//       return { success: true, user: updated, message: response.data?.message };
//     } catch (error) {
//       return { success: false, message: extractError(error, "Failed to update profile.") };
//     }
//   }

//   static async changePassword(currentPassword, newPassword) {
//     try {
//       const response = await authAPI.changePassword({
//         currentPassword,
//         newPassword,
//         confirmNewPassword: newPassword,
//       });
//       return { success: true, message: response.data?.message };
//     } catch (error) {
//       return { success: false, message: extractError(error, "Failed to change password.") };
//     }
//   }

//   static async forgotPassword(email) {
//     try {
//       const response = await authAPI.forgotPassword(email);
//       return { success: true, message: response.data?.message };
//     } catch (error) {
//       return { success: false, message: extractError(error, "Failed to process request.") };
//     }
//   }

//   static async resetPassword(token, newPassword) {
//     try {
//       const response = await authAPI.resetPassword({ token, newPassword });
//       return { success: true, message: response.data?.message };
//     } catch (error) {
//       return { success: false, message: extractError(error, "Failed to reset password.") };
//     }
//   }

//   static async logout() {
//     try {
//       if (localStorage.getItem("token")) await authAPI.logout();
//     } catch (error) {
//       console.error("Logout error:", error);
//     } finally {
//       this.clearAuthData();
//     }
//   }

//   static clearAuthData() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     localStorage.removeItem("lastLogin");
//   }

//   static isAuthenticated() {
//     return !!(localStorage.getItem("token") && localStorage.getItem("user"));
//   }

//   static getCurrentUser() {
//     const userStr = localStorage.getItem("user");
//     if (!userStr) return null;
//     try {
//       return JSON.parse(userStr);
//     } catch {
//       return null;
//     }
//   }

//   static getUserRole() {
//     const user = this.getCurrentUser();
//     return user?.role || user?.user_role || user?.userRole || null;
//   }

//   static hasRole(role) {
//     return this.getUserRole() === role;
//   }

//   static hasAnyRole(roles) {
//     return roles.includes(this.getUserRole());
//   }

//   static getAuthHeaders() {
//     return {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//       "Content-Type": "application/json",
//     };
//   }
// }

// export default AuthService;



import { authAPI } from "./api";

const extractError = (error, fallback = "Request failed. Please try again.") => {
  if (typeof error === "string") return error;

  const detail = error?.response?.data?.detail;

  if (Array.isArray(detail)) {
    return detail
      .map((e) => {
        const field = (e.loc || []).filter((x) => x !== "body").join(".");
        return field ? `${field}: ${e.msg}` : e.msg;
      })
      .join(" | ");
  }

  if (typeof detail === "string") return detail;

  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    fallback
  );
};

class AuthService {
  static async login(email, password) {
    try {
      const response = await authAPI.login({ email, password });
      let responseData = response.data;
      if (responseData.data) responseData = responseData.data;

      const user = responseData.user || responseData;
      const token =
        responseData.token || responseData.access_token || responseData.accessToken;

      if (!user || !token) throw new Error("Invalid response from server");

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("lastLogin", new Date().toISOString());

      return { success: true, user, token };
    } catch (error) {
      this.clearAuthData();
      return { success: false, message: extractError(error, "Login failed.") };
    }
  }

  static async register(userData) {
    try {
      const response = await authAPI.register(userData);
      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error) {
      return {
        success: false,
        message: extractError(error, "Registration failed."),
      };
    }
  }

  static async getProfile() {
    try {
      const token = localStorage.getItem("token");
      if (!token) return { success: false, message: "No authentication token found" };

      const response = await authAPI.getProfile();

      let userData = null;
      if (response.data?.data?.user) userData = response.data.data.user;
      else if (response.data?.user) userData = response.data.user;
      else if (response.data?.data) userData = response.data.data;
      else userData = response.data;

      if (userData) {
        localStorage.setItem("user", JSON.stringify(userData));
        return { success: true, user: userData };
      }
      return { success: false, message: "No user data found" };
    } catch (error) {
      if (error.response?.status === 401) this.clearAuthData();
      return { success: false, message: extractError(error, "Failed to fetch profile.") };
    }
  }

  static async getAllUsers() {
    try {
      const response = await authAPI.getAllUsers();
      let users = [];
      if (Array.isArray(response.data?.data)) users = response.data.data;
      else if (Array.isArray(response.data?.data?.users)) users = response.data.data.users;
      else if (Array.isArray(response.data?.users)) users = response.data.users;
      else if (Array.isArray(response.data)) users = response.data;
      return { success: true, users };
    } catch (error) {
      return { success: false, message: extractError(error, "Failed to fetch users.") };
    }
  }

  static async updateProfile(userData) {
    try {
      const response = await authAPI.updateProfile(userData);
      const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
      const updated = { ...currentUser, ...(response.data?.data || {}) };
      localStorage.setItem("user", JSON.stringify(updated));
      return { success: true, user: updated, message: response.data?.message };
    } catch (error) {
      return { success: false, message: extractError(error, "Failed to update profile.") };
    }
  }

  static async changePassword(currentPassword, newPassword) {
    try {
      const response = await authAPI.changePassword({
        currentPassword,
        newPassword,
        confirmNewPassword: newPassword,
      });
      return { success: true, message: response.data?.message };
    } catch (error) {
      return { success: false, message: extractError(error, "Failed to change password.") };
    }
  }

  static async forgotPassword(email) {
    try {
      const response = await authAPI.forgotPassword(email);
      return { success: true, message: response.data?.message };
    } catch (error) {
      return { success: false, message: extractError(error, "Failed to process request.") };
    }
  }

  static async resetPassword(token, newPassword) {
    try {
      const response = await authAPI.resetPassword({ token, newPassword });
      return { success: true, message: response.data?.message };
    } catch (error) {
      return { success: false, message: extractError(error, "Failed to reset password.") };
    }
  }

  static async logout() {
    try {
      if (localStorage.getItem("token")) await authAPI.logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      this.clearAuthData();
    }
  }

  static clearAuthData() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("lastLogin");
  }

  static isAuthenticated() {
    return !!(localStorage.getItem("token") && localStorage.getItem("user"));
  }

  static getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (!userStr) return null;
    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  }

  static getUserRole() {
    const user = this.getCurrentUser();
    return user?.role || user?.user_role || user?.userRole || null;
  }

  static hasRole(role) {
    return this.getUserRole() === role;
  }

  static hasAnyRole(roles) {
    return roles.includes(this.getUserRole());
  }

  static getAuthHeaders() {
    return {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    };
  }
}

export default AuthService;