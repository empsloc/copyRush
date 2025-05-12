"use client"
import { FilesContext } from '@/context/FilesContext';
import { X } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';




export const DocumentPreview = ( ) => {
    const {files, setFiles} = useContext(FilesContext)
    const [fileURLs, setFileURLs] = useState<string[]>([]);
    const [isImages, setIsImages] = useState<boolean[]>([]);

useEffect(()=>{
  if (files.length > 0) {
    const urls = files.map((file:any) => URL.createObjectURL(file));
    const images = files.map((file:any) => file.type.startsWith("image/"));

    setFileURLs(urls);
    setIsImages(images);
  }
    
   
},[files])
const removeFile = (index: number) => {
  const newFiles = files.filter((_:any, i:any) => i !== index);
  setFiles(newFiles);
};


  return (
    <div className="flex gap-4 flex-wrap">
    {files.map((file:any, index:any) => (
      <div key={index} className="relative w-45 h-60 bg-white rounded-2xl flex-none">
        <div className="w-45 h-60 bg-white rounded-2xl flex-none">
          {isImages[index] ? (
            <img
              src={fileURLs[index]}
              alt="Preview"
              className="w-full h-full object-cover rounded-2xl p-2"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center p-4 text-sm text-center text-gray-600">
              {file.name}
            </div>
          )}
        </div>
        <div
          onClick={() => removeFile(index)}
          className="absolute top-2 right-2 w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center shadow-md cursor-pointer"
        >
          <X size={16} color="#000" />
        </div>
      </div>
    ))}
  </div>
  );
};