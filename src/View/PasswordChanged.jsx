import React from "react";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import Footer from "../Components/Footer/Footer";
import LinkGradient from "../../src/Components/Assets/LinkGradient";
const PasswordChanged = () => {
    return (
        <>
            <div className="mx-24 my-">
                <NavbarAfter />
                <div className="border-2 border-black flex justify-center items-center mx-auto flex-col py-12 w-3/4 my-24">
                    <h1 className="font-bold text-2xl mb-4">Your password has been changed</h1>
                    <LinkGradient TextLink="Go to Seed Funder" LinkTo="/Home"/>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default PasswordChanged;
