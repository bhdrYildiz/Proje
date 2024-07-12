import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5062/api/";

const values = {
  //İstek boş yollanıcak ve rezervasyonların hepsini listeleyecek
};

export const getRezervations = createAsyncThunk(
  "rezervations/getRezervation",
  async () => {
    const res = await axios.get(`${API_URL}Booking/Details`);
    console.log(res.data);
    return res.data;
  }
);
export const getRezervationDetail = createAsyncThunk(
  "rezervations/getRezervationDetail",
  async (rezervation_id) => {
    const res = await axios.post(API_URL, values);
    return res.data;
  }
);
const getGeneralInfoSlice = createSlice({
  name: "rezervations",
  initialState: {},
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getRezervations.fulfilled, (state, action) => {
      return {
        ...state,
        rezervations: action.payload,
      };
    });
    builder.addCase(getRezervations.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: false,
      };
    });
    builder.addCase(getRezervations.rejected, (state) => {
      return {
        ...state,
        error: true,
      };
    });
    builder.addCase(getRezervationDetail.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(getRezervationDetail.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(getRezervationDetail.rejected, (state) => {
      return {
        ...state,
        error: true,
        loading: false,
      };
    });
  },
});
export const {} = getGeneralInfoSlice.actions;
export default getGeneralInfoSlice.reducer;
