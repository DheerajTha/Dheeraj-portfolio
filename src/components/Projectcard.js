import Image from "next/image";
import { useRouter } from "next/router";



export default function ProjectCard({ image = "", title = "" }) {

   

    return (
        <div className="border-2 border-gray-300	 transition-all rounded-2xl duration-700 hover:border-dark hover:-translate-y-3">
            <div className="w-full">
                <Image alt="Image" src={image} width={500} height={500} className="w-full rounded-2xl bg-rose-500 " />
            </div>
            <div className="px-2 md:px-5 py-2 flex flex-row items-center justify-between">
                <div>
                    <h2 className="text-dark text-lg md:text-2xl mb-2 font-extrabold">{title}</h2>
                   
                </div>
                <div className="justify-between sm:w-355px">
                    
                </div>
            </div>
        </div>
    )
}