import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <>
        <div className="w-full h-1/6 flex-1 flex justify-between items-center p-5 border-0 border-b-2">
            <h1 className='font-[Mentimun] text-3xl '>PopFlix 🍿</h1>
            <div className="bg-white pt-2 pl-4 pr-0 pb-2 rounded-full">
                <ul className='text-lg text-black flex jusitfy-center items-center gap-8 list-none'>
                    <li><Link href={"#"}>Home</Link></li>
                    <li><Link href={"#"}>Movie</Link></li>
                    <li><Link href={"#"}>Series</Link></li>
                    <li className="bg-gray-500 p-2 pr-4 pl-4 rounded-full"><Link href={"#"}><i className="text-white ri-search-2-fill"></i></Link></li>
                </ul>
            </div>
            <div className="text-lg flex items-center gap-5">
                <i className="ri-notification-fill"></i>
                <p>Mirza Zain</p>
            </div>
        </div>
    </>
  )
}
