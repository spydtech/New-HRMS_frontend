import axios from "axios";

//const API_URL = "http://localhost:8000/api/v1";
//const API_URL = "https://www.api.hrms.spydtech.com";
const API_URL = "https://api.hrms.spydtech.com/api/v1";

// Do NOT set a default Content-Type. Axios picks the right one automatically:
// - JSON object → application/json
// - FormData → multipart/form-data
const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token") || localStorage.getItem("employeeJwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("lastLogin");
      localStorage.removeItem("employeeJwt");
      if (!window.location.pathname.startsWith("/login")) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post("/auth/login", credentials),
  register: (userData) => api.post("/auth/register", userData),
  getProfile: () => api.get("/auth/profile"),
  getAllUsers: () => api.get("/auth/all-users"),
  updateProfile: (userData) => api.put("/auth/profile", userData),
  changePassword: (passwordData) =>
    api.post("/auth/change-password", passwordData),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (data) => api.post("/auth/reset-password", data),
  logout: () => api.post("/auth/logout"),
};

export const superAdminAPI = {
  getAllUsers: (params) => api.get("/super-admin/users", { params }),
  getUserById: (id) => api.get(`/super-admin/users/${id}`),
  createUser: (userData) => api.post("/super-admin/users", userData),
  updateUser: (id, userData) => api.put(`/super-admin/users/${id}`, userData),
  deleteUser: (id) => api.delete(`/super-admin/users/${id}`),
  getUserActivity: (id, params) =>
    api.get(`/super-admin/users/${id}/activity`, { params }),
  resetUserPassword: (id, passwordData) =>
    api.post(`/super-admin/users/${id}/reset-password`, passwordData),
  getStatistics: () => api.get("/super-admin/statistics"),
};

export const employeesAPI = {
  getAll: () => api.get("/employee/getAllEmployee"),
  register: (employeeData) => api.post("/employee/register", employeeData),
  update: (employeeId, employeeData) =>
    api.put(`/employee/update/${employeeId}`, employeeData),
  delete: (employeeId) => api.delete(`/employee/delete/${employeeId}`),
  getById: (employeeId) => api.get(`/employee/${employeeId}`),
  updatePassword: (email, data) => api.put(`/employee/password/${email}`, data),
};

export const educationAPI = {
  fetch: () => api.get("/education/fetchEducation"),
  saveOrUpdate: (payload) => api.post("/education/saveOrUpdate", payload),
  delete: (educationId) =>
    api.delete("/education/delete", {
      params: educationId ? { education_id: educationId } : {},
    }),
};

export const documentsAPI = {
  getByEmployee: (employeeId) => api.get(`/aadhar/get/${employeeId}`),
  save: (formData) => api.post("/aadhar/save", formData),
  update: (formData) => api.put("/aadhar/update", formData),
  remove: (employeeId, idType) => api.delete(`/aadhar/${employeeId}/${idType}`),
};

export const attendanceAPI = {
  getAll: () => api.get("/attendance"),
  create: (payload) => api.post("/attendance", payload),
};


// export const leavesAPI = {
//   getTypes: () => api.get("/leaves/types"),
//   getType: (id) => api.get(`/leaves/types/${id}`),
//   updateType: (id, data) => api.put(`/leaves/types/${id}`, data),

//   apply: (payload) => api.post("/leaves/apply", payload),
//   myLeaves: () => api.get("/leaves/my"),
//   allLeaves: (params) => api.get("/leaves/all", { params }),
//   getLeave: (id) => api.get(`/leaves/${id}`),
//   approve: (id, data = {}) => api.post(`/leaves/${id}/approve`, data),
//   reject: (id, data = {}) => api.post(`/leaves/${id}/reject`, data),
//   cancel: (id) => api.post(`/leaves/${id}/cancel`),

//   myBalance: () => api.get("/leaves/balance/my"),
//   allBalances: () => api.get("/leaves/balance/all"),
// };

export const leavesAPI = {
  // Leave types / rules
  getTypes:   ()         => api.get("/leaves/types"),
  getType:    (id)       => api.get(`/leaves/types/${id}`),
  updateType: (id, data) => api.put(`/leaves/types/${id}`, data),

  // Applications
  apply:     (payload)       => api.post("/leaves/apply", payload),
  myLeaves:  ()              => api.get("/leaves/my"),
  allLeaves: (params = {})   => api.get("/leaves/all", { params }),
  getLeave:  (id)            => api.get(`/leaves/${id}`),
  approve:   (id, data = {}) => api.post(`/leaves/${id}/approve`, data),
  reject:    (id, data = {}) => api.post(`/leaves/${id}/reject`, data),
  cancel:    (id)            => api.post(`/leaves/${id}/cancel`),

  // Balances
  myBalance:   () => api.get("/leaves/balance/my"),
  allBalances: () => api.get("/leaves/balance/all"),
};

export const holidaysAPI = {
  getAll: (params) => api.get("/holidays", { params }),
  getById: (id) => api.get(`/holidays/${id}`),
  create: (data) => api.post("/holidays", data),
  update: (id, data) => api.put(`/holidays/${id}`, data),
  remove: (id) => api.delete(`/holidays/${id}`),
  removeByName: (name) => api.delete(`/holidays/by-name/${encodeURIComponent(name)}`),
};


export const teamsAPI = {
  getAll: () => api.get("/teams"),
  getById: (id) => api.get(`/teams/${id}`),
  create: (data) => api.post("/teams", data),
  update: (id, data) => api.put(`/teams/${id}`, data),
  remove: (id) => api.delete(`/teams/${id}`),
};


// ⬇⬇⬇ THIS WAS MISSING ⬇⬇⬇
export const clientsAPI = {
  getAll: () => api.get("/clients"),
  getById: (id) => api.get(`/clients/${id}`),
  create: (data) => api.post("/clients", data),
  update: (id, data) => api.put(`/clients/${id}`, data),
  remove: (id) => api.delete(`/clients/${id}`),
};

export const projectsAPI = {
  getAll: () => api.get("/projects"),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post("/projects", data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  remove: (id) => api.delete(`/projects/${id}`),
};


export const projectActivitiesAPI = {
  list: (projectId) => api.get(`/projects/${projectId}/activities`),
  create: (projectId, data) =>
    api.post(`/projects/${projectId}/activities`, data),
  members: (projectId) => api.get(`/projects/${projectId}/members`),
};

export const activitiesAPI = {
  listAll: (limit = 50) => api.get("/activities", { params: { limit } }),
  myProjects: () => api.get("/activities/my-projects"),
  postForProject: (projectId, data) =>
    api.post(`/projects/${projectId}/activities`, data),
};



// Payroll management
export const payrollAPI = {
  listBatches: () => api.get("/payroll/batches"),
  getBatch: (id) => api.get(`/payroll/batches/${id}`),
  createBatch: (data) => api.post("/payroll/batches", data),
  updateBatch: (id, data) => api.put(`/payroll/batches/${id}`, data),
  deleteBatch: (id) => api.delete(`/payroll/batches/${id}`),

  listAllowances: () => api.get("/payroll/allowances"),
  createAllowance: (data) => api.post("/payroll/allowances", data),
  updateAllowance: (id, data) => api.put(`/payroll/allowances/${id}`, data),
  deleteAllowance: (id) => api.delete(`/payroll/allowances/${id}`),

  listDeductions: () => api.get("/payroll/deductions"),
  createDeduction: (data) => api.post("/payroll/deductions", data),
  updateDeduction: (id, data) => api.put(`/payroll/deductions/${id}`, data),
  deleteDeduction: (id) => api.delete(`/payroll/deductions/${id}`),

  getSettings: () => api.get("/payroll/settings"),
  updateSettings: (data) => api.put("/payroll/settings", data),
  getPayslipSettings: () => api.get("/payroll/payslip-settings"),
  updatePayslipSettings: (data) => api.put("/payroll/payslip-settings", data),

  listRuns: () => api.get("/payroll/runs"),
  getRun: (id) => api.get(`/payroll/runs/${id}`),
  createRun: (data) => api.post("/payroll/runs", data),
  completeRun: (id) => api.post(`/payroll/runs/${id}/complete`),
  voidRun: (id) => api.post(`/payroll/runs/${id}/void`),
  listRunPayslips: (id) => api.get(`/payroll/runs/${id}/payslips`),

  listPayslips: (params) => api.get("/payroll/payslips", { params }),
  getDashboard: () => api.get("/payroll/dashboard"),

   // Salary Structure
  getSalaryStructure: (userId) =>
    api.get(
      "/payroll/salary-structure",
      userId ? { params: { user_id: userId } } : {}
    ),

  listForms: () => api.get("/payroll/forms"),
  createForm: (data) => api.post("/payroll/forms", data),

  listSettlements: () => api.get("/payroll/settlements"),
  createSettlement: (data) => api.post("/payroll/settlements", data),

  listActivities: (limit = 50) => api.get("/payroll/activities", { params: { limit } }),
};



export const eventsAPI = {
  getAll: () => api.get("/events"),
  create: (data) => api.post("/events", data),
  update: (id, data) => api.put(`/events/${id}`, data),
  remove: (id) => api.delete(`/events/${id}`),
};
export const bankAccountAPI = {
  get: () => api.get("/bank-account"),
  update: (data) => api.put("/bank-account", data),
  listAll: () => api.get("/bank-account/all"),
};

// Only export things NOT already exported above.
// documentsAPI and educationAPI are already exported via `export const`.
export default api;