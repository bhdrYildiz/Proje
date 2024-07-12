import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://localhost:7125/api/";

export const SignIn = createAsyncThunk("auth/Login", async (values) => {
  try {
    const res = await axios.post(`${API_URL}Login/Login`, {
      email: values.email,
      password: values.password,
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    throw error;
  }
});

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    login: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(SignIn.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
        state.error = null;
      })
      .addCase(SignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default LoginSlice.reducer;
