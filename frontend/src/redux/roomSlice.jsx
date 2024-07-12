import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "your_api_url";
const values = {};

export const getRooms = createAsyncThunk("getRooms", async () => {
  //Tüm odaların verilerinin çekileceği api ucu
  const res = await axios.post(API_URL, values);
  return res.data;
});
export const addToRoom = createAsyncThunk(
  "addToRoom",
  async (attributes, room_id, person_count) => {
    const values = {
      attributes: attributes,
      room_type_id: room_id,
      person_count: person_count,
    };
    const res = await axios.post(API_URL, values);
    return res.data;
  }
);

const getRoomsSlice = createSlice({
  name: "getRooms",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder;
    builder.addCase(getRooms.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
        error: false,
        isLoading: false,
      };
    });
    builder.addCase(getRooms.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
        isLoading: false,
      };
    });
    builder.addCase(addToRoom.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
    builder.addCase(addToRoom.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    builder.addCase(addToRoom.rejected, (state, action) => {
      return {
        ...state,
        error: action.error.message,
      };
    });
  },
});

export default getRoomsSlice.reducer;
