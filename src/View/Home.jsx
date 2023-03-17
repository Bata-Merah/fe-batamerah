//Landing Page After Login 
import NavbarAfter from "../Components/Navbar/NavbarAfter"
import Hero from "../Components/Hero/Hero"
import Description from "../Components/Description/Description"
import Advantages from "../Components/Advantages/Advantages"
import Testimoni from "../Components/Testi/Testi";
import Partnership from "../Components/Partnership/Partnership";
import Footer from "../Components/Footer/Footer";

const Home = () => {
    return(
        <>
          <NavbarAfter />
          <Hero />
          <Description />
          <Advantages />
          <div className="flex justify-center items-center bg-Blue10 py-20">
          <Testimoni
            testi="Revolutionary platform connecting investors to innovative startups!"
            author="David Kim"
            job="Director of Human Resources at a tech company"
          />
          <Testimoni
            testi="Cutting-edge platform, limitless investment opportunities!"
            author="Sarah Patel"
            job="Lead Software Engineer at a tech startup"
          />
          <Testimoni
            testi="Discover the next big thing - invest in startups with ease on this platform!"
            author="Andrew Lee"
            job="Head of Product Management at a software company"
          />
        </div>
        <Partnership/>
        <Footer/>
        </>
    )
}
export default Home