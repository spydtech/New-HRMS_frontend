export const getDashboardPath = (role) => {
  const r = String(role || "").toLowerCase().trim();
  switch (r) {
    case "super_admin":
    case "superadmin":
    case "hr_admin":
    case "hradmin":
    case "hr":
      return "/hr";
    case "admin":
      return "/admin/dashboard";
    case "employee":
      return "/employee/dashboard";
    case "manager":
      return "/manager/dashboard";
    default:
      return "/login";
  }
};

export const isSuperAdmin = (role) => {
  const r = String(role || "").toLowerCase().trim();
  return r === "super_admin" || r === "superadmin";
};

export const isHrAdmin = (role) => {
  const r = String(role || "").toLowerCase().trim();
  return r === "hr_admin" || r === "hradmin" || r === "hr";
};

export const isAdmin = (role) => String(role || "").toLowerCase().trim() === "admin";

export const isEmployee = (role) => String(role || "").toLowerCase().trim() === "employee";