"use client"
import { FilesContext } from "@/context/FilesContext";
import { Plus } from "lucide-react";
import React, { useContext, useRef } from "react";
import { Button } from "./ui/button";

function AddMoreFiles() {
    const { files, setFiles } = useContext(FilesContext)
   

    const handleFilesChange = (e:any) => {
        const newFiles = Array.from(e.target.files);
        setFiles((prev:any) => [...prev, ...newFiles]);
        console.log(files)
      };
      const showFiles=()=>{
        console.log(files)
      }
  return (
    <>
   <label htmlFor="file-upload" className="w-45 h-60 flex flex-col bg-white hover:bg-green-100 hover:border-2 rounded-2xl justify-center items-center flex-none cursor-pointer">
      <input
        id="file-upload"
        type="file"
        multiple
        onChange={handleFilesChange}
        className="hidden"
      />
      <div className="w-10 h-10 rounded-full justify-center items-center flex border-black border">
        <Plus color="#000000" />
      </div>
      <h2 className="text-sm font-light text-black">Add files</h2>
    </label>
    {/* <Button onClick={()=>showFiles()}>Show files</Button> */}
  </>

  );
}

export default AddMoreFiles;
