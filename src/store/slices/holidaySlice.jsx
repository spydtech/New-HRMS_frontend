import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { holidaysAPI } from "../../services/api";

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

export const fetchHolidays = createAsyncThunk(
  "holidays/fetchAll",
  async (params = {}, { rejectWithValue }) => {
    try {
      const res = await holidaysAPI.getAll(params);
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch holidays"));
    }
  }
);

export const createHoliday = createAsyncThunk(
  "holidays/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await holidaysAPI.create(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to create holiday"));
    }
  }
);

export const updateHoliday = createAsyncThunk(
  "holidays/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await holidaysAPI.update(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to update holiday"));
    }
  }
);

export const deleteHoliday = createAsyncThunk(
  "holidays/delete",
  async (id, { rejectWithValue }) => {
    try {
      await holidaysAPI.remove(id);
      return id;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to delete holiday"));
    }
  }
);

const holidaySlice = createSlice({
  name: "holidays",
  initialState: {
    list: [],
    isLoading: false,
    isSaving: false,
    error: null,
    success: null,
  },
  reducers: {
    clearHolidayError: (state) => { state.error = null; },
    clearHolidaySuccess: (state) => { state.success = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHolidays.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHolidays.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchHolidays.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createHoliday.pending, (state) => { state.isSaving = true; })
      .addCase(createHoliday.fulfilled, (state, action) => {
        state.isSaving = false;
        state.list = [...state.list, action.payload].sort(
          (a, b) => new Date(a.date) - new Date(b.date)
        );
        state.success = "Holiday added";
      })
      .addCase(createHoliday.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload;
      })

      .addCase(updateHoliday.fulfilled, (state, action) => {
        state.list = state.list
          .map((h) => (h.id === action.payload.id ? action.payload : h))
          .sort((a, b) => new Date(a.date) - new Date(b.date));
        state.success = "Holiday updated";
      })
      .addCase(updateHoliday.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteHoliday.fulfilled, (state, action) => {
        state.list = state.list.filter((h) => h.id !== action.payload);
        state.success = "Holiday deleted";
      })
      .addCase(deleteHoliday.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearHolidayError, clearHolidaySuccess } = holidaySlice.actions;

export const selectHolidays = (state) => state.holidays.list;
export const selectHolidaysLoading = (state) => state.holidays.isLoading;
export const selectHolidaysSaving = (state) => state.holidays.isSaving;

export default holidaySlice.reducer;