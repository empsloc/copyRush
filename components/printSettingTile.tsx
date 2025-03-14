import { FileCog } from 'lucide-react'
import React from 'react'


export const PrintSettingTile = () => {
    return (
        <div className="fileSettingTile w-full rounded-2xl shadow-md p-5">
            <div className="fileName flex flex-row justify-between">
                <h2 className="text-black text-md font-bold">
                    FileName
                </h2>
                <div className="flex flex-row items-center p-1 rounded-md border gap-1 border-green-600">
                    <FileCog size={16} color="#23ce0c" />
                    <h2 className="text-green-600 text-sm font-small">
                        Configure Settings
                    </h2>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="colorOfPrint w-10 h-10 bg-amber-300"></div>
                    <div className="orientationOfPrint w-10 h-10 bg-amber-300"></div>
                    <div className="numberOfCopies w-10 h-10 bg-amber-300"></div>
                    <div className="backToBack w-10 h-10 bg-amber-300"></div>
                </div>
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
