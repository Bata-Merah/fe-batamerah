import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return(
        <div className="hover:bg-Neutral20 w-full  rounded-md font-semibold px-6 py-2 text-lg">
            <Link to={props.router}>
                <a>{props.textNav}</a>
            </Link>
        </div>
        
    )
    
}
export default Navigation