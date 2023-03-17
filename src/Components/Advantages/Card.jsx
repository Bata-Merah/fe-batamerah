const Card = (props) => {
    return(
        <div className="w-[60vh] text-Blue100 shadow-2xl px-8 py-6 rounded-2xl h-48 mx-2">
            <h1 className="text-xl font-bold border-b-2 pb-2 border-Blue100">{props.title}</h1>
            <p className="pt-4">{props.description}</p>
        </div>
        
    )
}
export default Card