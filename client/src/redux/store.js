import { configureStore } from "@reduxjs/toolkit";
import TableReservationReducer from "./slices/TableReservationSlices";
import bookingReducer from "./slices/bookingSlice";

export default configureStore({
  reducer: {
    table: TableReservationReducer,
    booking: bookingReducer,
  },
});
