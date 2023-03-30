import React from "react";
import { Link } from "react-router-dom";
import Investor from "../../assets/Investor/Group 512242.png"; 
const Card = (props) => {
  return (
    <Link to="/InvestorDetail">
      <div className="w-[38vh] shadow-2xl mx-8 my-8">
        <div className="bg-white rounded-t-3xl rounded-b-2xl ">
            <img src={Investor} className="rounded-t-3xl"/>
            <div className="py-4 px-2">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="py-2">{props.description}</p>
        </div>
        </div>
        
      </div>
    </Link>
  );
};
export default Card;
