import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import {motion} from "framer-motion";

function Card({data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.2} className="relative w-60 h-72 flex-shrink-0 bg-zinc-900/90 rounded-[40px] text-white px-8 py-10 overflow-hidden">
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='px-8 flex items-center justify-between mb-5'>
                    <h5>{data.filesize}</h5>
                    <span className='w-7 h-7 bg-zinc-300 rounded-full flex items-center justify-center'>
                        {data.close ? <IoClose color='#000' size={".8em"}/> : <LuDownload color='#000' size={".8em"} />}
                    </span>
                </div>

                {
                    data.tag.isOpen && (<div className={`tag w-full p-4 ${data.tag.color == "blue" ? "bg-blue-500" : "bg-green-500"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.title}</h3>
                    </div>)
                }
            </div>
        </motion.div>
    )
}

export default Card
