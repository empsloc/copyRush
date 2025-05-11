"use client"
import { FilesContext } from '@/context/FilesContext';
import { X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';




export const DocumentPreview = ( ) => {
    const {files, setFiles} = useContext(FilesContext)
    const [fileURL, setFileURL] = useState<any>()
    const [isImage, setIsImage] = useState<any>()

useEffect(()=>{
    console.log(files)
    const fileURL = URL.createObjectURL(files[0]);
    const isImage = files[0].type.startsWith("image/");
    setFileURL(fileURL)
    setIsImage(isImage)
    setFiles(files)
},files)


  return (
    <div className="relative w-45 h-60 bg-white rounded-2xl flex-none">
      <div className="w-45 h-60 bg-white rounded-2xl flex-none">
        {isImage ? (
          <img
            src={fileURL}
            alt="Preview"
            className="w-full h-full object-cover rounded-2xl p-2"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-4 text-sm text-center text-gray-600">
            {/* {files&&files[0].name} */}
          </div>
        )}
      </div>
      <div
        // onClick={() => removeFile(file)}  // Trigger the remove function
        className="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer"
      >
        <X size={16} color="#000" />
      </div>
    </div>
  );
};