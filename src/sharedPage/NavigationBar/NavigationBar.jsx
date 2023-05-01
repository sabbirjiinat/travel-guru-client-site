import React, { useContext } from "react";
import logo from "../../../public/logo.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);
  const logout = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex space-x-16 py-3 justify-center items-center">
      <img className="h-8 text-white" src={logo} alt="" />
      <input
        className="border-gray-500 border-2 rounded px-2"
        type="search"
        name="search"
        placeholder="Search Your Destination"
        id=""
      />
      <NavLink to="/" className="text-blue-800 font-semibold">
        Home
      </NavLink>

      <NavLink to="/destination" className="text-blue-800 font-semibold">
        Destination
      </NavLink>

      <NavLink to="/contact" className="text-blue-800 font-semibold">
        Contact
      </NavLink>
      {user ? (
        <div className="flex items-center gap-2">
          <small>{user.email}</small>
          <button onClick={logout} className="bg-amber-500 px-3 py-1 rounded font-semibold">
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-amber-500 px-3 py-1 rounded font-semibold"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default NavigationBar;
