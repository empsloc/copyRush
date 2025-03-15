import { FileCog, Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const PrintSettingTile = () => {

    const blackWhiteSvg = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/bnw_print.png";
    const colorPrintSvg = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/color_print.png";
    const portaitSvg = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/potrait_print.png";
    const landScapeSvg = "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/landscape_print.png";
    var isExpanded = false;

    return (
        <div className="fileSettingTile flex flex-col gap-5 w-full rounded-2xl shadow-md p-5">

            {/* File name and configuration settings of print */}
            <div className="fileName flex flex-row justify-between items-center">
                <h2 className="text-black text-md font-bold">
                    FileName
                </h2>
                <div className="flex flex-row items-center p-1 rounded-md border gap-1 border-green-600 cursor-pointer">
                    <FileCog size={16} color="#23ce0c" />
                    <h2 className="text-green-600 text-sm font-small">
                        Configure Settings
                    </h2>
                </div>
            </div>

            {/* Horizantal divider */}
            <div className="dividerBorder border-t border-gray-300"></div>

            {/* Grid of four options */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between">

                {/* Choosing between black and white */}
                <div className="flex flex-col gap-3 items-center">
                    <div>
                        <h1 className='text-black text-md font-bold'>
                            Select print color
                        </h1>
                        <h1 className='text-black text-xs font-extralight'>
                            Choose print colour for files
                        </h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={blackWhiteSvg} alt="b&w" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                B&W
                            </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={colorPrintSvg} alt="color" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                Colour
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Choosing orientation for printing */}
                <div className="flex flex-col gap-3 items-center">
                    <div>
                        <h1 className='text-black text-md font-bold'>
                            Select orientation
                        </h1>
                        <h1 className='text-black text-xs font-extralight'>
                            Choose print settings for files
                        </h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={portaitSvg} alt="portrait" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                Portait
                            </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={landScapeSvg} alt="landscape" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                Landscape
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Back to back or single side */}
                <div className="flex flex-col gap-3 items-center">
                    <div>
                        <h1 className='text-black text-md font-bold'>
                            Single side / Both side
                        </h1>
                        <h1 className='text-black text-xs font-extralight'>
                            Choose print settings for files
                        </h1>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={'singleSide.svg'} alt="portrait" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                Single side
                            </h1>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="border border-green-700 rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer">
                                <Image src={'bothSide.svg'} alt="landscape" width={30} height={30} />
                            </div>
                            <h1 className='text-green-600 text-sm font-light'>
                                Both side
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Choosing number of copies */}
                <div className="flex flex-col gap-3 items-center">
                    <div>
                        <h1 className='text-black text-md font-bold'>
                            Number of copies
                        </h1>
                        <h1 className='text-black text-xs font-extralight'>
                            Choose print settings for files
                        </h1>
                    </div>
                    <div className="flex flex-row border border-green-700 rounded-xl w-[120px] h-[50px] items-center justify-between px-2">
                        <div className="cursor-pointer">
                            <Minus size={20} color='#07630b'/>
                        </div>
                        <p className="text-lg text-black font-bold">1</p>
                        <div className="cursor-pointer">
                            <Plus size={20} color='#076d0c'/>
                        </div>
                    </div>
                </div>

            </div>

            {/* Horizantal divider */}
            <div className="dividerBorder border-t border-gray-300"></div>

            {/* TextArea for more specification */}
            <div className="flex flex-col gap-4">
                <h2 className="text-black text-md font-bold">
                    Specify any other requirements
                </h2>
                <div className="">
                    <textarea className='w-full border-black border rounded-xl p-2' />
                </div>
            </div>

        </div>
    )
}
