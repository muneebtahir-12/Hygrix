import Link from "next/link"
export default function Navbar() {
    return (
        <section className="bg-white shadow-[0_20px_41.1px_0_rgba(0,0,0,0.05)] flex justify-between bg-white mx-5 md:mx-20 lg:mx-30 lg:rounded-4xl px-5 py-3 mt-10 z-0">

            <div className="flex rounded-4xl items-center justify-center w-[120px] h-[48px] bg-[#F37303]">
                <div className="px-1.5"><span className="text-white">Hygrix</span></div>
                <div className="grid flex items-center p-2 grid-cols-3  bg-[#F5F5F5] h-[40px] w-[52px] rounded-r-full">
                    <span></span>
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>
                    <span></span>
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>
                    <span></span>
                    
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>
                    <span></span>
                    
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>
                    <span></span>
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>
                    <span></span>
                    <span className="w-1.5 h-1.5 bg-[#F37303] rounded-full"></span>


                </div>
            </div>

            <div className="hidden lg:flex gap-6 items-center">
                <Link href="/"><span>Home</span></Link>
                <img src="/Line.png" alt="" className="w-2 h-3" />
                <Link href="/about"><span>About</span></Link>
                <img src="/Line.png" alt="" className="w-2 h-3" />
                <Link href="/features"><span>Features</span></Link>
                <img src="/Line.png" alt="" className="w-2 h-3" />
                <Link href="/products"><span>Blogs</span></Link>
            </div>

            <div className="hidden lg:flex items-center justify-center w-[110px] h-[43px] rounded-[100px] bg-black shadow-[-13px_22px_12.8px_0_rgba(255,255,255,0.25)]">
                <span className="text-white">Contact Us</span>
            </div>

            <img src="/Menu.png" alt="" className="flex lg:hidden" />



        </section>
    )
}