import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { leavesAPI } from "../../services/api";

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

export const fetchLeaveTypes = createAsyncThunk(
  "leaves/fetchTypes",
  async (_, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.getTypes();
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch leave types"));
    }
  }
);

export const updateLeaveType = createAsyncThunk(
  "leaves/updateType",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.updateType(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to update leave type"));
    }
  }
);

export const applyLeave = createAsyncThunk(
  "leaves/apply",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.apply(payload);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to apply for leave"));
    }
  }
);

export const fetchMyLeaves = createAsyncThunk(
  "leaves/fetchMy",
  async (_, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.myLeaves();
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch your leaves"));
    }
  }
);

export const fetchAllLeaves = createAsyncThunk(
  "leaves/fetchAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.allLeaves(params);
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch leaves"));
    }
  }
);

export const approveLeave = createAsyncThunk(
  "leaves/approve",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.approve(id, { comment });
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to approve"));
    }
  }
);

export const rejectLeave = createAsyncThunk(
  "leaves/reject",
  async ({ id, comment }, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.reject(id, { comment });
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to reject"));
    }
  }
);

export const fetchMyBalance = createAsyncThunk(
  "leaves/fetchMyBalance",
  async (_, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.myBalance();
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch balance"));
    }
  }
);

export const fetchAllBalances = createAsyncThunk(
  "leaves/fetchAllBalances",
  async (_, { rejectWithValue }) => {
    try {
      const res = await leavesAPI.allBalances();
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch balances"));
    }
  }
);

const leaveSlice = createSlice({
  name: "leaves",
  initialState: {
    types: [],
    myLeaves: [],
    allLeaves: [],
    myBalance: null,
    allBalances: [],
    isLoading: false,
    isSaving: false,
    error: null,
    success: null,
  },
  reducers: {
    clearLeaveError: (state) => { state.error = null; },
    clearLeaveSuccess: (state) => { state.success = null; },
  },
  extraReducers: (builder) => {
    const setList = (key) => (state, action) => {
      state.isLoading = false;
      state[key] = action.payload;
    };

    builder
      .addCase(fetchLeaveTypes.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchLeaveTypes.fulfilled, setList("types"))
      .addCase(fetchLeaveTypes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateLeaveType.fulfilled, (state, action) => {
        state.types = state.types.map((t) =>
          t.id === action.payload.id ? action.payload : t
        );
        state.success = "Leave rule updated";
      })

      .addCase(fetchMyLeaves.fulfilled, setList("myLeaves"))
      .addCase(fetchAllLeaves.fulfilled, setList("allLeaves"))

      .addCase(applyLeave.pending, (state) => { state.isSaving = true; })
      .addCase(applyLeave.fulfilled, (state, action) => {
        state.isSaving = false;
        state.myLeaves = [action.payload, ...state.myLeaves];
        state.success = "Leave applied";
      })
      .addCase(applyLeave.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload;
      })

      .addCase(approveLeave.fulfilled, (state, action) => {
        state.allLeaves = state.allLeaves.map((l) =>
          l.id === action.payload.id ? action.payload : l
        );
        state.success = "Leave approved";
      })
      .addCase(rejectLeave.fulfilled, (state, action) => {
        state.allLeaves = state.allLeaves.map((l) =>
          l.id === action.payload.id ? action.payload : l
        );
        state.success = "Leave rejected";
      })

      .addCase(fetchMyBalance.fulfilled, (state, action) => {
        state.myBalance = action.payload;
      })
      .addCase(fetchAllBalances.fulfilled, (state, action) => {
        state.allBalances = action.payload;
      });
  },
});

export const { clearLeaveError, clearLeaveSuccess } = leaveSlice.actions;

export const selectLeaveTypes = (state) => state.leaves.types;
export const selectMyLeaves = (state) => state.leaves.myLeaves;
export const selectAllLeaves = (state) => state.leaves.allLeaves;
export const selectMyBalance = (state) => state.leaves.myBalance;
export const selectAllBalances = (state) => state.leaves.allBalances;
export const selectLeavesLoading = (state) => state.leaves.isLoading;

export default leaveSlice.reducer;