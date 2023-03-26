import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to="/cardDetail">
      <div className="w-[38vh] shadow-2xl mx-8 my-8">
        <div className="bg-Neutral20 h-[44vh] rounded-t-3xl "></div>
        <div className="py-4 px-2">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="py-2">{props.description}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
