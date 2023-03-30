import React from "react";
import Footer from "../Components/Footer/Footer";
import LinkGradient from "../Components/Assets/LinkGradient";
import DescUser from "../Components/StartupList/DescUser";
import Investor from "../assets/Investor/Group 512242.png";
import NavbarInvestor from "../Components/Navbar/NavbarInvestor";
const InvestorDetail = (props) => {
  return (
    <>
      <NavbarInvestor />
        <div className="flex p-24 bg-Blue20 justify-center items-center">
          <img src={Investor} className="rounded-2xl" />
          <div className="ml-16">
          <div className="flex flex-row w-full text-lg 2">
            <div className="left">
              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Name</h1>
                <p>Giannis Antetokounmpo</p>
              </div>

              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Job Title</h1>
                <p>CEO</p>
              </div>

              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Phone Number</h1>
                <p>+6287867040333</p>
              </div>
            </div>
            <div className="right ml-28">
              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Age</h1>
                <p>48 Years Old</p>
              </div>

              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Company</h1>
                <p>SockCoin</p>
              </div>

              <div className="font-bold mb-6">
                <h1 className="text-Neutral60">Email</h1>
                <p>giannis_ant@gmail.com</p>
              </div>
            </div>
          </div>
       
          
      <p className="mb-6">Giannis Antetokoumpo is a 48-year-old CEO who resides in Greece and leads the company SockCoin. He is known for his entrepreneurial spirit and interest in investing in startups. With his experience and business acumen, Giannis has made a name for himself in the world of business, and his expertise is highly sought after. He is passionate about his work and strives to make a positive impact on the industry.</p>
      <LinkGradient LinkTo="/ActivityInvestor" TextLink="Connect"/>
      </div>
      </div>
      <Footer />
    </>
  );
};
export default InvestorDetail;
