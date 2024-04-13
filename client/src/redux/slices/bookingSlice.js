import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.bookings = (action.payload);
    },
  },
});

export const { addBooking } = bookingSlice.actions;

export default bookingSlice.reducer;