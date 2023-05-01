import React from "react";
import { useLoaderData } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import Booking from "../Booking/Booking";

const CategoryDetails = () => {
  const categoryDetails = useLoaderData();
  const { image_url, details, rating, title } = categoryDetails;
  console.log(categoryDetails);

  return (
    <div className="flex justify-between mx-14">
      <div className="w-3/4" >
              {categoryDetails.map((categoryDetail) => (
           
                  <div className="mb-5 flex gap-3 h-28" key={categoryDetail._id}>
                     
                      <img className="w-52 object-cover  rounded-lg" src={categoryDetail.image_url} alt="" />
                      <div>
                          <h4 className="text-gray-600 font-semibold">{categoryDetail.title}</h4>
                          <p>{ categoryDetail.details}</p>
                      </div>
          </div>
        ))}
      </div>

      <div className="card w-1/4 glass">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
