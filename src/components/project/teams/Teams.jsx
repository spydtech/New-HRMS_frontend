// import React, { useState } from "react";

// const Teams = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filteredTeams, setFilteredTeams] = useState([]);

//   const Teamsdata = [
//     {
//       id: 1,
//       teamName: "Web Development Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721635535/c43fe5abf19c94f85de5d4eae99d4dfd_n2cbaz.jpg",
//       Name: "Susie Wills",
//       Position: "Team Lead",
//       Skills: "ReactJs,Angular,VueJs",
//       Leads: 1,
//       Employees: 3,
//     },
//     {
//       id: 2,
//       teamName: "Backend Engineering Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
//       Name: "John Doe",
//       Position: "Backend Lead",
//       Skills: "Node.js,Express,MongoDB",
//       Leads: 1,
//       Employees: 4,
//     },
//     {
//       id: 3,
//       teamName: "Mobile App Development Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640501/0dece88c607f31e7347198d500f74644_tdoz36.png",
//       Name: "Alice Smith",
//       Position: "Mobile Lead",
//       Skills: "Native,Flutter,Swift",
//       Leads: 1,
//       Employees: 5,
//     },
//     {
//       id: 4,
//       teamName: "UI/UX Design Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640495/a00f31e718c5819b0fa19af1734a8e0a_tbrrst.png",
//       Name: "Emily Brown",
//       Position: "Design Lead",
//       Skills: "Node.js,Express,MongoDB",
//       Leads: 1,
//       Employees: 3,
//     },
//     {
//       id: 5,
//       teamName: "Data Science Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721635535/c43fe5abf19c94f85de5d4eae99d4dfd_n2cbaz.jpg",
//       Name: "Michael Johnson",
//       Position: "Data Lead",
//       Skills: "Native,Flutter,Swift",
//       Leads: 1,
//       Employees: 6,
//     },
//     {
//       id: 6,
//       teamName: "DevOps Team",
//       image:
//         "https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721640501/0dece88c607f31e7347198d500f74644_tdoz36.png",
//       Name: "David Wilson",
//       Position: "DevOps Lead",
//       Skills: "Docker,Kubernetes,AWS",
//       Leads: 1,
//       Employees: 4,
//     },
//   ];

//   const handleSearchChange = (event) => {
//     const query = event.target.value.toLowerCase();
//     setSearchQuery(query);

//     const filtered = Teamsdata.filter((team) =>
//       team.teamName.toLowerCase().includes(query)
//     );
//     setFilteredTeams(filtered);
//   };

//   const teamsToDisplay = searchQuery.length > 0 ? filteredTeams : Teamsdata;

//   return (
//     <div className="p-4 mt-4">
//       <h1 className="text-[#0098F1] font-bold text-sm lg:text-lg mb-3">
//         Teams
//       </h1>

//       <div className="w-full mb-5">
//         <input
//           type="search"
//           className="w-full  bg-transparent border-2 border-[#0098F1] rounded-lg outline-none px-3 py-2 placeholder-[#0098F1]"
//           style={{
//             borderColor: "#0098F1",
//             color: "black",
//           }}
//           placeholder="Search Here........."
//           onChange={handleSearchChange}
//           value={searchQuery}
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {teamsToDisplay.map((team) => (
//           <div
//             key={team.id}
//             className="flex flex-col bg-white rounded-lg bg-blue p-4 shadow-lg transition-transform transform hover:scale-105"
//           >
//             <div className="text-center">
//               <h1 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-[#0098F1]">
//                 {team.teamName}
//               </h1>
//               <img
//                 src={team.image}
//                 className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0098F1] shadow-md mx-auto p-1"
//                 alt="Team avatar"
//               />

//               <p className="text-base sm:text-xl font-roboto text-[#0098F1] mt-2">
//                 {team.Name}
//               </p>
//               <p className="text-base sm:text-xl font-roboto text-[#0098F1]">
//                 {team.Position}
//               </p>

//               <div className="flex justify-center flex-wrap mt-2">
//                 {team.Skills.split(",").map((skill, index) => (
//                   <h1
//                     key={index}
//                     className="bg-[#0098F1] h-8 w-[70px] sm:w-[80px] m-1 p-2 text-white rounded-lg flex items-center justify-center text-sm sm:text-base font-roboto"
//                   >
//                     {skill.trim()}
//                   </h1>
//                 ))}
//               </div>

//               <div className="flex items-center justify-center mt-2">
//                 <h1 className="text-base sm:text-xl mt-2 mr-2 text-[#0098F1]">
//                   Employees:
//                 </h1>
//                 <div className="flex items-center">
//                   {[...Array(team.Employees)].map((_, index) => (
//                     <img
//                       key={index}
//                       src="https://res.cloudinary.com/ds5ooz2ve/image/upload/v1721382978/989da2826fe6e25ad1f617fda7e70025_d6ucl3.png"
//                       alt={`Employee ${index + 1}`}
//                       className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full -ml-2 mt-4 z-${
//                         5 - index
//                       }`}
//                       style={{ zIndex: 5 - index }}
//                     />
//                   ))}
//                 </div>
//               </div>

//               <h1 className="mt-2 text-base sm:text-xl text-[#0098F1]">
//                 {team.Leads} Lead, {team.Employees} employees
//               </h1>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Teams;





/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FiPlusCircle, FiTrash2, FiUserPlus } from "react-icons/fi";
import {
  fetchTeams,
  createTeam,
  deleteTeam,
  selectTeams,
  selectTeamsLoading,
  selectTeamsSaving,
  clearTeamError,
} from "../../../store/slices/teamSlice";
import {
  fetchEmployees,
  selectEmployees,
} from "../../../store/slices/employeeSlice";

const AVATAR = "https://ui-avatars.com/api/?background=0098F1&color=fff&name=";

const EMPTY_FORM = {
  teamName: "",
  description: "",
  leadId: "",
  memberIds: [],
};

// Accept any of these as the employee's unique key so we never
// accidentally fall back to `undefined` (which broke checkboxes).
const empKey = (e) => e.id ?? e.ID ?? e.employeeId;

const Teams = () => {
  const dispatch = useDispatch();
  const teams = useSelector(selectTeams) || [];
  const employees = useSelector(selectEmployees) || [];
  const loading = useSelector(selectTeamsLoading);
  const saving = useSelector(selectTeamsSaving);

  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);

  useEffect(() => {
    dispatch(fetchTeams());
    dispatch(fetchEmployees());
  }, [dispatch]);

  // Filter teams by search
  const teamsToDisplay = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return teams;
    return teams.filter(
      (t) =>
        t.teamName.toLowerCase().includes(q) ||
        (t.description || "").toLowerCase().includes(q)
    );
  }, [teams, searchQuery]);

  // Which employees are already in a team (keyed by numeric id)
  const takenByTeamId = useMemo(() => {
    const map = {};
    teams.forEach((t) => {
      (t.members || []).forEach((m) => {
        const k = m.id ?? m.ID ?? m.employeeId;
        if (k != null) map[k] = t.teamName;
      });
    });
    return map;
  }, [teams]);

  // ---- Form helpers ----

  const toggleMember = (empId) => {
    if (empId == null) {
      toast.error("Cannot add member — missing id");
      return;
    }
    setForm((prev) => {
      const has = prev.memberIds.includes(empId);
      return {
        ...prev,
        memberIds: has
          ? prev.memberIds.filter((id) => id !== empId)
          : [...prev.memberIds, empId],
      };
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm(EMPTY_FORM);
  };

  const handleCreate = async () => {
    if (!form.teamName.trim()) {
      toast.error("Team name is required");
      return;
    }

    const payload = {
      teamName: form.teamName.trim(),
      description: form.description.trim() || undefined,
      leadId: form.leadId ? parseInt(form.leadId, 10) : undefined,
      memberIds: form.memberIds,
    };

    console.log("[TEAM CREATE] payload:", payload);

    const result = await dispatch(createTeam(payload));
    if (createTeam.fulfilled.match(result)) {
      toast.success("Team created");
      closeModal();
    } else {
      toast.error(result.payload || "Failed to create team");
      dispatch(clearTeamError());
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this team?")) return;
    const result = await dispatch(deleteTeam(id));
    if (deleteTeam.fulfilled.match(result)) {
      toast.success("Team deleted");
    } else {
      toast.error(result.payload || "Failed to delete team");
    }
  };

  return (
    <div className="p-4 mt-4 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-3">
        <h1 className="text-[#0098F1] font-bold text-sm lg:text-lg mb-3 md:mb-0">
          Teams
        </h1>
        <button
          onClick={() => {
            setForm(EMPTY_FORM);
            setIsModalOpen(true);
          }}
          className="flex items-center gap-2 bg-[#0098F1] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          <FiPlusCircle className="text-lg" />
          Add Team
        </button>
      </div>

      {/* Search */}
      <div className="w-full mb-5">
        <input
          type="search"
          className="w-full bg-transparent border-2 border-[#0098F1] rounded-lg outline-none px-3 py-2 placeholder-[#0098F1]"
          placeholder="Search Here........."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Teams grid */}
      {loading ? (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamsToDisplay.length === 0 && (
            <div className="col-span-full text-center text-gray-500 py-10">
              No teams yet. Click "Add Team" to create one.
            </div>
          )}
          {teamsToDisplay.map((team) => {
            const members = team.members || [];
            const leadName = team.lead?.name || team.leadName || "—";

            return (
              <div
                key={team.id}
                className="flex flex-col bg-white rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105"
              >
                <div className="text-center">
                  <h1 className="text-lg sm:text-xl font-bold mb-2 text-[#0098F1]">
                    {team.teamName}
                  </h1>

                  <img
                    src={
                      team.image ||
                      `${AVATAR}${encodeURIComponent(team.teamName)}`
                    }
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#0098F1] shadow-md mx-auto p-1"
                    alt="Team avatar"
                  />

                  <p className="text-base sm:text-xl text-[#0098F1] mt-2">
                    {leadName}
                  </p>
                  <p className="text-base sm:text-xl text-[#0098F1]">
                    Team Lead
                  </p>

                  {team.description && (
                    <p className="text-sm text-gray-600 mt-2 px-2">
                      {team.description}
                    </p>
                  )}

                  {/* Member avatars */}
                  <div className="flex items-center justify-center mt-3">
                    <h1 className="text-base sm:text-lg mr-2 text-[#0098F1]">
                      Members:
                    </h1>
                    <div className="flex items-center">
                      {members.slice(0, 5).map((m, idx) => (
                        <img
                          key={m.id ?? m.ID ?? m.employeeId ?? idx}
                          src={
                            m.profileImage ||
                            `${AVATAR}${encodeURIComponent(m.name)}`
                          }
                          alt={m.name}
                          title={`${m.name} — ${m.role}`}
                          className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white -ml-2"
                          style={{ zIndex: 10 - idx }}
                        />
                      ))}
                      {members.length > 5 && (
                        <span className="ml-2 text-sm text-[#0098F1] font-semibold">
                          +{members.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  <h1 className="mt-2 text-base sm:text-lg text-[#0098F1]">
                    1 Lead, {members.length} employees
                  </h1>

                  <button
                    onClick={() => handleDelete(team.id)}
                    className="mt-3 inline-flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Create Team Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 max-h-[85vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold text-[#0098F1] mb-4">
              Team Up
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Team Name *</label>
              <input
                type="text"
                value={form.teamName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, teamName: e.target.value }))
                }
                className="w-full border rounded-lg p-2"
                placeholder="e.g. Web Development Team"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Description</label>
              <textarea
                rows={2}
                value={form.description}
                onChange={(e) =>
                  setForm((p) => ({ ...p, description: e.target.value }))
                }
                className="w-full border rounded-lg p-2"
                placeholder="Short description (optional)"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Team Lead</label>
              <select
                value={form.leadId}
                onChange={(e) =>
                  setForm((p) => ({ ...p, leadId: e.target.value }))
                }
                className="w-full border rounded-lg p-2"
              >
                <option value="">— Pick a lead —</option>
                {employees.map((e) => {
                  const k = empKey(e);
                  return (
                    <option key={k} value={k}>
                      {e.name} ({e.email})
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1 flex items-center gap-2">
                <FiUserPlus /> Members
                <span className="text-sm text-gray-500">
                  ({form.memberIds.length} selected)
                </span>
              </label>

              <div className="border rounded-lg max-h-64 overflow-y-auto">
                {employees.length === 0 && (
                  <div className="p-4 text-center text-gray-500">
                    No employees found
                  </div>
                )}
                {employees.map((e) => {
                  const k = empKey(e);
                  const inTeam = takenByTeamId[k];
                  const checked = form.memberIds.includes(k);
                  return (
                    <label
                      key={k}
                      className={`flex items-center gap-3 p-3 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 ${
                        inTeam && !checked ? "opacity-50" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleMember(k)}
                      />
                      <img
                        src={
                          e.profileImage ||
                          `${AVATAR}${encodeURIComponent(e.name)}`
                        }
                        className="w-8 h-8 rounded-full"
                        alt=""
                      />
                      <div className="flex-1">
                        <p className="font-medium">{e.name}</p>
                        <p className="text-xs text-gray-500">
                          {e.email} · {e.role}
                          {inTeam && !checked && (
                            <span className="ml-2 text-orange-500">
                              (already in "{inTeam}")
                            </span>
                          )}
                        </p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={closeModal}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleCreate}
                disabled={saving}
                className={`px-4 py-2 rounded-lg text-white ${
                  saving ? "bg-gray-400" : "bg-[#0098F1] hover:opacity-90"
                }`}
              >
                {saving ? "Creating..." : "Create Team"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;