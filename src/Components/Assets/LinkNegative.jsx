import { Link } from "react-router-dom";
const LinkNegative = (props) => {
    return(
        <Link to={props.LinkTo} className="bg-Negative2 px-6 py-2 text-white rounded-full font-semibold text-lg w-auto">
            {props.TextLink}
        </Link>
    )
}

export default LinkNegative
