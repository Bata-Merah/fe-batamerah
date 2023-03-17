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
const ForgotPassword = () => {
    return (
        <>
            <div className="mx-24 my-">
                <NavbarAfter />
                
                <div className="border-2 border-black flex justify-center items-center mx-auto flex-col py-12 w-3/4 my-24">
                    <h1 className="font-bold text-3xl">Forgot Password?</h1>
                    <p className="my-2 text-neutral100 font-semibold">Reset password in two quick steps</p>
                    <form className="my-8">
                        <label for="email" className="font-bold text-xl">Email or Phone</label>
                        <input type="text" id="email" className="border-2 border-Neutral40 rounded-md mx-12 w-96 h-10"></input>
                        <div className="flex justify-center flex-row mt-10">
                            <ButtonWhite textButton="Back"/>
                            <Link to="/EmailCode" className="bg-gradient-to-r from-Blue90 to-Blue70 px-6 py-2 text-white rounded-full font-semibold text-xl mx-2">Forgot Password</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default ForgotPassword;
