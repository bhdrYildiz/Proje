import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "your_api_url";
const values = {
  //İstek boş yollanıcak ve rezervasyonların hepsini listeleyecek
};

export const getChannels = createAsyncThunk("channel/getChannels", async () => {
  const res = await axios.post(API_URL, values);
  return res.data;
});
export const addToChannel = createAsyncThunk(
  "channel/addToChannel",
  async (channel_id, channel_private_key) => {
    const res = await axios.post(API_URL, values);
    return res.data;
  }
);
const getGeneralInfoSlice = createSlice({
  name: "rezervations",
  initialState: {},
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getChannels.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addCase(getChannels.pending, (state) => {
      return {
        ...state,
      };
    });
    builder.addCase(getChannels.rejected, (state) => {
      return {
        ...state,
        error: true,
      };
    });
    builder.addCase(addToChannel.fulfilled, (state, action) => {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    });
    builder.addCase(addToChannel.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(addToChannel.rejected, (state) => {
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
