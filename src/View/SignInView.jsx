import SignInPic from '../assets/SignInPic.png'
import Logo3 from '../assets/Logo3.png'
import { Link } from "react-router-dom";
import Google from '../assets/Logo/Google.png'
const SignIn = () => {
    return(
        <div className='h-full flex'>
            <img src={SignInPic} className="h-full"></img>
            <div className='flex flex-col justify-center mx-auto w-1/2 px-24'>
                <img src={Logo3} className="w-24 mb-4"></img>
                <h1 className='font-bold text-6xl'>Sign In</h1>
                <h3 className='mb-4 mt-4 text-xl font-semibold'>Welcome Back, please enter your details</h3>
                <form>
                    <label for="email" className='font-bold text-xl'>Email</label><br/>
                    <input type="email" placeholder='andramartinez@gmail.com' className='rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg'></input>
                    <br/>
                    <label for="password" className='font-bold text-xl'>Password</label><br/>
                    <input type="password" placeholder='*****' className='rounded-md px-2 py-1 border-2 w-full flex justify-start border-black text-lg'></input>
                    <Link to="/Home">
                        <button className='w-full mt-4 bg-Blue100 rounded-full text-white py-2 text-lg font-semibold'>Sign In</button>
                    </Link>
                    
                    
                </form>
                <Link to="/" className='w-full my-4 rounded-full text-black py-2 text-lg font-semibold border-2 border-black text-center flex items-center justify-center '>
                    <img src={Google} className="px-2 w-10"></img>
                    Sign In with Google
                </Link>
                <p className='text-center font-semibold'>Need an account? 
                    <Link to="/SignUpView" className='text-Blue60 underline px-2'>Create account</Link>
                </p>
            </div>
        </div>
    )
}
export default SignIn