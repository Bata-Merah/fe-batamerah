import React, { useState, useEffect } from "react";
import NavbarInvestor from "../Components/Navbar/NavbarInvestor";
import ButtonGradient from "../Components/Assets/ButtonGradient";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import CardInvestor from "../Components/InvestorList/CardInvestor";
import axios from "axios";

const InvestorList = () => {
  const [lists, setLists] = useState([]);
  axios
    .get("http://localhost:3000/investor",{
      headers : {
        'auth-token' : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJ1c2VyIiwiaWF0IjoxNjc4NjkxMjY1fQ.db77MdKBk9J0-C0roE7WVPOQUrG9Eb43pS_dsgEg-iE"
      }
    })
    .then((response) => {
      setLists(response.data);
      // console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
    {/* {console.log(lists)} */}
      <NavbarInvestor />
      <div className="my-12 mx-24 rounded-2xl text-black text-4xl font-bold ">
        <h1>Investor List</h1>
      </div>

      <div className="search mx-24">
        <form>
          <input
            type="text"
            placeholder="Search here..."
            className="border-2 border-gray-500 w-8/12 py-2 pl-2 rounded-md"
          />
          <ButtonGradient textButton="Search"></ButtonGradient>
        </form>
      </div>

      <div className="mx-24 py-10">
        <Link to="/" className="text-xl text-Blue80 font-semibold">
          All
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Food and Beverage
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Agriculture
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Property
        </Link>
        <Link to="/" className="text-xl text-Blue40 font-semibold ml-8">
          Other
        </Link>
      </div>

      <div className="justify-center items-center flex flex-wrap">
        {lists.map((list)=>(
          <CardInvestor title={list.namaInvestor} key={list.namaStartup}/>
        ))}
      </div>
      <Footer />
    </>
  );
};
export default InvestorList;
