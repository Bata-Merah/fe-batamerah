import { Link } from "react-router-dom";
import Logo from '../../assets/LogoSeedFunder.png';
import LinkGradient from "../Assets/LinkGradient";
import LinkPlain from "../Assets/LinkPlain";
function Navbar(){
    return(
        <>
            <nav className="flex items-center justify-between py-4 px-16">
            <div className="flex items-center">
                <img src={Logo}></img>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-bold mx-16">
                <div className="lg:flex-grow text-md">
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">How It Works</Link>
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">Services</Link>
                <Link to="#" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">About</Link>
                </div>
            </div>
            <div>
                <LinkPlain TextLink="Sign In" LinkTo="/SignInRole"/>
                <LinkGradient TextLink="Sign Up"LinkTo="/SignUpView"/>
            </div>
        </nav>

        </>
        
    )
}
export default Navbar