import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Project proposal document for Q2 marketing campaign.",
            filesize: "1.2mb",
            close: false,
            tag: {isOpen: true, title: "Download Now", color: "green"},
        },
        {
            desc: "Meeting notes from the weekly team sync.",
            filesize: "700kb",
            close: true,
            tag: {isOpen: false, title: "Archived", color: "blue"},
        },
        {
            desc: "Image assets for the landing page redesign.",
            filesize: "2.4mb",
            close: false,
            tag: {isOpen: true, title: "Download", color: "blue"},
        },
        {
            desc: "Performance report data collected in April 2025.",
            filesize: "850kb",
            close: true,
            tag: {isOpen: true, title: "View Report", color: "green"},
        },
        {
            desc: "Backup file created before the latest system update.",
            filesize: "3.1mb",
            close: false,
            tag: {isOpen: true, title: "Restore", color: "blue"},
        }
    ];
    return (
        <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-screen flex gap-5 flexwrap-wrap">
            {data.map((item, index) => (
                <Card data={item} reference={ref}/>
            ))}
        </div>
    )
}

export default Foreground
