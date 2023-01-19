 import Image from "next/image"
import Link from "next/link"
 import RabbitDoor from "../public/rabbit-door.webp"
 
 
 const Intro = () => {
    return (
        <div className="w-4/5 flex mx-[8.0rem] wrap justify-between gap-16 h-auto mt-16 mb-28">
            <div className="flex flex-col h-auto pt-40 w-[39rem]">
                <h2 className="text-5xl font-semibold leading-tight text-white">Learn and earn crypto by using the best web3 applications</h2>
                <p className="pt-5 leading-loose text-gray-300">We know crypto can be a confusing place. RabbitHole will be your guide. Ready to begin? </p>
                <Link href="" legacyBehavior>
                    <a className="border border-[#8dfbc9] rounded-3xl font-semibold text-base bg-[#8dfbc9] py-2 px-12 mt-5 font-medium text-left w-60">
                        Get Started
                    </a>
                </Link>
            </div>
            <div className="w-1/2 h-auto pl-4">
                <Image src={RabbitDoor} width={400} ></Image>
            </div>
        </div>
    )
 }


 export default Intro