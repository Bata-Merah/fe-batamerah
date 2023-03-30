import { Link } from "react-router-dom";
import Logo from '../../assets/logo4.png';
import Setting from '../../assets/Logo/fi-ss-settings-white.png'
import Bell from '../../assets/Logo/fi-ss-bell-white.png'
import Profile from '../../assets/Logo/Mask group2.png'

function NavbarInvestor(){
    return(
        <>
            <nav className="flex items-center justify-between py-4 px-16 bg-Blue70">
            <div className="flex items-center">
                <img src={Logo}></img>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-bold mx-16 ">
                <div className="lg:flex-grow text-md">
                <Link to="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-white mx-10">About Us</Link>
                <Link to="/InvestorList" className="block mt-4 lg:inline-block lg:mt-0 text-white mx-10">Investor List</Link>
                <Link to="/Activity" className="block mt-4 lg:inline-block lg:mt-0 text-white mx-10">Activity</Link>
                </div>
            </div>
            <div className="flex items-center">
                <Link to="/SignInView" >
                    <img src={Setting} className="mx-6 w-6"></img>
                </Link>
                <Link to="/SignInView">
                    <img src={Bell} className="mx-6 w-6"></img>
                </Link>
                <Link to="/Profile">
                    <img src={Profile} className="mx-6 w-12"></img>
                </Link>

            </div>
        </nav>

        </>
        
    )
}
export default NavbarInvestor