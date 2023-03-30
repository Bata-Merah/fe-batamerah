import SignInPic from "../assets/SignInPic.png";
import Logo3 from "../assets/Logo3.png";
import { Link } from "react-router-dom";
import LinkGradient from "../Components/Assets/LinkGradient";

const SignInRole = () => {
  return (
    <div className="h-full flex">
      <img src={SignInPic} className="h-full"></img>
      <div className="flex flex-col justify-center mx-auto w-1/2 px-24">
        <img src={Logo3} className="w-24 mb-4"></img>
        <h1 className="font-bold text-6xl">Choose Your Role</h1>
        <h3 className="mb-4 mt-4 text-xl font-semibold">
          Welcome Back, please enter your details
        </h3>
        <div className="h-24 flex flex-col justify-between">
          <LinkGradient
            LinkTo="/SignInInvestor"
            TextLink="Sign In as Investor"
          />
          <LinkGradient
            LinkTo="/SignInBussiness"
            TextLink="Sign In as Business"
          />
        </div>
        <p className="text-center font-semibold mt-2">
          Need an account?
          <Link to="/SignUpView" className="text-Blue60 underline px-2">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignInRole;
