import Link from "next/link"


const Subscribe = () => {
    return (
        <div className="flex w-4/5 mx-[8rem] h-auto gap-6 mt-10 mb-20">
            <div className="flex flex-col w-1/2 h-auto gap-4">
                <h2 className="text-4xl font-bold text-white">Learn and earn, from your inbox</h2>
                <p className="text-gray-400">Sign up for our 4 week Skills course, updates about the RH ecosystem, and new opportunities to earn.</p>
            </div>
            <div className="flex items-start w-1/2 h-auto gap-8 mt-4">
                <input type="search" placeholder="Enter your email" className="p-[.7rem] bg-black border border-gray-700 w-80 rounded-2xl text-white"></input>
                <Link href="" legacyBehavior>
                    <a className="rounded-3xl w-[10rem] text-base bg-[#8dfbc9] font-semibold text-center py-2 px-11 font-medium border border-[#8dfbc9] text-center">Subscribe</a>
                </Link>
            </div>
        </div>
    )
}


export default Subscribe