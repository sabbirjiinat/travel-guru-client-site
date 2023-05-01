import React from "react";
import { Link } from "react-router-dom";


const CategoryTravel = ({ category }) => {
  // console.log(category);
  const { thumbnail_url, name,id } = category;

  return (
    <Link to={`/booking/${id}`}>
      <div className="card relative card-compact w-56 h-72 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-72 object-cover rounded-lg "
          src={thumbnail_url}
          alt="Shoes"
        />
      </figure>
      <div className="absolute bottom-0 text-gray-200 font-bold pl-14">
        {name}
      </div>
    </div>
    </Link>
  );
};

export default CategoryTravel;
