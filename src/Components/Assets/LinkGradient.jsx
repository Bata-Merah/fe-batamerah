import { Link } from "react-router-dom";
const LinkGradient = (props) => {
    return(
        <Link to={props.LinkTo} className="bg-gradient-to-r from-Blue90 to-Blue70 px-6 py-2 text-white rounded-full font-semibold text-lg">
            {props.TextLink}
        </Link>
    )
}

export default LinkGradient
