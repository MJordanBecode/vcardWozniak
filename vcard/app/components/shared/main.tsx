import Image from "next/image";

export default function MainVcard() {
    return (
        <>
            <div className="pt-4">
                <div className="ml-6">
                    <h2 className="inline border-b border-black">My Training</h2>
                </div>
                <div className="flex justify-between m-4 pl-4 ">
                    <div className="flex flex-col items-center ">
                        <div className="w-fit p-4 border border-[#adacaa] rounded-lg bg-[#b59af2] mb-2 shadow-[10px_10px_6px_-5px_rgba(0,0,0,0.3)] inline-block align-middle transform perspective-[1px] translateZ-0 transition-all duration-500 hover:translate-x-2">
                            <Image width={70} height={70} src="/training/BeCode_color.png" alt="BeCode_color.png" />
                        </div>

                        <div>
                            <p className="text-sm">Junior Developer</p>
                        </div>
                        <div>
                            <p className="text-[12px] text-[#adacaa]">Finish</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="w-fit p-4 border border-[#adacaa] rounded-lg bg-[#b59af2] mb-2 shadow-[10px_10px_6px_-5px_rgba(0,0,0,0.3)] inline-block align-middle transform perspective-[1px] translateZ-0 transition-all duration-500 hover:translate-x-2">
                            <Image width={70} height={70} src="/training/BeCode_color.png" alt="BeCode_color.png" />
                        </div>
                        <div>
                            <p className="text-sm">Junior Software Developer</p>
                        </div>
                        <div>
                            <p className="text-[12px] text-[#adacaa]">In Progress...</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* // Social */}
            <div className="flex flex-col pt-4 space-y-3">
                <div className="ml-6">
                    <h2 className="inline border-b border-black">My Social</h2>
                </div>

                {/* Github */}
                <a href="https://github.com/MJordanBecode" target="_blank">
                    <div className="flex items-center space-x-4 p-2 m-2 bg-[#b59af2] rounded-lg shadow-[10px_10px_6px_-5px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:translate-x-2">
                        <Image width={25} height={25} src="/social/github.svg" alt="github.svg" />
                        <p>Github</p>
                    </div>
                </a>

                {/* Linkedin */}
                <a href="https://www.linkedin.com/in/jordan-masy/" target="_blank">
                    <div className="flex items-center space-x-4 p-2 m-2 bg-[#b59af2] rounded-lg shadow-[10px_15px_8px_-5px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:translate-x-2">
                        <Image width={25} height={25} src="/social/linkedin-color.svg" alt="linkedin-color.svg" />
                        <p>Linkedin</p>
                    </div>
                </a>

                {/* Mail */}
                <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMTtdPJKVBRJJgwpQFVKCvpQpWXpPTnPncWsSmKHbnPGqpllrGhhJsvKpRDMRfjxrZHfxvb" target="_blank">
                    <div className="flex items-center space-x-4 p-2 m-2 bg-[#b59af2] rounded-lg shadow-[10px_10px_6px_-5px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:translate-x-2">
                        <Image width={25} height={25} src="/social/mail2.svg" alt="mail2.svg" />
                        <p>Mail</p>
                    </div>
                </a>

                {/* Discord */}
                <a href="#">
                    <div className="flex items-center space-x-4 p-2 m-2 bg-[#b59af2] rounded-lg shadow-[10px_15px_8px_-5px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:translate-x-2">
                        <Image width={25} height={25} src="/social/discord.svg" alt="discord.svg" />
                        <p>Discord</p>
                    </div>
                </a>
            </div>
        </>
    );
}
