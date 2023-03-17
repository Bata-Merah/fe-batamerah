import Logo1 from '../../assets/Partnership/logo1.png'
import Logo2 from '../../assets/Partnership/logo2.png'
import Logo3 from '../../assets/Partnership/logo3.png'
import Logo4 from '../../assets/Partnership/logo4.png'
import Logo5 from '../../assets/Partnership/logo5.png'
const Partnership = () => {
    return(
        <div className='bg-Blue10'>
            <div className='flex justify-center items-center px-44 py-10 flex-wrap'>
            <img src={Logo1} className="mx-6 my-4"></img>
            <img src={Logo2} className="mx-6 my-4"></img>
            <img src={Logo3} className="mx-6 my-4"></img>
            <img src={Logo4} className="mx-6 my-4"></img>
            <img src={Logo5} className="mx-6 my-4"></img>
        </div>
        </div>
        
    )
}
export default Partnership