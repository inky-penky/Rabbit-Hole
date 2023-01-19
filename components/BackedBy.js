import Image from "next/image"
import electricCapital from "../public/electric-capital.svg"
import Tcg from "../public/tcg.svg"
import greyLock from "../public/greylock.svg"
import collabCurrency from "../public/collab-and-currency.svg"


const BackedBy = () => {
    return (
        <div className="w-full h-auto px-[10rem] py-[5rem] bg-[#272e2b]">
            <h3 className="font-bold text-center text-white">BACKED BY</h3>
            <div className="flex justify-center gap-20 pt-6">
                <Image src={electricCapital}></Image>
                <Image src={Tcg}></Image>
                <Image src={greyLock}></Image>
                <Image src={collabCurrency}></Image>
            </div>
        </div>
    )
}


export default BackedBy