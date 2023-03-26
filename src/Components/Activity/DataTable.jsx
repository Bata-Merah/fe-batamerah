import React from "react"

const DataTable = () => {
    return(
        <table className="w-full border-2 rounded-xl">
        <thead className="bg-Blue10 ">
            <tr className="font-semibold h-12 rounded-xl">
                <td scope="col" className="w-80 text-center">Company Name</td>
                <td scope="col" className="w-80 text-center">Co-Funder</td>
                <td scope="col" className="w-80 text-center">Connect Date</td>
                <td scope="col" className="w-80 text-center">Status</td>
            </tr>
        </thead>
        <tbody>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center">BrightHive</td>
                <td scope="col" className="w-80 text-center">Jason Wong and Emily Chen</td>
                <td scope="col" className="w-80 text-center">12 January 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-yellow-400 text-white px-6 py-2 rounded-full my-2">Berlangsung</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center">BrightHive</td>
                <td scope="col" className="w-80 text-center">Jason Wong and Emily Chen</td>
                <td scope="col" className="w-80 text-center">12 January 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-full my-2">Berhasil</button>
                </td>
            </tr>
            <tr className="font-semibold h-8 ">
                <td scope="col" className="w-80 text-center">BrightHive</td>
                <td scope="col" className="w-80 text-center">Jason Wong and Emily Chen</td>
                <td scope="col" className="w-80 text-center">12 January 2023</td>
                <td scope="col" className="w-80 text-center">
                    <button className="bg-red-600 text-white px-6 py-2 rounded-full my-2">Tidak Berhasil</button>
                </td>
            </tr>
        </tbody>
    </table>
    )
    
}
export default DataTable