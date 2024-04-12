import React from "react";
import ReservationForm from "../components/core/TableReservationpage/ReservationForm";

const TableReservationPage = () => {
  return (
    <div className="w-10/12 m-auto mt-10">
      <div>
        <h1 className="font-philospher font-bold text-5xl text-center">
          Book A Table
        </h1>
        <p className="text-center w-1/2 m-auto">
          "Reserve your spot at our restaurant effortlessly. Book a table now
          for an unforgettable dining experience."
        </p>
      </div>
      <ReservationForm />
    </div>
  );
};

export default TableReservationPage;
