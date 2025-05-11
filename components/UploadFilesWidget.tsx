"use client";
import { Upload } from "lucide-react";
import React, { createContext, useContext } from "react";
import { Button } from "./ui/button";
import { ThemeToggleButton } from "./themeToggleButton";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useSupabaseUpload } from "@/hooks/use-supabase-upload";
import { Dropzone, DropzoneContent, DropzoneEmptyState } from "./dropzone";

import { useState } from "react";
import { uploadFiles } from "@/lib/utils";

import Link from "next/link";
import { FilesContext } from "@/context/FilesContext";

export default function UploadFilesWidget(props: {}) {
  // const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const { files, setFiles } = useContext(FilesContext);
  const handleUpload =  () => {
    // if (files.length === 0) {
    //   setMessage("Please select files first");
    //   return;
    // }

    // const results = await uploadFiles(files);

    // if (results.length > 0) {
    //   setMessage(`Uploaded ${results.length} files successfully!`);
    // } else {
    //   setMessage("Upload failed!");
    // }

    console.log(files)
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const searchParams = useSearchParams();
  const shopID = searchParams.get("shopID");

  return (
    <div className="div">
      <div className="">
        <div className="">
          <div className="flex flex-col justify-center items-start gap-5">
            <h2 className="text-4xl font-bold"> Print Store </h2>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Upload files container */}
              <div className="p-5 bg-[rgb(232,234,245)] rounded-xl max-w-lg mx-auto">
                <div className="py-5 flex items-center gap-3">
                  <img
                    src="https://cdn.grofers.com/assets/ui/print/upload_files_colour.png"
                    height="68"
                    width="58"
                  ></img>
                  <div className="flex flex-col w-full">
                    <h2 className="text-black font-bold text-xl">
                      Upload your files
                    </h2>
                    <h5 className="text-black font-light text-sm">
                      We support various file formats, including PDF, JPG, PNG,
                      JPEG, and more
                    </h5>
                  </div>
                </div>
                <div className="p-4 flex flex-col items-center gap-3 bg-white border-2 border-dashed border-[rgb(176,182,214)] rounded-xl">
                  <img
                    src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/layout-engine/v2/2024-06/1717662216998-drop-file.png"
                    alt="drop-file"
                    width="88"
                    height="62"
                    loading="lazy"
                  ></img>
                  <div className="flex justify-between items-center">
                  <Button className="flex justify-center items-center w-full">
                  <input className="flex justify-center items-center w-full" type="file" multiple onChange={handleFileChange} />
                  </Button>
                  </div>
                  <Link  href={{ pathname: '/preview', query: { shopID: shopID} }} className="bg-green-600 hover:bg-green-700 text-base text-white w-full">
                    
                    <div className="flex justify-center items-center">Upload your files</div>
                  </Link>
                  <h6 className="text-gray-700 text-xs text-center">
                    Maximum upload size: 50MB Maximum files: 15
                  </h6>
                </div>
              </div>

            

              {/* <div>
                <div className="p-6">
                  <input type="file" multiple onChange={handleFileChange} />
                  <button
                    onClick={handleUpload}
                    className="mt-4 p-2 bg-blue-600 text-white rounded"
                  >
                    Upload Files
                  </button>

                  {message && <p className="mt-4">{message}</p>}
                </div>
              </div> */}
              {/* Image illustration for print service */}
              <div className="flex  justify-end">
                <Image
                  src="/printService.png"
                  width={400}
                  height={400}
                  alt="printService"
                />
              </div>
            </div>
          </div>

          {/* <div>Image</div> */}
        </div>
      </div>
      <div className="py-5 "></div>
      <div className="bg-[rgb(232,234,245)]  py-10">
        {/* Informational container for copyrush project */}
        <div className=" mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="text-black font-bold text-3xl">Why try Copyrush?</h2>
          </div>
        </div>
        <div className="py-5"></div>
        <div className=" mx-auto max-w-screen-xl gap-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-x-5">
          <div className=" rounded-xl p-5">
            <img
              width="35%"
              height="35%"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/features_delivery.png"
              alt="Delivery in minutes"
            ></img>
            <h2 className="text-black font-bold">Brown fox</h2>
            <h4 className="text-gray-600 text-xs font-medium">
              The quick brown fox jumps over the lazy dog
            </h4>
          </div>
          <div className=" rounded-xl p-5">
            <img
              width="35%"
              height="35%"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/features_delivery.png"
              alt="Delivery in minutes"
            ></img>
            <h2 className="text-black font-bold">Brown fox</h2>
            <h4 className="text-gray-600 text-xs font-medium">
              The quick brown fox jumps over the lazy dog
            </h4>
          </div>
          <div className=" rounded-xl p-5">
            <img
              width="35%"
              height="35%"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/features_delivery.png"
              alt="Delivery in minutes"
            ></img>
            <h2 className="text-black font-bold">Brown fox</h2>
            <h4 className="text-gray-600 text-xs font-medium">
              The quick brown fox jumps over the lazy dog
            </h4>
          </div>
          <div className=" rounded-xl p-5">
            <img
              width="35%"
              height="35%"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/features_delivery.png"
              alt="Delivery in minutes"
            ></img>
            <h2 className="text-black font-bold">Brown fox</h2>
            <h4 className="text-gray-600 text-xs font-medium">
              The quick brown fox jumps over the lazy dog
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
