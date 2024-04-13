import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sendOTP, sendVerifyMail } from "../../services/apis";

export const sendOtp = createAsyncThunk("sendotp", async (email) => {
  const response = await sendOTP(email);
  return response;
});

export const verifyReservation = createAsyncThunk(
  "verification",
  async (payload) => {
    const response = await sendVerifyMail(payload);
    return response;
  }
);

const initialState = {
  data: null,
  success: false,
  message: "",
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(sendOtp.pending, (state, action) => {
      state.success = false;
    });
    builder.addCase(sendOtp.rejected, (state, action) => {
      state.success = false;
      state.data = null;
      state.message = response;
    });
    builder.addCase(sendOtp.fulfilled, (state, action) => {
      state.success = true;
      state.message = action?.payload?.message;
    });
    builder.addCase(verifyReservation.pending, (state, action) => {
      state.success = false;
    });
    builder.addCase(verifyReservation.fulfilled, (state, action) => {
      state.success = false;
      state.data = action?.payload?.data;
      state.message = action?.message;
    });
    builder.addCase(verifyReservation.rejected, (state, action) => {
      state.success = false;
      state.data = null;
      state.message = response;
    });
  },
});

export default tableSlice.reducer;
