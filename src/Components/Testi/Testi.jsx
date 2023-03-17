const testi = (props) => {
    return(
            <div className="w-1/4 mx-10">
                <h1 className="text-4xl text-Blue100 font-bold">“”</h1>
                <h2 className="text-xl text-Blue100 font-bold">{props.testi}</h2>
                <div className="mt-6 font-bold">
                    <h3 className=" text-Blue100">{props.author}</h3>
                    <h4 className="text-Blue50 text-sm">{props.job}</h4>
                </div>
            </div>
        
    )
}
export default testi