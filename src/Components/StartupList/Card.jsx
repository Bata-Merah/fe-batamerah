import React from "react";
import { Link } from "react-router-dom";
import Build from "../../assets/build.jpg"; 
const Card = (props) => {
  return (
    <Link to="/cardDetail">
      <div className="w-[38vh] shadow-2xl mx-8 my-8">
        <div className="bg-white rounded-t-3xl rounded-b-2xl ">
          <img src={Build} className="rounded-t-3xl" />
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
