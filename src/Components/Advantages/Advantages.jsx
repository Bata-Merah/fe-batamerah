import Card from './Card'
const ToolsAdvantages = () => {
    return(
        <div className="flex justify-center items-center flex-col py-24">
            <h1 className="text-4xl text-Blue100 font-bold">Tools Advantages</h1>
            <h3 className="font-bold text-Blue100 text-lg my-4">Here are some of benefits for you</h3>
            <div className='flex justify-between items-center'>
                <Card title = "Efficiently discover and invest in promising businesses." 
                description="efficient and effective way to discover, evaluate, and invest in promising business opportunities"/>
                    <Card title = "Easily gain insight into startup potential." 
                description="efficient and effective way to discover, evaluate, and invest in promising business opportunities"/>
                    <Card title = "Invest based on investor interests." 
                description="Invest in potential startup based on investor interest kind of startup"/>
            </div>
            
            
        </div>
        
    )
}
export default ToolsAdvantages