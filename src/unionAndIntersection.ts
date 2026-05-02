// union
type userRole = "admin" | "user";
const getDashboard = (role: userRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  }
  return "Guest Dashboard";
};
console.log(getDashboard("user"));

// intersection
type Employee = {
  name: string;
  employeeId: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};
type ManagerEmployee = Employee & Manager;
const ChowdhuryShaheb: ManagerEmployee = {
  name: "Chowdhury Shaheb",
  employeeId: "EMP12345",
  phoneNo: "123-456-7890",
  designation: "Project Manager",
  teamSize: 20,
};
