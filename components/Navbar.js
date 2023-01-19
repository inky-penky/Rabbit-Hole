import Image from "next/image"
import LogoName from "../public/RabbitHole.svg"
import Logo from "../public/rabbit-logo.svg"
import Link from "next/link"



const Navbar = () => {
    return (
        <div className="w-full h-auto flex items-center justify-between px-[7.6rem] pt-1">
            <div className="flex justify-center">
                <Image src={Logo}></Image>
                <Image src={LogoName}></Image>
            </div>

            <Link href="" legacyBehavior>
                <a className="border border-[#8ddfbc] rounded-3xl text-base bg-[#8dfbc9] text-center py-2 px-11 font-medium">Enter the RabbitHole</a>
            </Link>
        </div>
    )
}


export default Navbar