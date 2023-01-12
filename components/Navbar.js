import Image from "next/image"
import LogoName from "../public/RabbitHole.svg"
import Logo from "../public/rabbit-logo.svg"



const Navbar = () => {
    return (
        <div className="w-full h-auto bg-inherit flex items-center justify-between px-[7.6rem] pt-2">
            <div className="flex justify-center">
                <Image src={Logo}></Image>
                <Image src={LogoName}></Image>
            </div>

            <div className="rounded-3xl bg-[#8dfbc9] text-center py-2 px-12 font-bold">
                Enter the RabbitHole
            </div>
        </div>
    )
}


export default Navbar