// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   fetchLeaveTypes,
//   updateLeaveType,
//   selectLeaveTypes,
//   clearLeaveError,
// } from "../../../../store/slices/leaveSlice";

// const yesNo = (v) => (v ? "Yes" : "No");

// const Field = ({ label, children }) => (
//   <div className="flex flex-col w-full sm:w-1/2 mb-4">
//     <h1 className="text-lg text-[#0098F1] font-medium">{label}</h1>
//     <div className="text-[16px] text-[#0098F1] mt-1">{children}</div>
//   </div>
// );

// const Section = ({ title, children }) => (
//   <>
//     <div className="mt-5 flex flex-col sm:flex-row">
//       <div className="w-full sm:w-[30%] flex flex-col items-start mb-4 sm:mb-0">
//         <h1 className="text-lg font-semibold text-[#0098F1]">{title}</h1>
//       </div>
//       <div className="w-full sm:w-[70%] flex flex-wrap">{children}</div>
//     </div>
//     <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />
//   </>
// );

// const RulesEditor = ({ leaveTypeName }) => {
//   const dispatch = useDispatch();
//   const types = useSelector(selectLeaveTypes);
//   const [activeSetting, setActiveSetting] = useState("general");
//   const [editing, setEditing] = useState(false);
//   const [form, setForm] = useState(null);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     dispatch(fetchLeaveTypes());
//   }, [dispatch]);

//   const record = types.find((t) => t.name === leaveTypeName);

//   useEffect(() => {
//     if (record) setForm({ ...record });
//   }, [record]);

//   const update = (field, value) => setForm((p) => ({ ...p, [field]: value }));

//   const handleEdit = () => {
//     setForm({ ...record });
//     setEditing(true);
//   };

//   const handleCancel = () => {
//     setForm({ ...record });
//     setEditing(false);
//   };

//   const handleSave = async () => {
//     if (!record || !form) return;
//     setSaving(true);

//     const payload = {
//       display_name: form.display_name,
//       description: form.description,
//       leaves_per_year: Number(form.leaves_per_year),
//       weekends_between_leave: !!form.weekends_between_leave,
//       holidays_between_leave: !!form.holidays_between_leave,
//       accrual_enabled: !!form.accrual_enabled,
//       accrual_frequency: form.accrual_frequency,
//       accrual_period: form.accrual_period,
//       allowed_under_probation: !!form.allowed_under_probation,
//       allowed_under_notice_period: !!form.allowed_under_notice_period,
//       encashment_allowed: !!form.encashment_allowed,
//       max_encashment_days: Number(form.max_encashment_days),
//       carry_forward_allowed: !!form.carry_forward_allowed,
//       carry_forward_limit: Number(form.carry_forward_limit),
//       max_leaves_per_month: Number(form.max_leaves_per_month),
//       continuous_leaves_allowed: Number(form.continuous_leaves_allowed),
//       negative_leaves_allowed: !!form.negative_leaves_allowed,
//       future_dated_allowed: !!form.future_dated_allowed,
//       future_dated_after_days: Number(form.future_dated_after_days),
//       backdated_allowed: !!form.backdated_allowed,
//       backdated_up_to_days: Number(form.backdated_up_to_days),
//       next_year_till_month: form.next_year_till_month,
//     };

//     const result = await dispatch(updateLeaveType({ id: record.id, data: payload }));
//     setSaving(false);

//     if (updateLeaveType.fulfilled.match(result)) {
//       toast.success("Leave rules saved");
//       setEditing(false);
//     } else {
//       toast.error(result.payload || "Failed to save");
//       dispatch(clearLeaveError());
//     }
//   };

//   if (!record || !form) {
//     return (
//       <div className="p-6 text-center text-gray-500">Loading leave rules...</div>
//     );
//   }

//   const toggle = (value, onChange) => (
//     <button
//       type="button"
//       onClick={onChange}
//       disabled={!editing}
//       className={`px-3 py-1 rounded-full text-sm font-medium transition ${
//         value ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
//       } ${editing ? "hover:opacity-80" : "cursor-not-allowed opacity-90"}`}
//     >
//       {yesNo(value)}
//     </button>
//   );

//   const num = (value, onChange, step = "1") => (
//     <input
//       type="number"
//       step={step}
//       value={value ?? ""}
//       onChange={(e) => onChange(e.target.value)}
//       disabled={!editing}
//       className={`w-32 border-b outline-none bg-transparent ${
//         editing ? "border-[#0098F1]" : "border-transparent cursor-not-allowed"
//       }`}
//     />
//   );

//   const text = (value, onChange) => (
//     <input
//       type="text"
//       value={value || ""}
//       onChange={(e) => onChange(e.target.value)}
//       disabled={!editing}
//       className={`w-full max-w-md border-b outline-none bg-transparent ${
//         editing ? "border-[#0098F1]" : "border-transparent cursor-not-allowed"
//       }`}
//     />
//   );

//   return (
//     <>
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-2 space-y-3 md:space-y-0">
//         <div className="flex space-x-4">
//           <h1
//             className={`text-lg md:text-xl text-[#0098F1] cursor-pointer ${
//               activeSetting === "general" ? "border-b-2 border-[#0098F1]" : ""
//             }`}
//             onClick={() => setActiveSetting("general")}
//           >
//             General settings
//           </h1>
//           <h1
//             className={`text-lg md:text-xl text-[#0098F1] cursor-pointer ${
//               activeSetting === "advanced" ? "border-b-2 border-[#0098F1]" : ""
//             }`}
//             onClick={() => setActiveSetting("advanced")}
//           >
//             Advanced settings
//           </h1>
//         </div>

//         <div className="flex gap-2">
//           {!editing ? (
//             <button
//               onClick={handleEdit}
//               className="bg-[#0098F1] text-white px-4 py-2 rounded-lg hover:opacity-90"
//             >
//               Edit
//             </button>
//           ) : (
//             <>
//               <button
//                 onClick={handleCancel}
//                 className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleSave}
//                 disabled={saving}
//                 className={`text-white px-4 py-2 rounded-lg ${
//                   saving ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
//                 }`}
//               >
//                 {saving ? "Saving..." : "Save"}
//               </button>
//             </>
//           )}
//         </div>
//       </div>

//       {activeSetting === "general" && (
//         <div className="m-3 p-4">
//           <div>
//             <h1 className="text-lg md:text-xl text-[#0098F1] font-semibold">Name</h1>
//             {editing ? (
//               <input
//                 type="text"
//                 value={form.display_name || ""}
//                 onChange={(e) => update("display_name", e.target.value)}
//                 className="mt-1 w-full max-w-md border-b border-[#0098F1] bg-transparent text-[16px] text-[#0098F1] outline-none"
//               />
//             ) : (
//               <h1 className="text-[#0098F1] text-[16px]">{form.display_name}</h1>
//             )}
//           </div>

//           <div className="mt-5">
//             <h1 className="text-lg md:text-xl text-[#0098F1] font-semibold">Description</h1>
//             {editing ? (
//               <textarea
//                 value={form.description || ""}
//                 onChange={(e) => update("description", e.target.value)}
//                 rows={2}
//                 className="mt-1 w-full border border-[#0098F1] rounded-lg p-2 bg-transparent text-[16px] text-[#0098F1] outline-none"
//               />
//             ) : (
//               <h1 className="text-[#0098F1] text-[16px] mt-1">
//                 {form.description || "—"}
//               </h1>
//             )}
//           </div>
//           <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

//           <Section title="Leaves Count">
//             <Field label="Leaves Allowed In a Year">
//               {num(form.leaves_per_year, (v) => update("leaves_per_year", v), "0.5")}
//             </Field>
//             <Field label="Weekends Between Leave">
//               {toggle(form.weekends_between_leave, () =>
//                 update("weekends_between_leave", !form.weekends_between_leave)
//               )}
//             </Field>
//             <Field label="Holidays Between Leave">
//               {toggle(form.holidays_between_leave, () =>
//                 update("holidays_between_leave", !form.holidays_between_leave)
//               )}
//             </Field>
//           </Section>

//           <Section title="Accrual">
//             <Field label="Creditable On Accrual Basis">
//               {toggle(form.accrual_enabled, () =>
//                 update("accrual_enabled", !form.accrual_enabled)
//               )}
//             </Field>
//             <Field label="Accrual Frequency">
//               {editing ? (
//                 <select
//                   value={form.accrual_frequency || "monthly"}
//                   onChange={(e) => update("accrual_frequency", e.target.value)}
//                   className="border-b border-[#0098F1] bg-transparent outline-none"
//                 >
//                   <option value="monthly">Monthly</option>
//                   <option value="quarterly">Quarterly</option>
//                   <option value="half-yearly">Half-Yearly</option>
//                   <option value="yearly">Yearly</option>
//                 </select>
//               ) : (
//                 <span className="capitalize">{form.accrual_frequency || "—"}</span>
//               )}
//             </Field>
//             <Field label="Accrual Period">
//               {editing ? (
//                 <input
//                   type="text"
//                   value={form.accrual_period || ""}
//                   onChange={(e) => update("accrual_period", e.target.value)}
//                   className="border-b border-[#0098F1] bg-transparent outline-none"
//                 />
//               ) : (
//                 form.accrual_period || "—"
//               )}
//             </Field>
//           </Section>

//           <Section title="Applicability">
//             <Field label="Allowed Under Probation">
//               {toggle(form.allowed_under_probation, () =>
//                 update("allowed_under_probation", !form.allowed_under_probation)
//               )}
//             </Field>
//             <Field label="Allowed Under Notice Period">
//               {toggle(form.allowed_under_notice_period, () =>
//                 update(
//                   "allowed_under_notice_period",
//                   !form.allowed_under_notice_period
//                 )
//               )}
//             </Field>
//           </Section>

//           <Section title="Leave Encash">
//             <Field label="Encashment Allowed">
//               {toggle(form.encashment_allowed, () =>
//                 update("encashment_allowed", !form.encashment_allowed)
//               )}
//             </Field>
//             <Field label="Maximum Encashment (days)">
//               {num(form.max_encashment_days, (v) =>
//                 update("max_encashment_days", v)
//               )}
//             </Field>
//           </Section>

//           <Section title="Carry Forward">
//             <Field label="Carry Forward Allowed">
//               {toggle(form.carry_forward_allowed, () =>
//                 update("carry_forward_allowed", !form.carry_forward_allowed)
//               )}
//             </Field>
//             <Field label="Carry Forward Limit (days)">
//               {num(form.carry_forward_limit, (v) =>
//                 update("carry_forward_limit", v)
//               )}
//             </Field>
//           </Section>
//         </div>
//       )}

//       {activeSetting === "advanced" && (
//         <div className="m-3 p-4">
//           <Section title="Leaves Count">
//             <Field label="Max. Leave Allowed in a Month">
//               {num(form.max_leaves_per_month, (v) =>
//                 update("max_leaves_per_month", v), "0.5"
//               )}
//             </Field>
//             <Field label="Continuous Leaves Allowed">
//               {num(form.continuous_leaves_allowed, (v) =>
//                 update("continuous_leaves_allowed", v)
//               )}
//             </Field>
//           </Section>

//           <Section title="Applicability">
//             <Field label="Negative Leaves Allowed">
//               {toggle(form.negative_leaves_allowed, () =>
//                 update("negative_leaves_allowed", !form.negative_leaves_allowed)
//               )}
//             </Field>
//           </Section>

//           <Section title="Miscellaneous">
//             <Field label="Future-dated Leaves Allowed">
//               {toggle(form.future_dated_allowed, () =>
//                 update("future_dated_allowed", !form.future_dated_allowed)
//               )}
//             </Field>
//             <Field label="Future-dated Leaves Allowed After (days)">
//               {num(form.future_dated_after_days, (v) =>
//                 update("future_dated_after_days", v)
//               )}
//             </Field>
//             <Field label="Backdated Leaves Allowed">
//               {toggle(form.backdated_allowed, () =>
//                 update("backdated_allowed", !form.backdated_allowed)
//               )}
//             </Field>
//             <Field label="Backdated Leaves Allowed up to (days)">
//               {num(form.backdated_up_to_days, (v) =>
//                 update("backdated_up_to_days", v)
//               )}
//             </Field>
//             <Field label="Apply Leaves for Next Year Till">
//               {editing ? (
//                 <select
//                   value={form.next_year_till_month || "January"}
//                   onChange={(e) => update("next_year_till_month", e.target.value)}
//                   className="border-b border-[#0098F1] bg-transparent outline-none"
//                 >
//                   {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m) => (
//                     <option key={m} value={m}>{m}</option>
//                   ))}
//                 </select>
//               ) : (
//                 form.next_year_till_month || "—"
//               )}
//             </Field>
//           </Section>
//         </div>
//       )}
//     </>
//   );
// };

// export default RulesEditor;












/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchLeaveTypes,
  updateLeaveType,
  selectLeaveTypes,
  clearLeaveError,
} from "../../../../store/slices/leaveSlice";

const yesNo = (v) => (v ? "Yes" : "No");

const Field = ({ label, children }) => (
  <div className="flex flex-col w-full sm:w-1/2 mb-4">
    <h1 className="text-lg text-[#0098F1] font-medium">{label}</h1>
    <div className="text-[16px] text-[#0098F1] mt-1">{children}</div>
  </div>
);

const Section = ({ title, children }) => (
  <>
    <div className="mt-5 flex flex-col sm:flex-row">
      <div className="w-full sm:w-[30%] flex flex-col items-start mb-4 sm:mb-0">
        <h1 className="text-lg font-semibold text-[#0098F1]">{title}</h1>
      </div>
      <div className="w-full sm:w-[70%] flex flex-wrap">{children}</div>
    </div>
    <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />
  </>
);

const RulesEditor = ({ leaveTypeName }) => {
  const dispatch = useDispatch();
  const types = useSelector(selectLeaveTypes);
  const [activeSetting, setActiveSetting] = useState("general");
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => { dispatch(fetchLeaveTypes()); }, [dispatch]);

  const record = types.find((t) => t.name === leaveTypeName);

  useEffect(() => { if (record) setForm({ ...record }); }, [record]);

  const update = (field, value) => setForm((p) => ({ ...p, [field]: value }));

  const handleEdit = () => { setForm({ ...record }); setEditing(true); };
  const handleCancel = () => { setForm({ ...record }); setEditing(false); };

  const handleSave = async () => {
    if (!record || !form) return;
    setSaving(true);

    const payload = {
      display_name: form.display_name,
      description: form.description,
      leaves_per_year: Number(form.leaves_per_year),
      weekends_between_leave: !!form.weekends_between_leave,
      holidays_between_leave: !!form.holidays_between_leave,
      accrual_enabled: !!form.accrual_enabled,
      accrual_frequency: form.accrual_frequency,
      accrual_period: form.accrual_period,
      allowed_under_probation: !!form.allowed_under_probation,
      allowed_under_notice_period: !!form.allowed_under_notice_period,
      encashment_allowed: !!form.encashment_allowed,
      max_encashment_days: Number(form.max_encashment_days),
      carry_forward_allowed: !!form.carry_forward_allowed,
      carry_forward_limit: Number(form.carry_forward_limit),
      max_leaves_per_month: Number(form.max_leaves_per_month),
      continuous_leaves_allowed: Number(form.continuous_leaves_allowed),
      negative_leaves_allowed: !!form.negative_leaves_allowed,
      future_dated_allowed: !!form.future_dated_allowed,
      future_dated_after_days: Number(form.future_dated_after_days),
      backdated_allowed: !!form.backdated_allowed,
      backdated_up_to_days: Number(form.backdated_up_to_days),
      next_year_till_month: form.next_year_till_month,
    };

    const result = await dispatch(updateLeaveType({ id: record.id, data: payload }));
    setSaving(false);

    if (updateLeaveType.fulfilled.match(result)) {
      toast.success("Leave rules saved");
      setEditing(false);
    } else {
      toast.error(result.payload || "Failed to save");
      dispatch(clearLeaveError());
    }
  };

  if (!record || !form) {
    return <div className="p-6 text-center text-gray-500">Loading leave rules...</div>;
  }

  const toggle = (value, onChange) => (
    <button
      type="button"
      onClick={onChange}
      disabled={!editing}
      className={`px-3 py-1 rounded-full text-sm font-medium transition ${
        value ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
      } ${editing ? "hover:opacity-80" : "cursor-not-allowed opacity-90"}`}
    >
      {yesNo(value)}
    </button>
  );

  const num = (value, onChange, step = "1") => (
    <input
      type="number"
      step={step}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      disabled={!editing}
      className={`w-32 border-b outline-none bg-transparent ${
        editing ? "border-[#0098F1]" : "border-transparent cursor-not-allowed"
      }`}
    />
  );

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-2 space-y-3 md:space-y-0">
        <div className="flex space-x-4">
          <h1 className={`text-lg md:text-xl text-[#0098F1] cursor-pointer ${activeSetting === "general" ? "border-b-2 border-[#0098F1]" : ""}`}
            onClick={() => setActiveSetting("general")}>
            General settings
          </h1>
          <h1 className={`text-lg md:text-xl text-[#0098F1] cursor-pointer ${activeSetting === "advanced" ? "border-b-2 border-[#0098F1]" : ""}`}
            onClick={() => setActiveSetting("advanced")}>
            Advanced settings
          </h1>
        </div>

        <div className="flex gap-2">
          {!editing ? (
            <button onClick={handleEdit}
              className="bg-[#0098F1] text-white px-4 py-2 rounded-lg hover:opacity-90">
              Edit
            </button>
          ) : (
            <>
              <button onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400">
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving}
                className={`text-white px-4 py-2 rounded-lg ${saving ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"}`}>
                {saving ? "Saving..." : "Save"}
              </button>
            </>
          )}
        </div>
      </div>

      {activeSetting === "general" && (
        <div className="m-3 p-4">
          <div>
            <h1 className="text-lg md:text-xl text-[#0098F1] font-semibold">Name</h1>
            {editing ? (
              <input type="text" value={form.display_name || ""}
                onChange={(e) => update("display_name", e.target.value)}
                className="mt-1 w-full max-w-md border-b border-[#0098F1] bg-transparent text-[16px] text-[#0098F1] outline-none" />
            ) : (
              <h1 className="text-[#0098F1] text-[16px]">{form.display_name}</h1>
            )}
          </div>

          <div className="mt-5">
            <h1 className="text-lg md:text-xl text-[#0098F1] font-semibold">Description</h1>
            {editing ? (
              <textarea value={form.description || ""}
                onChange={(e) => update("description", e.target.value)} rows={2}
                className="mt-1 w-full border border-[#0098F1] rounded-lg p-2 bg-transparent text-[16px] text-[#0098F1] outline-none" />
            ) : (
              <h1 className="text-[#0098F1] text-[16px] mt-1">{form.description || "—"}</h1>
            )}
          </div>
          <hr className="bg-[#0098F1] h-0.5 mt-5 w-full border-none" />

          <Section title="Leaves Count">
            <Field label="Leaves Allowed In a Year">
              {num(form.leaves_per_year, (v) => update("leaves_per_year", v), "0.5")}
            </Field>
            <Field label="Weekends Between Leave">
              {toggle(form.weekends_between_leave, () => update("weekends_between_leave", !form.weekends_between_leave))}
            </Field>
            <Field label="Holidays Between Leave">
              {toggle(form.holidays_between_leave, () => update("holidays_between_leave", !form.holidays_between_leave))}
            </Field>
          </Section>

          <Section title="Accrual">
            <Field label="Creditable On Accrual Basis">
              {toggle(form.accrual_enabled, () => update("accrual_enabled", !form.accrual_enabled))}
            </Field>
            <Field label="Accrual Frequency">
              {editing ? (
                <select value={form.accrual_frequency || "monthly"}
                  onChange={(e) => update("accrual_frequency", e.target.value)}
                  className="border-b border-[#0098F1] bg-transparent outline-none">
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="yearly">Yearly</option>
                </select>
              ) : (<span className="capitalize">{form.accrual_frequency || "—"}</span>)}
            </Field>
            <Field label="Accrual Period">
              {editing ? (
                <input type="text" value={form.accrual_period || ""}
                  onChange={(e) => update("accrual_period", e.target.value)}
                  className="border-b border-[#0098F1] bg-transparent outline-none" />
              ) : (form.accrual_period || "—")}
            </Field>
          </Section>

          <Section title="Applicability">
            <Field label="Allowed Under Probation">
              {toggle(form.allowed_under_probation, () => update("allowed_under_probation", !form.allowed_under_probation))}
            </Field>
            <Field label="Allowed Under Notice Period">
              {toggle(form.allowed_under_notice_period, () => update("allowed_under_notice_period", !form.allowed_under_notice_period))}
            </Field>
          </Section>

          <Section title="Leave Encash">
            <Field label="Encashment Allowed">
              {toggle(form.encashment_allowed, () => update("encashment_allowed", !form.encashment_allowed))}
            </Field>
            <Field label="Maximum Encashment (days)">
              {num(form.max_encashment_days, (v) => update("max_encashment_days", v))}
            </Field>
          </Section>

          <Section title="Carry Forward">
            <Field label="Carry Forward Allowed">
              {toggle(form.carry_forward_allowed, () => update("carry_forward_allowed", !form.carry_forward_allowed))}
            </Field>
            <Field label="Carry Forward Limit (days)">
              {num(form.carry_forward_limit, (v) => update("carry_forward_limit", v))}
            </Field>
          </Section>
        </div>
      )}

      {activeSetting === "advanced" && (
        <div className="m-3 p-4">
          <Section title="Leaves Count">
            <Field label="Max. Leave Allowed in a Month">
              {num(form.max_leaves_per_month, (v) => update("max_leaves_per_month", v), "0.5")}
            </Field>
            <Field label="Continuous Leaves Allowed">
              {num(form.continuous_leaves_allowed, (v) => update("continuous_leaves_allowed", v))}
            </Field>
          </Section>

          <Section title="Applicability">
            <Field label="Negative Leaves Allowed">
              {toggle(form.negative_leaves_allowed, () => update("negative_leaves_allowed", !form.negative_leaves_allowed))}
            </Field>
          </Section>

          <Section title="Miscellaneous">
            <Field label="Future-dated Leaves Allowed">
              {toggle(form.future_dated_allowed, () => update("future_dated_allowed", !form.future_dated_allowed))}
            </Field>
            <Field label="Future-dated Leaves Allowed After (days)">
              {num(form.future_dated_after_days, (v) => update("future_dated_after_days", v))}
            </Field>
            <Field label="Backdated Leaves Allowed">
              {toggle(form.backdated_allowed, () => update("backdated_allowed", !form.backdated_allowed))}
            </Field>
            <Field label="Backdated Leaves Allowed up to (days)">
              {num(form.backdated_up_to_days, (v) => update("backdated_up_to_days", v))}
            </Field>
            <Field label="Apply Leaves for Next Year Till">
              {editing ? (
                <select value={form.next_year_till_month || "January"}
                  onChange={(e) => update("next_year_till_month", e.target.value)}
                  className="border-b border-[#0098F1] bg-transparent outline-none">
                  {["January","February","March","April","May","June","July","August","September","October","November","December"].map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              ) : (form.next_year_till_month || "—")}
            </Field>
          </Section>
        </div>
      )}
    </>
  );
};

export default RulesEditor;