import { X } from 'lucide-react'
import React from 'react'

export const DocumentPreview = () => {
    return (
        <div className="relative w-45 h-60 bg-white rounded-2xl flex-none">
            <div className='w-45 h-60 bg-white rounded-2xl flex-none'>
                <img
                    src="printService.png"
                    alt="Preview"
                    className="w-full h-full object-cover rounded-2xl p-2"
                />
            </div>
            <div className="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer">
                <X size={16} color="#000" />
            </div>
        </div>
    )
}
