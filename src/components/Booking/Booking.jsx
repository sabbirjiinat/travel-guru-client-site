import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const [booking, setBooking] = useState(null);
  const [value, onChange] = useState(new Date());
  const [values, onChanges] = useState(new Date());
  const bookingTravel = useLoaderData();
//   console.log(bookingTravel);
  const { name, details, destination, origin,id } = bookingTravel;

  return (
    <div className="flex mx-16 gap-44 mt-16 items-center ">
      <div className="w-2/4">
        <h1 className="text-5xl  font-bold ">{name}</h1>
        <p className="text-gray-700">{details}</p>
      </div>
      <div className="bg-white shadow-lg rounded p-3">
        <h4 className="text-gray-500 font-semibold">Origin</h4>
        <h4 className="bg-slate-200 p-1 rounded-sm font-semibold">{origin}</h4>
        <h4 className="text-gray-500 font-semibold">Destination</h4>
        <h4 className="bg-slate-200 p-1 rounded-sm font-semibold">
          {destination}
        </h4>
        <div className="flex gap-3 py-1 pb-3">
          <div>
            <h4 className="text-gray-500 font-semibold">From</h4>
            <DatePicker onChange={onChange} value={value} />
          </div>
          <div>
            <h4 className="text-gray-500 font-semibold">To</h4>
            <DatePicker  onChange={onChanges} value={values} />
          </div>
        </div>
              <div  className="text-center bg-amber-400 px-2 py-1 rounded-sm">
              <Link to={`/travel/category/${id}`} className="  font-semibold ">Start Booking</Link>
       </div>
      </div>
    </div>
  );
};

export default Booking;
