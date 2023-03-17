import { Link } from "react-router-dom";
const LinkPlain = (props) => {
    return(
        <Link to={props.LinkTo}  className="hover:bg-gradient-to-r hover:from-Blue90 hover:to-Blue70 px-6 py-2 hover:text-white text-black rounded-full font-semibold text-lg mx-2">
            {props.TextLink}
        </Link>
    )
}

export default LinkPlain
