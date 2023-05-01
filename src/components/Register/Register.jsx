import React, { useContext, useState } from "react";

import Lottie from "lottie-react";
import registerAnimation from "../../../public/register/register1.json";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { handleRegisterWithEmail } = useContext(AuthContext);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const [accepted, setAccepted] = useState(false);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setUserError("");
    setUserSuccess("");
    if (password.length < 6) {
      return setUserError("Type at least six character");
    }
    if (password != confirm) {
      return setUserError("Password don't match");
    }
    handleRegisterWithEmail(email, password)
      .then((result) => {
        const signUpUser = result.user;
        setUserSuccess("You have registered successfully");
        console.log(signUpUser);
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setUserError(error.message);
      });
  };



  const handleChecked = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <div className="mx-16 mt-16 md:flex justify-center gap-5 h-80">
      <form
        onSubmit={handleRegister}
        className="w-full  md:w-2/4 shadow-2xl p-6"
      >
        <div className="mb-3">
          <div className="text-gray-600 font-bold">
            <label htmlFor="email">Email</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="email"
            name="email"
            placeholder="Email"
            required
            id="email"
          />
        </div>
        <div className="mb-3">
          <div className="text-gray-600 font-bold">
            <label htmlFor="password">Password</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="password"
            name="password"
            placeholder="Password"
            required
            id="password"
          />
        </div>
        <div className="mb-3">
          <div className="text-gray-600 font-bold">
            {" "}
            <label htmlFor="password">Confirm Password</label>
          </div>
          <input
            className="w-full border-2 px-2 rounded-md text-lg "
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            required
            id="confirm"
          />
          <p className="text-red-700">
            <small>{userError}</small>
          </p>
          <p className="text-green-700">
            <small>{userSuccess}</small>
          </p>
        </div>

        <div className="mb-3 flex gap-4">
          <div>
            <input
              onClick={handleChecked}
              className="me-3"
              type="checkbox"
              name="accept"
            />
            <label>Check Me!</label>
          </div>
          <p>
            <small className="font-bold">
              Already have an account ?{" "}
              <Link className="text-red-700" to="/login">
                Login
              </Link>
            </small>
          </p>
        </div>

        <button
          className="bg-amber-400 hover:bg-amber-600  duration-300 w-full font-semibold py-1 px-2 rounded-md text-center"
          disabled={!accepted}
        >
          Register
        </button>
      </form>
      <Lottie
        className="shadow-2xl"
        style={{ width: "full" }}
        animationData={registerAnimation}
      />
      ;
    </div>
  );
};

export default Register;
