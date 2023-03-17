import React from "react";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import Navigation from "../Components/Profile/Navigation";
import ButtonNegative from "../Components/Assets/ButtonWarn";
import ButtonGeneral from "../Components/Assets/ButtonGeneral"
import HeaderProfile from "../Components/Profile/HeaderProfile"
import { Link } from "react-router-dom";
import photoProfileDummy from "../assets/photoProfileDummy.png";
import Footer from "../Components/Footer/Footer";
import ButtonWhite from "../Components/Assets/ButtonWhite";
import ButtonGradient from "../Components/Assets/ButtonGradient";
const EmailCode = () => {
    return (
        <>
            <div className="mx-24 my-">
                <NavbarAfter />
                
                <div className="border-2 border-black flex justify-center items-center mx-auto flex-col py-12 w-3/4 my-24">
                    <h1 className="font-bold text-3xl">We sent a code to your email</h1>
                    <p className="my-2 text-neutral100 font-semibold">Enter the 6-digit verification code sent to </p>
                    <p className="my-2 text-neutral100 font-bold">a***********z@gmail.com</p>
                    <form className="my-8">
                        <label for="email" className="font-bold text-xl">6 digit code</label>
                        <input type="text" id="email" className="border-2 border-Neutral40 rounded-md mx-12 w-96 h-10"></input><br/>
                        <p id="resend" className="pl-40">Resend Code</p>
                        <div className="flex justify-center flex-row mt-10">
                            <ButtonWhite textButton="Back"/>
                            <Link to="/NewPassword" className="bg-gradient-to-r from-Blue90 to-Blue70 px-6 py-2 text-white rounded-full font-semibold text-xl mx-2">Submit</Link>
                        </div>
                    </form>
                    <h3 className="text-Blue50 font-semibold text-lg">If you don’t see the email in your inbox, check your spam folder</h3>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default EmailCode;
