// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { logout, clearError, clearSuccess } from '../store/slices/authSlice';
// import AuthService from '../services/authService';

// const useAuth = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const authState = useSelector((state) => state.auth);

//   const handleLogout = async () => {
//     await dispatch(logout()).unwrap();
//     navigate('/login');
//   };

//   const checkAuth = () => {
//     return AuthService.isAuthenticated();
//   };

//   const getCurrentUser = () => {
//     return AuthService.getCurrentUser();
//   };

//   const getUserRole = () => {
//     return AuthService.getUserRole();
//   };

//   const hasRole = (role) => {
//     return AuthService.hasRole(role);
//   };

//   const hasAnyRole = (roles) => {
//     return AuthService.hasAnyRole(roles);
//   };

//   const clearErrors = () => {
//     dispatch(clearError());
//   };

//   const clearSuccessMessage = () => {
//     dispatch(clearSuccess());
//   };

//   return {
//     ...authState,
//     handleLogout,
//     checkAuth,
//     getCurrentUser,
//     getUserRole,
//     hasRole,
//     hasAnyRole,
//     clearErrors,
//     clearSuccessMessage,
//   };
// };

// export default useAuth;





import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser, clearError, clearSuccess } from "../store/slices/authSlice";
import AuthService from "../services/authService";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authState = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    } catch {
      // ignore
    } finally {
      navigate("/login", { replace: true });
    }
  };

  const checkAuth = () => AuthService.isAuthenticated();
  const getCurrentUser = () => AuthService.getCurrentUser();
  const getUserRole = () => AuthService.getUserRole();
  const hasRole = (role) => AuthService.hasRole(role);
  const hasAnyRole = (roles) => AuthService.hasAnyRole(roles);
  const clearErrors = () => dispatch(clearError());
  const clearSuccessMessage = () => dispatch(clearSuccess());

  return {
    ...authState,
    handleLogout,
    checkAuth,
    getCurrentUser,
    getUserRole,
    hasRole,
    hasAnyRole,
    clearErrors,
    clearSuccessMessage,
  };
};

export default useAuth;