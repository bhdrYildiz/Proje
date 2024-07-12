import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "your_api_url";
const values = {};

export const getGlobalVariables = createAsyncThunk(
  "globalVariables/getGlobalVariables",
  async () => {
    const res = await axios.post(API_URL, values);
    return res.data;
  }
);
const getGeneralInfoSlice = createSlice({
  name: "globalVariables",
  initialState: {},
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getGlobalVariables.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(getGlobalVariables.pending, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getGlobalVariables.rejected, (state) => {
      return {
        ...state,
      };
    });
  },
});
export const {} = getGeneralInfoSlice.actions;
export default getGeneralInfoSlice.reducer;
