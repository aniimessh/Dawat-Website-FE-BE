import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtpInput from "react-otp-input";
import { verifyReservation } from "../../../redux/slices/TableReservationSlices";
import toast from "react-hot-toast";

const ConfirmationModal = () => {
  const [otp, setOtp] = useState("");
  const { bookings } = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const verifyTableReservation = async (e) => {
    e.preventDefault();
    const { bookingDate, bookingTime, username, useremail, numberOfPerson } =
      bookings;
    const finalPayload = {
      bookingDate: bookingDate,
      bookingTime: bookingTime,
      username: username,
      useremail: useremail,
      numberOfPerson: numberOfPerson,
      otp: otp,
    };
    const response = await dispatch(verifyReservation(finalPayload, otp));
    if (response?.payload?.data?.message) {
      toast.success(response.payload.data.message);
    }
  };
  return (
    <div>
      <form
        onSubmit={verifyTableReservation}
        className="border rounded-lg p-5 bg-white"
      >
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => (
            <input
              {...props}
              placeholder="-"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[48px] text-white lg:w-[60px] border-0 bg-red-800 rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2 focus:outline-yellow-50"
            />
          )}
          containerStyle={{
            justifyContent: "space-between",
            gap: "0 6px",
          }}
        />
        <button
          type="submit"
          className="w-full bg-red-500 py-[12px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900"
        >
          Verify Email
        </button>
      </form>
    </div>
  );
};

export default ConfirmationModal;
