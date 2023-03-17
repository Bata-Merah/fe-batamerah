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
const NewPassword = () => {
    return (
        <>
            <div className="mx-24 my-">
                <NavbarAfter />

                <div className="border-2 border-black flex justify-center items-center mx-auto flex-col py-12 w-3/4 my-24">
                    <h1 className="font-bold text-3xl">Choose a new password</h1>
                    <p className="my-2 text-neutral100 font-semibold">Create a new password that is at least 8 characters long</p>
                    <form>
                        <div className="flex justify-start py-2">
                            <div className="w-48">
                                <h1 className="font-bold text-lg ">New Password</h1>
                            </div>

                            <input
                                type="password"
                                placeholder="***********"
                                className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                            ></input>
                        </div>

                        <div className="flex justify-start py-2">
                            <div className="w-48 pr-2">
                                <h1 className="font-bold text-lg ">Retype New Password</h1>
                            </div>

                            <input
                                type="password"
                                placeholder="***********"
                                className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                            ></input>
                        </div>
                        <div className="flex justify-center items-center">
                            <input type="checkbox" id="require"></input>
                            <label for="require" className="pl-2">Require  all devices to sign in with  new password</label>
                        </div> 
                        <div className="flex justify-center flex-row mt-10">
                            <ButtonWhite textButton="Back"/>
                            <Link to="/PasswordChanged" className="bg-gradient-to-r from-Blue90 to-Blue70 px-6 py-2 text-white rounded-full font-semibold text-xl mx-2">Submit</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default NewPassword;
