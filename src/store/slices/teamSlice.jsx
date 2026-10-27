import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { teamsAPI } from "../../services/api";

const extractError = (error, fallback = "Request failed.") => {
  if (typeof error === "string") return error;
  const detail = error?.response?.data?.detail;
  if (Array.isArray(detail)) {
    return detail
      .map(
        (e) =>
          `${(e.loc || []).filter((x) => x !== "body").join(".")}: ${e.msg}`
      )
      .join(" | ");
  }
  return detail || error?.response?.data?.message || error?.message || fallback;
};

export const fetchTeams = createAsyncThunk(
  "teams/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await teamsAPI.getAll();
      return Array.isArray(res.data) ? res.data : [];
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to fetch teams"));
    }
  }
);

export const createTeam = createAsyncThunk(
  "teams/create",
  async (data, { rejectWithValue }) => {
    try {
      const res = await teamsAPI.create(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to create team"));
    }
  }
);

export const updateTeam = createAsyncThunk(
  "teams/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await teamsAPI.update(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to update team"));
    }
  }
);

export const deleteTeam = createAsyncThunk(
  "teams/delete",
  async (id, { rejectWithValue }) => {
    try {
      await teamsAPI.remove(id);
      return id;
    } catch (err) {
      return rejectWithValue(extractError(err, "Failed to delete team"));
    }
  }
);

const teamSlice = createSlice({
  name: "teams",
  initialState: { list: [], isLoading: false, isSaving: false, error: null },
  reducers: {
    clearTeamError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createTeam.pending, (state) => {
        state.isSaving = true;
      })
      .addCase(createTeam.fulfilled, (state, action) => {
        state.isSaving = false;
        state.list = [...state.list, action.payload].sort((a, b) =>
          (a.teamName || "").localeCompare(b.teamName || "")
        );
      })
      .addCase(createTeam.rejected, (state, action) => {
        state.isSaving = false;
        state.error = action.payload;
      })

      .addCase(updateTeam.fulfilled, (state, action) => {
        state.list = state.list.map((t) =>
          t.id === action.payload.id ? action.payload : t
        );
      })

      .addCase(deleteTeam.fulfilled, (state, action) => {
        state.list = state.list.filter((t) => t.id !== action.payload);
      });
  },
});

export const { clearTeamError } = teamSlice.actions;

export const selectTeams = (state) => state.teams.list;
export const selectTeamsLoading = (state) => state.teams.isLoading;
export const selectTeamsSaving = (state) => state.teams.isSaving;

export default teamSlice.reducer;