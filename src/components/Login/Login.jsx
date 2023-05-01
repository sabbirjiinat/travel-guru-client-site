import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Lottie from "lottie-react";
import { FaGoogle } from 'react-icons/fa';
import loginAnimation from '../../../public/login/login.json'
import googleLogo from '../../../src/assets/icons/google.png'

const Login = () => {
    const location = useLocation()
    const navigate =  useNavigate()
    console.log(location);
    const from = location.state?.from?.pathname || '/';
  const { handleLoginWithEmail,loginWithGoogle } = useContext(AuthContext);
  const [userError, setUserError] = useState(null);
  const [userSuccess, setUserSuccess] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setUserError("");
    setUserSuccess("");
    if (password.length < 6) {
      return setUserError("Type at least six character");
    }
  

    handleLoginWithEmail(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setUserSuccess("You have login successfully");
        console.log(loggedUser);
          form.reset();
          navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error);
        setUserError(error.message);
      });
    };
    
    const signWithGoogle = () => {
        loginWithGoogle()
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
    
          }).catch(error => {
          console.log(error);
        })
      }
  return (
    <div className="mx-16 mt-16 md:flex justify-center gap-5 h-80">
      <form onSubmit={handleLogin} className="w-full  md:w-2/4 shadow-2xl p-6">
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
          <p className="text-red-700">
            <small>{userError}</small>
          </p>
          <p className="text-green-700">
            <small>{userSuccess}</small>
          </p>
        </div>
        <p className="mb-3">
          <small className="font-bold ">
            New to travel guru ?{" "}
            <Link className="text-red-700" to="/register">
              Register
            </Link>
          </small>
        </p>

        <button className="bg-amber-400 hover:bg-amber-600 hover:text-white duration-500 w-full font-semibold py-1 px-2 rounded-md text-center mb-3">
          Login
              </button>
              <div className="border-2 rounded-lg ">
              
                  <button onClick={signWithGoogle} className="font-bold flex items-center gap-4 px-3 py-1 w-full">
                  <img className="h-5" src={googleLogo} alt="" />
                      Continue With Google</button>
           </div>
          </form>
          <Lottie
        className="shadow-2xl"
        style={{ width: "full" }}
        animationData={loginAnimation}
      />
    </div>
  );
};

export default Login;
