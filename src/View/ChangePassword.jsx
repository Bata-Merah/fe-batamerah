import React from "react";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import { Link } from "react-router-dom";
import Navigation from "../Components/Profile/Navigation";
import ButtonNegative from "../Components/Assets/ButtonWarn";
import ButtonGeneral from "../Components/Assets/ButtonGeneral"
import HeaderProfile from "../Components/Profile/HeaderProfile"
import photoProfileDummy from "../assets/photoProfileDummy.png";
import Footer from "../Components/Footer/Footer";
const ChangePassword = () => {
    return (
        <>
            <div className="mx-24">
                <NavbarAfter />
                <h1 className="font-bold text-3xl py-8 border-b-2">Settings</h1>
                <div className="flex justify-start my-10">
                    <div className="flex flex-col w-[100vh] px-8 my-6">
                        <Navigation textNav="My Details" router="Detail"/>
                        <Navigation textNav="Change Password" router="ChangePassword"/>
                        {/* <Navigation textNav="Change Email" router="ChangeEmail"/> */}
                    </div>
                    <div className="flex flex-col justify-start">
                        <HeaderProfile headerDetails="My Details" headerDescription="Update your photo and personal details."/>
                        <form>
                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">Current Password</h1>
                                </div>

                                <input
                                    type="password"
                                    placeholder="***********"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>
                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">New Password</h1>
                                </div>

                                <input
                                    type="password"
                                    placeholder="***********"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>

                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48 pr-2">
                                    <h1 className="font-bold text-lg ">Retype New Password</h1>
                                </div>

                                <input
                                    type="password"
                                    placeholder="***********"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>


                        </form>
                        <Link to="/ForgotPassword" className="text-Neutral40 font-semibold py-4">Forgot Password</Link>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default ChangePassword;
