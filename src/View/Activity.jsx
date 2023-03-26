import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import DataTable from "../Components/Activity/DataTable";
const Activity = () => {
  return (
    <>
      <NavbarAfter />
      <div className="mx-24 py-12">
      <h1 className="font-bold text-4xl ">Activities</h1>

      <div className="border-2 w-full flex font-bold  text-xl rounded-full border-Blue60 my-8">
        <div className="bg-Blue60 w-1/2 text-center rounded-l-full text-white py-2">
            <Link >Your Interests</Link>
        </div>
        <div className=" hover:bg-Blue60 w-1/2 text-center rounded-full text-black py-2">
            <Link>Interests in You</Link>
        </div>
      </div>

      <div className="items-center flex justify-center">
        <DataTable />
      </div>
      </div>
      <Footer />
    </>
  );
};
export default Activity;
