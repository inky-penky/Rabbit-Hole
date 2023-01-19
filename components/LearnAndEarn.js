import Image from "next/image"
import Crystal from "../public/crystal.png"
import RabbitBinoculars from "../public/rabbit-binoculars.png"


const LearnAndEarn = () => {
    return (
        <div className="flex w-5/5 mx-[8.0rem] h-auto mt-8 gap-6">
            <div className="flex flex-col w-1/2 h-auto rounded-2xl bg-[#212224]">
                <div className="w-auto h-auto bg-[#3b82f640] rounded-2xl flex justify-center items-center p-6">   
                    <Image src={Crystal} width={293} ></Image>
                </div>
                <div className="flex flex-col gap-6 p-10">
                    <h2 className="text-4xl font-bold text-white">Earn By Doing</h2>
                    <p className="text-gray-200 ">RabbitHole Quests help you explore the best web3 projects and earn rewards doing so.</p>
                    <button className="py-2 text-white bg-[#4d5654] w-56 rounded-3xl">RabbitHole Quests</button>
                </div>
            </div>
            
            
            <div className="w-1/2 h-auto flex flex-col bg-[#212224] rounded-2xl">
                <div className="w-auto h-auto bg-[#3b82f640] rounded-2xl flex justify-center items-center p-6">   
                    <Image src={RabbitBinoculars} width={310} ></Image>
                </div>
                <div className="flex flex-col gap-6 p-10">
                    <h2 className="text-4xl font-bold text-white">RabbitHole Learn Hub</h2>
                    <p className="text-gray-200 ">Continue building your knowledge with the best resources across DeFi, DAOs, and NFTs.</p>
                    <button className="py-2 text-white bg-[#4d5654] w-56 rounded-3xl">RabbitHole Learn</button>
                </div>
            </div>
            
            <div className="">
                
            </div>
        </div>
    )
}


export default LearnAndEarn