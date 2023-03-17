const ButtonGradient = (props) => {
    return(
        <button className="bg-gradient-to-r from-Blue90 to-Blue70 px-6 py-2 text-white rounded-full font-semibold text-lg mx-2">
            {props.textButton}
        </button>
    )
}

export default ButtonGradient
