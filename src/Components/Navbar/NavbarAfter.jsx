import { Link } from "react-router-dom";
import Logo from '../../assets/LogoSeedFunder.png';
import Setting from '../../assets/Logo/fi-ss-settings.png'
import Bell from '../../assets/Logo/fi-ss-bell.png'
import Profile from '../../assets/Logo/Mask group.png'

function NavbarAfter(){
    return(
        <>
            <nav className="flex items-center justify-between py-4 px-16">
            <div className="flex items-center">
                <img src={Logo}></img>
            </div>
            {/* <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
                </button>
            </div> */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-bold mx-16">
                <div className="lg:flex-grow text-md">
                <Link to="/Home" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">About Us</Link>
                <Link to="/StartupList" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">Startup List</Link>
                <Link to="/Activity" className="block mt-4 lg:inline-block lg:mt-0 text-black mx-10">Activity</Link>
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
export default NavbarAfter