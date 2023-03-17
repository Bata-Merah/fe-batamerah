const ButtonWhite = (props) => {
    return(
        <button className="hover:bg-gradient-to-r hover:from-Blue90 hover:to-Blue70 border-2 border-black px-6 py-2 text-black rounded-full font-semibold text-xl mx-2 hover:border-none hover:text-white">
            {props.textButton}
        </button>
    )
}
export default ButtonWhite