// import { employeesAPI } from './api';

// class EmployeeService {
//   // Get all employees
//   static async getAllEmployees() {
//     try {
//       console.log('📋 Fetching all employees...');
//       const response = await employeesAPI.getAll();
      
//       console.log('✅ Employees fetched successfully:', response.data.data?.length || 0, 'employees');
//       return {
//         success: true,
//         data: response.data.data || []
//       };
//     } catch (error) {
//       console.error('❌ Error fetching employees:', error.response?.data || error.message);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to fetch employees',
//         status: error.response?.status,
//         data: []
//       };
//     }
//   }

//   // Register new employee
//   static async registerEmployee(employeeData) {
//     try {
//       console.log('➕ Registering new employee:', employeeData);
      
//       const response = await employeesAPI.register({
//         Name: employeeData.Name,
//         Email: employeeData.Email || employeeData.OfficialMailID,
//         OfficialMailID: employeeData.Email || employeeData.OfficialMailID,
//         DOJ: employeeData.DOJ || '',
//         ContactNo: employeeData.ContactNo || '',
//         BloodGroup: employeeData.BloodGroup || '',
//         PersonalMailID: employeeData.PersonalMailID || '',
//         DOB: employeeData.DOB || '',
//         Designation: employeeData.Designation || '',
//         Role: employeeData.Role || 'employee',
//         PANNumber: employeeData.PANNumber || '',
//         AadharCardNumber: employeeData.AadharCardNumber || ''
//       });
      
//       console.log('✅ Employee registered successfully:', response.data.data);
//       return {
//         success: true,
//         data: response.data.data,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ Error registering employee:', error.response?.data || error.message);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to register employee',
//         errors: error.response?.data?.errors,
//         status: error.response?.status
//       };
//     }
//   }

//   // Update employee
//   static async updateEmployee(employeeId, employeeData) {
//     try {
//       console.log('✏️ Updating employee:', employeeId, employeeData);
      
//       const response = await employeesAPI.update(employeeId, {
//         Name: employeeData.Name,
//         Email: employeeData.Email || employeeData.OfficialMailID,
//         DOJ: employeeData.DOJ || '',
//         ContactNo: employeeData.ContactNo || '',
//         BloodGroup: employeeData.BloodGroup || '',
//         PersonalMailID: employeeData.PersonalMailID || '',
//         DOB: employeeData.DOB || '',
//         Designation: employeeData.Designation || '',
//         Role: employeeData.Role || 'employee',
//         PANNumber: employeeData.PANNumber || '',
//         AadharCardNumber: employeeData.AadharCardNumber || ''
//       });
      
//       console.log('✅ Employee updated successfully:', response.data.data);
//       return {
//         success: true,
//         data: response.data.data,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ Error updating employee:', error.response?.data || error.message);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to update employee',
//         errors: error.response?.data?.errors,
//         status: error.response?.status
//       };
//     }
//   }

//   // Delete employee
//   static async deleteEmployee(employeeId) {
//     try {
//       console.log('🗑️ Deleting employee:', employeeId);
      
//       const response = await employeesAPI.delete(employeeId);
      
//       console.log('✅ Employee deleted successfully');
//       return {
//         success: true,
//         message: response.data.message
//       };
//     } catch (error) {
//       console.error('❌ Error deleting employee:', error.response?.data || error.message);
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Failed to delete employee',
//         status: error.response?.status
//       };
//     }
//   }
// }

// export default EmployeeService;







import { employeesAPI } from "../api";

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

class EmployeeService {
  static async getAllEmployees() {
    try {
      const response = await employeesAPI.getAll();
      const data = Array.isArray(response.data)
        ? response.data
        : response.data?.data || [];
      return { success: true, data };
    } catch (error) {
      return { success: false, message: extractError(error), data: [] };
    }
  }

  static async registerEmployee(employeeData) {
    try {
      const response = await employeesAPI.register(employeeData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: extractError(error) };
    }
  }

  static async updateEmployee(employeeId, employeeData) {
    try {
      const response = await employeesAPI.update(employeeId, employeeData);
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: extractError(error) };
    }
  }

  static async deleteEmployee(employeeId) {
    try {
      await employeesAPI.delete(employeeId);
      return { success: true };
    } catch (error) {
      return { success: false, message: extractError(error) };
    }
  }
}

export default EmployeeService;