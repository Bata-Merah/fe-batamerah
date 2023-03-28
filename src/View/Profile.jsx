import React from "react";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import Navigation from "../Components/Profile/Navigation";
import ButtonNegative from "../Components/Assets/ButtonWarn";
import ButtonGeneral from "../Components/Assets/ButtonGeneral"
import HeaderProfile from "../Components/Profile/HeaderProfile"
import photoProfileDummy from "../assets/photoProfileDummy.png";
import Footer from "../Components/Footer/Footer";

const Profile = () => {
    return (
        <>
        <NavbarAfter />
            <div className="mx-24">
                
                <h1 className="font-bold text-3xl py-8 border-b-2">Settings</h1>
                <div className="flex justify-start my-10">
                    <div className="flex flex-col w-[100vh] px-10 my-6">
                        <Navigation textNav="My Details" router="Detail"/>
                        <Navigation textNav="Change Password" router="ChangePassword"/>
                        {/* <Navigation textNav="Change Email" router="ChangeEmail"/> */}
                    </div>
                    <div className="flex flex-col justify-start">
                        <HeaderProfile headerDetails="My Details" headerDescription="Update your photo and personal details."/>
                        {/* <ButtonGradient textButton="Save"/> */}
                        <form>
                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">Name</h1>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Andra Martinez"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>

                            <div className="flex justify-between border-b-2 py-8">
                                <div className=" flex justify-center">
                                    <div className="w-48">
                                        <h1 className="font-bold text-lg ">Your Name</h1>
                                        <p>This will be displayed on your profile</p>
                                    </div>
                                    <div className="w-24">
                                        <img
                                            src={photoProfileDummy}
                                            className="rounded-full border-8 border-white"
                                        ></img>
                                    </div>
                                </div>
                                <div>
                                    <ButtonGeneral textButton="Delete" />
                                    <ButtonGeneral textButton="Update" />
                                </div>
                            </div>

                            <div className="flex justify-between border-b-2 py-8">
                                <div className=" flex justify-center">
                                    <div className="w-48">
                                        <h1 className="font-bold text-lg ">Your Bio</h1>
                                        <p>Write a short introduction</p>
                                    </div>
                                    <div className="w-24">
                                        <textarea className="border-2 border-Neutral40" cols="70" rows="8">

                                        </textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">Job Title</h1>
                                </div>
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        placeholder="Head Resource Development Manager"
                                        className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                    ></input>

                                </div>
                            </div>

                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">Company</h1>
                                </div>

                                <input
                                    type="text"
                                    placeholder="Shopedia"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>

                            <div className="flex justify-start border-b-2 py-8">
                                <div className="w-48">
                                    <h1 className="font-bold text-lg ">Phone Number</h1>
                                </div>

                                <input
                                    type="number"
                                    placeholder="0878569403333"
                                    className="border-2 border-Neutral40 py-2 w-[80vh] pl-2 rounded-md "
                                ></input>
                            </div>
                            <div className="flex justify-end w-full my-10">
                                <ButtonNegative textButton="Logout"/>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};
export default Profile;
