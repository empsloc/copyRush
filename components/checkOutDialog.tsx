import React, { useContext, useEffect, useState } from 'react'
import Image from "next/image";
import { CircleX, CloudCog, ReceiptText, ShoppingCart } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { FilesContext } from '@/context/FilesContext';
import { uploadFile } from '@/lib/utils';
import { supabase } from '@/lib/supabaseClient';
import { FilesPropertiesContext } from '@/context/FilesPropertiesContext';


function CheckOutDialog({shop_id, number_of_copies, color_of_print, orientation_of_print, sides_of_print, price, user_email}:any) {
  const [uploading, setUploading] = useState(false);
  const [filesURL, setFilesURL] = useState<{ url: string; fileName: string }[]>([]);

  async function insertData() {
    const { data, error } = await supabase
      .from('userSession')   // 👈 your table name here
      .insert([
        {
          shop_id: shop_id,
          files: filesURL,
          properties: filesProperties,
          price:price,
          user_email:user_email
        },
      ]);
  
    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Inserted successfully:", data);
    }
  }
  
 
  const onProceedClick=async()=>{
    console.log("next step after file uploading")
    
  }

  const { files, setFiles} = useContext(FilesContext)
  const {filesProperties, setFilesProperties} = useContext(FilesPropertiesContext)
  async function handleUploadAll() {
    if (!files.length) {
      console.log("No files to upload.");
      return;
    }
  
    setUploading(true);
  
    const uploadPromises = files.map(async (fileObj:any) => {
      const url = await uploadFile(fileObj); // Directly pass the File
      return {
        url,
        fileName: fileObj.name, // Directly access fileObj.name
      };
    });
  
    const uploadedData = await Promise.all(uploadPromises);
  
    const validData = uploadedData.filter((item) => Boolean(item.url));
  
    // Save URLs and fileNames
    setFilesURL(validData); // (you might rename filesURL -> filesData for clarity)
  
    console.log("All uploaded URLs and filenames:", filesURL);
  
    // Create the filesProperties array
    const newFilesProperties = validData.map((item, index) => ({
      fileURL: item.url,
      fileName: item.fileName,
      properties: {
        number_of_copies: files[index]?.numberOfCopies, // You probably don't have numberOfCopies on the native File (discuss below)
        color_of_print: files[index]?.colorOfPrint,
        orientation_of_print: files[index]?.orientationOfPrint,
        sides_of_print: files[index]?.sidesOfPrint,
      }
    }));
  
    setFilesProperties(newFilesProperties);
  
    console.log("Files properties mapped:", newFilesProperties);
  
    setUploading(false);
  }
  
  
  

  const handleProceedButton=async()=>{
    await handleUploadAll()
    await onProceedClick()
    await insertData()

  }


  const timeForDelivery = 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/assets/eta-icons/15-mins-filled.png';
  return (
    <AlertDialog>
      <AlertDialogTrigger className='cursor-pointer border-none flex items-center gap-2'>
        <ShoppingCart />
        View Cart</AlertDialogTrigger>
      <AlertDialogContent className='bg-[rgb(232,234,245)]'>
        {/* header */}
        <AlertDialogHeader className='bg-white p-2 rounded-md shadow-md'>
          <div className="flex flex-row justify-between items-center">
            <AlertDialogTitle>My Cart</AlertDialogTitle>
            <AlertDialogCancel className='border-none rounded-full shadow-none cursor-pointer'>
              <CircleX size={25}/>
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        {/* Body */}

        {/* File info */}
        <div className="flex overflow-y-scroll max-h-70 no-scrollbar  flex-col gap-5 bg-white p-2 bg-grey shadow-md rounded-md">

          {/* Delivery details */}
          <div className="flex flex-row gap-4">
            <div className="w-15 h-15">
              <Image src={timeForDelivery} width={160} height={160} alt="printService" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold">Printing in 3 minutes</div>
              <div className="flex">1 file . Edit . Remove</div>
            </div>
          </div>

          {/* FileTile */}
          <div className="flex flex-row gap-4">
            <div className="w-20 h-20 border-green-500 shadow-md">
              <Image src='/dummy.png' width={160} height={160} alt="printService" className="w-full h-full object-cover  rounded-md" />
            </div>
            <div className="flex flex-col">
              <div className=''>fileName</div>
              <div className='text-sm text-gray-500'>fileName</div>
              <div className='font-bold text-sm text-black'>₹Price</div>
            </div>
          </div>
          

        </div>

        {/* Bill Details */}
        <div className="flex flex-col p-3 bg-white shadow-md rounded-md gap-1">
          <div className="text-md font-bold">Bill Details</div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-0.5">
              <ReceiptText size={13} />
              <div className="text-sm">Items total</div>
            </div>
            <div className="text-sm">₹ 64</div>
          </div>
          {/* <div className="flex flex-row justify-between">
            <div className="text-sm">Delivery Charge</div>
            <div className="text-sm">₹ 64</div>
          </div> */}
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center gap-0.5">
              <CloudCog size={13} />
              <div className="text-sm">Service charges</div>
            </div>
            <div className="text-sm">₹ 5</div>
          </div>
          <div className="dividerBorder border-t border-gray-300"></div>
          <div className="flex flex-row justify-between">
            <div className="text-sm font-bold">Grand Total</div>
            <div className="text-sm font-bold">₹ 69</div>
          </div>
        </div>

        {/* Cancellation Policy */}

        <div className="flex flex-col bg-white p-2 shadow-md rounded-md gap-1">
          <div className="font-bold">Cancellation Policy</div>
          <div className="text-sm text-gray-400 font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam explicabo culpa dolore iusto quibusdam autem, quod quam reiciendis.
          </div>
        </div>
        {uploading?<button
        onClick={handleUploadAll}
        disabled={uploading}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        {uploading ? "Uploading..." : "Upload All Files"}
      </button>:""}
       
        {/* Fotter */}

        <AlertDialogFooter>
          <div onClick={()=>{handleProceedButton()}} className='w-full p-0 cursor-pointer'>
            <div className="flex w-full bg-green-600 justify-between items-center shadow-md rounded-md px-4 py-1">
              <div className="flex flex-col items-start">
                <div className="text-sm font-bold text-white">₹ 4567</div>
                <div className="text-sm text-white">Total</div>
              </div>
              
              <div  className="text-white">Proceed {'>'}</div>
            </div>
            
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>



  )
}

export default CheckOutDialog