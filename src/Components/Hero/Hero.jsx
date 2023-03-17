import HeroPic from "../../assets/LandingPage/Hero.png"
import LinkGradient from "../Assets/LinkGradient";

function Hero(){
    return(
        <div className="bg-Blue10 flex justify-center items-center py-20">
            <div className="left w-1/2 mr-12">
                <h1 className="font-bold text-5xl"><span className="bg-Blue20 px-2">Invest</span> in The Future and Support Innovation Invest in Startups Today!</h1>
                <p className="text-lg mt-6 mb-4">Investing in startups can potentially offer high returns on investment, access to innovative ideas, and the satisfaction of supporting entrepreneurial ventures.</p>
                <LinkGradient TextLink="Get Started"/>
            </div>
            <div className="right items-center w-96">
                <img src={HeroPic}></img>
            </div>
        </div>
        
    )
}
export default Hero