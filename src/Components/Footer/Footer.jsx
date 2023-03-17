import Facebook from '../../assets/Logo/ic_baseline-facebook.png'
import Instagram from '../../assets/Logo/basil_instagram-solid.png'
import Twitter from '../../assets/Logo/ant-design_twitter-circle-filled.png'
import Youtube from '../../assets/Logo/mdi_youtube.png'
import { Link } from "react-router-dom";
import Logo2 from '../../assets/Logo2.png';

const Footer = () => {
    return(
        <div className="bg-Blue100 ">
            <div className="flex items-center justify-end py-6 border-b-2 border-Blue20">
                <h4 className="text-white font-bold tracking-widest">Follow Us</h4>
                <img src={Facebook} className="px-6"></img>
                <img src={Instagram} className="px-6"></img>
                <img src={Twitter} className="px-6"></img>
                <img src={Youtube} className="px-6"></img>
            </div>
            <div className='flex justify-start text-white font-semibold py-10'>
                 <div className='flex flex-col mx-24'>
                    <Link to="/" className='py-2'>SeedFunder Business</Link>
                    <Link to="/" className='py-2'>Get the app</Link>
                    <Link to="/" className='py-2'>Investors</Link>
                 </div>
                 <div className='flex flex-col mx-12'>
                    <Link to="/" className='py-2'>Blog</Link>
                    <Link to="/" className='py-2'>Help</Link>
                    <Link to="/" className='py-2'>Accessibility statement</Link>
                 </div>
                 <div className='flex flex-col mx-12'>
                    <Link to="/" className='py-2'>Terms</Link>
                    <Link to="/" className='py-2'>Privacy policy and cookie policy </Link>
                    <Link to="/" className='py-2'>Sitemap</Link>
                    <Link to="/" className='py-2'>Featured topics</Link>
                 </div>
            </div>
            <div className='flex justify-between items-center mx-24 py-10'>
                <img src={Logo2}></img>
                <h1 className='text-white font-bold'>@ 2023 Bata Merah, Inc.</h1>
            </div> 
        </div>
    )
}
export default Footer