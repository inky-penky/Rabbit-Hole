import Image from "next/image"
import Link from "next/link"
import Artisan from "../public/artisan.webp"



const Skills = () => {
    return (
        <div className="flex w-4/5 mx-[8rem] h-auto bg-[#212224] rounded-3xl ">
            <div className="flex items-center justify-center w-1/2 h-auto rounded-3xl bg-gradient-to-t from-[#3b82f680] to-[#3b82f680] rounded-br-none">
                <Image src={Artisan} width={440} ></Image>
            </div>
            <div className="flex flex-col w-1/2 gap-6 py-28 px-14">
                <h2 className="text-4xl font-bold text-white">Build your on-chain resume</h2>
                <p className="text-gray-300 ">Complete tasks, learn skills, and earn credentials that prove your knowledge.</p>
                <p className="text-gray-300">RabbitHole helps you navigate the rapidly evolving space with curated opportunities.</p>
                <Link href="https://rabbithole.gg/skills" legacyBehavior>
                    <a className="border border-[#4d5654] font-semibold text-center py-2 text-white bg-[#4d5654] w-52 rounded-3xl">RabbitHole Skills</a>
                </Link>
            </div>
        </div>
    )
}


export default Skills