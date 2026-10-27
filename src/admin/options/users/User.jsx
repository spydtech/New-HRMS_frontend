import React, { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { FaPen } from "react-icons/fa";

function User() {
  const [activeSection, setActiveSection] = useState("users");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [invites, setInvites] = useState([]);
  const [formData, setFormData] = useState({
    employee: "",
    email: "",
    role: "",
  });
  const [statusFilter, setStatusFilter] = useState("all");
  const [editingRole, setEditingRole] = useState(null);
  const [newRole, setNewRole] = useState("");
  const [users, setUsers] = useState([
    {
      name: "Ratnapriya",
      email: "alice@example.com",
      role: "Developer",
      joined: "2023-01-15",
      employee: "E123",
      status: "Active",
    },
    {
      name: "Ashwini",
      email: "bob@example.com",
      role: "Designer",
      joined: "2022-11-23",
      employee: "E456",
      status: "Inactive",
    },
    {
      name: "Raghavendra",
      email: "charlie@example.com",
      role: "Project Manager",
      joined: "2023-03-10",
      employee: "E789",
      status: "Active",
    },
    {
      name: "Premchand",
      email: "david@example.com",
      role: "QA Engineer",
      joined: "2023-02-25",
      employee: "E012",
      status: "Active",
    },
    {
      name: "NikilRaj",
      email: "eva@example.com",
      role: "Business Analyst",
      joined: "2022-09-30",
      employee: "E345",
      status: "Inactive",
    },
  ]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEditClick = (user) => {
    setEditingRole(user);
    setNewRole(user.role);
  };

  const handleRoleChange = (e) => {
    setNewRole(e.target.value);
  };

  const saveRoleChange = () => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === editingRole.email ? { ...user, role: newRole } : user
      )
    );
    setEditingRole(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setInvites((prevInvites) => [
      ...prevInvites,
      {
        email: formData.email,
        role: formData.role,
        employee: formData.employee,
        sentBy: "Admin",
        sentOn: new Date().toLocaleDateString(),
        status: "Pending",
        action: "Send Invite",
      },
    ]);
    setFormData({
      employee: "",
      email: "",
      role: "",
    });
    toggleModal();
  };

  const filteredUsers =
    statusFilter === "all"
      ? users
      : users.filter((user) => user.status === statusFilter);

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="  flex flex-col md:flex-row justify-between">
        <div>
          <span className=" text-[#E65F2B] text-sm lg:text-lg font-medium">
            Admin / Users
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mb-5 pt-4 text-lg">
        <h1
          className={`font-bold mb-2 md:mb-0 md:mr-[40px] cursor-pointer px-4 py-2 rounded ${
            activeSection === "users"
              ? " bg-[#E65F2B]  text-white text-lg"
              : "text-[#E65F2B]"
          }`}
          onClick={() => handleSectionChange("users")}
        >
          Users
        </h1>
        <h1
          className={`font-bold cursor-pointer px-4 py-2 rounded ${
            activeSection === "invites"
              ? " bg-[#E65F2B] text-white text-lg"
              : "text-[#E65F2B]"
          }`}
          onClick={() => handleSectionChange("invites")}
        >
          Invites
        </h1>
      </div>

      {activeSection === "users" && (
        <div id="table-users">
          <div className="flex mb-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0 rounded-md p-2"
            >
              <option value="all">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
            <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
              <thead className="bg-[#E65F2B] font-normal  text-lg text-white sticky top-0 ">
                <tr>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    User Name
                  </th>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    Email Address
                  </th>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    User Type (Role)
                  </th>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    User Since
                  </th>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    Employee
                  </th>
                  <th className="py-3 px-4  text-center ">Login</th>
                  <th className="py-3 px-4  text-center border-r  border-white border-opacity-60">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.name}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.email}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.role}
                      <button
                        onClick={() => handleEditClick(user)}
                        className="ml-2 text-[#E65F2B]"
                      >
                        <FaPen />
                      </button>
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.joined}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.employee}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      N/A
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B] border-r border-gray-300">
                      {user.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {editingRole && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6">
              <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                <h2 className="text-lg mt-4 text-[#E65F2B] font-semibold mb-4">
                  Edit Role for {editingRole.name}
                </h2>
                <label className="block mb-2">
                  <span className="text-[#E65F2B] font-semibold">New Role</span>
                  <select
                    value={newRole}
                    onChange={handleRoleChange}
                    className="block w-full p-2 border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0 rounded-md"
                  >
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Project Manager">Project Manager</option>
                    <option value="QA Engineer">QA Engineer</option>
                    <option value="Business Analyst">Business Analyst</option>
                  </select>
                </label>
                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => setEditingRole(null)}
                    className="px-4 py-2 text-white bg-gray-500 rounded-md transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveRoleChange}
                    className="ml-4 px-4 py-2 text-white bg-[#E65F2B] rounded-md  transition"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {activeSection === "invites" && (
        <>
          <div className="flex justify-end mb-4">
            <button
              className="flex items-center px-4 py-2 bg-[#E65F2B]   text-white rounded-md hover:bg-[#FF9900] transition"
              onClick={toggleModal}
            >
              <FiPlusCircle className="mr-2" />
              Add Invite
            </button>
          </div>
          <div className="  overflow-x-scroll scrollbar-thin   scrollbar-track-white scrollbar-thumb-[#e65f2b] pt-4 mx-4">
            <table className="min-w-full w-screen overflow-x-scroll  text-nowrap">
              <thead className="bg-[#E65F2B] text-white">
                <tr>
                  <th className="py-3  bg-[#E65F2B]  border-r border-white  px-4  text-center">
                    Email Address
                  </th>
                  <th className="py-3 bg-[#E65F2B]  border-r border-white  px-4  text-center">
                    Role
                  </th>
                  <th className="py-3 px-4  border-r border-white bg-[#E65F2B]   text-center">
                    Employee
                  </th>
                  <th className="py-3 px-4  border-r border-white bg-[#E65F2B]  text-center">
                    Sent By
                  </th>
                  <th className="py-3 px-4  border-r border-white bg-[#E65F2B]    text-center">
                    Sent On
                  </th>
                  <th className="py-3 px-4  border-r border-white bg-[#E65F2B]  text-center">
                    Status
                  </th>
                  <th className="py-3 px-4  border-r border-white bg-[#E65F2B]  text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {invites.map((invite, index) => (
                  <tr key={index}>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.email}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.role}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.employee}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.sentBy}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.sentOn}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.status}
                    </td>
                    <td className="py-3 px-4  text-center text-[#E65F2B]">
                      {invite.action}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {isModalOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4 sm:p-6">
                <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
                  <h2 className="text-lg text-[#E65F2B] font-semibold mb-4">
                    Add New Invite
                  </h2>
                  <form onSubmit={handleFormSubmit}>
                    <label className="block mb-2">
                      <span className="text-[#E65F2B] font-semibold">
                        Employee
                      </span>
                      <input
                        id="employee"
                        value={formData.employee}
                        onChange={handleInputChange}
                        className="block w-full p-2 border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0 rounded-md"
                      />
                    </label>
                    <label className="block mb-2">
                      <span className="text-[#E65F2B] font-semibold">
                        Email
                      </span>
                      <input
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block w-full p-2 border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0 rounded-md"
                      />
                    </label>
                    <label className="block mb-4">
                      <span className="text-[#E65F2B] font-semibold">Role</span>
                      <select
                        id="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="block w-full p-2 border-[#FF9900] text-[#FF9900] border-2 focus:border-[#FF9900] focus:ring-0 rounded-md"
                      >
                        <option value="Developer">Developer</option>
                        <option value="Designer">Designer</option>
                        <option value="Project Manager">Project Manager</option>
                        <option value="QA Engineer">QA Engineer</option>
                        <option value="Business Analyst">
                          Business Analyst
                        </option>
                      </select>
                    </label>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={toggleModal}
                        className="px-4 py-2 text-white bg-gray-500 rounded-md  transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="ml-4 px-4 py-2 text-white bg-[#E65F2B] rounded-md  transition"
                      >
                        Send Invite
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default User;
