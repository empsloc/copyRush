import React from 'react'
import Image from "next/image";
import { CalendarClock, Check, X } from "lucide-react";

export const ListTile = () => {
    return (
        <div>
            <div className=" bg-[rgb(232,234,245)] p-3 w-full h-1/6 mx-auto rounded-2xl shadow-xl shadow-[rgb(215,219,240)]">
                <div className="flex flex-row h-full gap-2">
                    <div className="flex-[2] h-full aspect-square overflow-hidden">
                        <Image src='/dummy.png' width={160} height={160} alt="printService" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    <div className="flex-[8] h-full">
                        <div className="flex flex-row items-center gap-1">
                            <CalendarClock size={16} className="text-gray-600" />
                            <h5 className='text-gray-600 font-medium'>11th March,2025 | 12:30 AM</h5>
                        </div>
                        <div className="">
                            <h2 className="text-xl font-bold text-black">Store Name | INTJ Nagar, Wardha</h2>
                            <h2 className="text-md font-bold text-gray-600">No of Documents: 10 </h2>
                            <h2 className="text-sm font-bold text-green-600">Amount: ₹ 12000</h2>
                            <div className="w-fit flex flex-row gap-1 px-3 items-center bg-white rounded-xl border-green-600 border-1">
                                <Check size={16} className="text-green-600" />
                                {/* <X size={16} className="text-red-600" /> */}
                                <h2 className="text-sm font-medium text-green-600">Success</h2>
                                {/* <h2 className="text-sm font-medium text-red-600">Failed</h2> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
