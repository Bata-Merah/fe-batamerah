import React from "react";
import Footer from "../Components/Footer/Footer";
import NavbarAfter from "../Components/Navbar/NavbarAfter";
import YoutubeEmbeded from "../Components/Embeded/YoutubeEmbeded";
import profile from "../../src/assets/Mask group.png";
import LinkGradient from "../Components/Assets/LinkGradient";
import DescUser from "../Components/StartupList/DescUser";
const CardDetail = (props) => {
  return (
    <>
      <NavbarAfter />
      <div className="mx-24 py-12">
        <h1 className="font-bold text-4xl ">Helix Technologies</h1>
        <YoutubeEmbeded embedId="rokGy0huYEA" />
        <div className="flex flex-row">
          <div className="w-[60vh]">
            <div className="flex items-center mb-6">
              <img src={profile} />
              <div className="ml-4 font-bold text-xl">
                <h1>Harper Moe</h1>
                <h3 className="text-Neutral50">Founders</h3>
              </div>
            </div>
            <LinkGradient LinkTo="/" TextLink="Connect" />
          </div>
          <DescUser/>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default CardDetail;
