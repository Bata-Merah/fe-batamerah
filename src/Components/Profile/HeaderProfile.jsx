import dummyCover from "../../assets/coverProfileDummy.png"
import ButtonWhite from "../../Components/Assets/ButtonWhite"
import ButtonGradient from "../../Components/Assets/ButtonGradient"
import photoProfileDummy from "../../assets/photoProfileDummy.png";
const HeaderProfile = (props) => {
    return (
        <div>
            <img src={dummyCover} className="max-w-fit"></img>
            <div className="flex flex-row justify-between py-6">
                <div className="">
                    <img
                        src={photoProfileDummy}
                        className="rounded-full absolute top-96 border-8 border-white"
                    ></img>
                </div>
                {/* detail */}
                <div className="">
                    <h2 className="text-xl font-bold">{props.headerDetails}</h2>
                    <p className="text-lg font-semibold text-Neutral40">
                        {props.headerDescription}
                    </p>
                </div>
                {/* button save */}
                <div className="">
                    <ButtonWhite textButton="Cancel" />
                    <ButtonGradient textButton="Save" router="/"/>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile
