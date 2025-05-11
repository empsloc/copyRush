import React from 'react'
import Image from "next/image";
import { CircleX, CloudCog, ReceiptText } from "lucide-react";
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


function CheckOutDialog() {
  const timeForDelivery = 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/assets/eta-icons/15-mins-filled.png';
  return (
    <AlertDialog>
      <AlertDialogTrigger className='cursor-pointer border-none'>View Cart</AlertDialogTrigger>
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
              <div className="font-bold">Delivery in 9 minutes</div>
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
        {/* Fotter */}

        <AlertDialogFooter>
          <AlertDialogAction className='w-full p-0 cursor-pointer'>
            <div className="flex w-full bg-green-600 justify-between items-center shadow-md rounded-md px-4 py-1">
              <div className="flex flex-col items-start">
                <div className="text-sm font-bold text-white">₹ 4567</div>
                <div className="text-sm text-white">Total</div>
              </div>
              <div className="text-white">Proceed {'>'}</div>
            </div>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>



  )
}

export default CheckOutDialog