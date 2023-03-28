import SignUpPic from "../assets/SignUp.png";
import Logo3 from "../assets/Logo3.png";
import { Link } from "react-router-dom";
import Google from "../assets/Logo/Google.png";

const SignUp = () => {
  return (
    <div className="h-full flex">
      <img src={SignUpPic} className="h-full"></img>
      <div className="flex flex-col justify-center mx-auto w-1/2 px-24">
        <img src={Logo3} className="w-24 mb-2"></img>
        <h1 className="font-bold text-4xl">Sign Up</h1>
        <h3 className="my-4 text-2xl font-semibold">
          It's quick and easy.
        </h3>
        <form>
          <label for="name" className="font-bold text-xl mb-2">
            Name*
          </label>
          <br />
          <input
            type="text"
            placeholder="Andra Martinez"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>

          <label for="email" className="font-bold text-xl">
            Email*
          </label>
          <br />
          <input
            type="email"
            placeholder="andramartinez@gmail.com"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>

          <label for="password" className="font-bold text-xl">
            Password
          </label>
          <br />
          <input
            type="password"
            placeholder="*******"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>
          
          <label for="job" className="font-bold text-xl">
            Job Title*
          </label>
          <br />
          <input
            type="text"
            placeholder="Head Resource Development Manager"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>
          
          <label for="company" className="font-bold text-xl">
            Company*
          </label>
          <br />
          <input
            type="text"
            placeholder="Shopedia"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>

            <label for="phone" className="font-bold text-xl">
            Phone Number*
          </label>
          <br />
          <input
            type="text"
            placeholder="+62878569403333"
            className="rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg mb-2"
          ></input>

          <p className="text-md mt-6">By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
          <Link to="/StartupList"><button className="w-full mt-4 bg-Blue100 rounded-full text-white py-2 text-lg font-semibold">
            Sign Up
          </button></Link>
          
        </form>
        <Link
          to="/StartupList"
          className="w-full my-4 rounded-full text-black py-2 text-lg font-semibold border-2 border-black text-center flex items-center justify-center "
        >
          <img src={Google} className="px-2 w-10"></img>
          Sign Up with Google
        </Link>
        <p className="text-center font-semibold">
        Already have an account? 
          <Link to="/SignInView" className="text-Blue60 underline px-2">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignUp
