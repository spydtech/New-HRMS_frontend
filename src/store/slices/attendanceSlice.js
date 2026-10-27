import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { attendanceAPI } from "../../services/api";

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

export const fetchAttendance = createAsyncThunk(
  "attendance/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await attendanceAPI.getAll();
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch attendance"));
    }
  }
);

export const createAttendance = createAsyncThunk(
  "attendance/create",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await attendanceAPI.create(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to save attendance"));
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    list: [],
    isLoading: false,
    isSaving: false,
    error: null,
    success: null,
  },
  reducers: {
    clearAttendanceError: (state) => {
      state.error = null;
    },
    clearAttendanceSuccess: (state) => {
      state.success = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendance.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAttendance.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchAttendance.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createAttendance.pending, (state) => {
        state.isSaving = true;
        state.error = null;
      })
      .addCase(createAttendance.fulfilled, (state, action) => {
        state.isSaving = false;
        state.list = [action.payload, ...state.list];
        state.success = "Attendance saved";
      })
      .addCase(createAttendance.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload;
      });
  },
});

export const { clearAttendanceError, clearAttendanceSuccess } =
  attendanceSlice.actions;

export const selectAttendanceList = (state) => state.attendance.list;
export const selectAttendanceLoading = (state) => state.attendance.isLoading;
export const selectAttendanceSaving = (state) => state.attendance.isSaving;
export const selectAttendanceError = (state) => state.attendance.error;

export default attendanceSlice.reducer;