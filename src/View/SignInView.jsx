import SignInPic from "../assets/SignInPic.png";
import Logo3 from "../assets/Logo3.png";
import { Link, useNavigate } from "react-router-dom";
import Google from "../assets/Logo/Google.png";
import React, { useEffect, useRef, useState } from "react";
import AuthService from "../Components/Auth/AuthService";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault(); 
    try {
      await AuthService.login(username, password).then(
        ()=> {
            navigate("/StartupList");
            window.location.reload();
        },
        (error) => {
            console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-full flex">
      <img src={SignInPic} className="h-full"></img>
      <div className="flex flex-col justify-center mx-auto w-1/2 px-24">
        <img src={Logo3} className="w-24 mb-4"></img>
        <h1 className="font-bold text-6xl">Sign In</h1>
        <h3 className="mb-4 mt-4 text-xl font-semibold">
          Welcome Back, please enter your details
        </h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username" className="font-bold text-xl">
            username
          </label>
          <br />
          <input
            type="text"
            placeholder="andramartinez"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          ></input>
          <br />
          <label htmlFor="password" className="font-bold text-xl">
            Password
          </label>
          <br />
          <input
            type="password"
            placeholder="*****"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          ></input>
          <button
            type="submit"
            className="w-full mt-4 bg-Blue100 rounded-full text-white py-2 text-lg font-semibold"
          >
            Sign In
          </button>
        </form>
        <Link
          to="/"
          className="w-full my-4 rounded-full text-black py-2 text-lg font-semibold border-2 border-black text-center flex items-center justify-center "
        >
          <img src={Google} className="px-2 w-10"></img>
          Sign In with Google
        </Link>
        <p className="text-center font-semibold">
          Need an account?
          <Link to="/SignUpView" className="text-Blue60 underline px-2">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;
