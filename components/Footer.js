import Image from "next/image"
import Link from "next/link"
import Logo from "../public/rabbit-logo.svg"
import logoName from "../public/RabbitHole.svg"
import Twitter from "../public/twitter (1).svg"
import Discord  from "../public/discord.svg"


const Footer = () => {
    return (
        <div className="flex w-4/5 mx-[8rem] justify-between mx-[8rem] py-20">
            <div className="flex">
                <Image src={Logo}></Image>
                <Image src={logoName} height={45} ></Image>
            </div>
            <div className="flex gap-20">
                <div className="flex flex-col gap-1 text-gray-400">
                    <h3 className="text-2xl font-semibold text-gray-300">Company</h3>
                    <Link href="https://jobs.lever.co/RabbitHoleStudios"legacyBehavior>
                        <a className="">Careers</a> 
                    </Link>
                    <Link href="https://assets.rabbithole.gg/RabbitHole_Privacy_Policy.pdf"legacyBehavior>
                        <a className="">Privacy Policy</a> 
                    </Link>
                    <Link href="https://assets.rabbithole.gg/RabbitHole_Terms_of_Service.pdf"legacyBehavior>
                        <a className="">Terms of Service</a> 
                    </Link>
                </div>

                <div className="flex flex-col gap-1 text-gray-400">
                    <h3 className="text-2xl font-semibold text-gray-300">Support</h3>
                    <Link href="https://feedback.rabbithole.gg/bugs"legacyBehavior>
                        <a className="">Report a Bug</a> 
                    </Link>                        
                    <Link href="https://feedback.rabbithole.gg/feature-requests"legacyBehavior>
                        <a className="">Request a Feature</a> 
                    </Link>
                    <Link href="https://discord.gg/jHj3yB4kSX"legacyBehavior>
                        <a className="">Contact Support</a> 
                    </Link>
                </div>
                
                <div className="">
                    <h3 className="text-2xl font-semibold text-gray-300">Social</h3>
                    <div className="flex gap-2">
                        <Link href="https://twitter.com/rabbithole_gg"legacyBehavior>
                            <a className=""><Image src={Twitter}></Image></a> 
                        </Link>
                        <Link href="https://discord.gg/rabbitholegg"legacyBehavior>
                            <a className=""><Image src={Discord}></Image></a>
                        </Link>
                    </div>
                </div>
                
            </div>

        </div>
    )
}


export default Footer