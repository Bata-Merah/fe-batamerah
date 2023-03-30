import React from "react"
import Investor from "../../assets/Mask group.png";
const DataTableInvestor = () => {
    return(
        <table className="w-full border-2 rounded-xl">
        <thead className="bg-Blue10 ">
            <tr className="font-semibold h-12 rounded-xl">
                <td scope="col" className="w-80 text-center">Photo Profile</td>
                <td scope="col" className="w-80 text-center">Investor Name</td>
                <td scope="col" className="w-80 text-center">Connect Date</td>
                <td scope="col" className="w-80 text-center">Status</td>
            </tr>
        </thead>
        <tbody>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center items-center flex justify-center">
                    <img src={Investor} className="w-12 py-2"/>
                </td>
                <td scope="col" className="w-80 text-center ">Emilie Clark</td>
                <td scope="col" className="w-80 text-center">12 December 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-yellow-400 text-white px-6 py-2 rounded-full my-2">Berlangsung</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center items-center flex justify-center">
                    <img src={Investor} className="w-12 py-2"/>
                </td>
                <td scope="col" className="w-80 text-center ">Emma Chan</td>
                <td scope="col" className="w-80 text-center">13 October 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full my-2">Berhasil</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center items-center flex justify-center">
                    <img src={Investor} className="w-12 py-2"/>
                </td>
                <td scope="col" className="w-80 text-center ">Kobe James</td>
                <td scope="col" className="w-80 text-center">12 December 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full my-2">Tidak Berlangsung</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center items-center flex justify-center">
                    <img src={Investor} className="w-12 py-2"/>
                </td>
                <td scope="col" className="w-80 text-center ">Chris Leonard</td>
                <td scope="col" className="w-80 text-center">12 Januarry 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full my-2">Tidak Berlangsung</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center items-center flex justify-center">
                    <img src={Investor} className="w-12 py-2"/>
                </td>
                <td scope="col" className="w-80 text-center ">Cristiano Ronaldo</td>
                <td scope="col" className="w-80 text-center">19 December 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full my-2">Tidak Berlangsung</button>
                </td>
            </tr>
        </tbody>
    </table>
    )
    
}
export default DataTableInvestor