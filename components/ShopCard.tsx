import { Star, StarHalf, StarIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

function ShopCard({shopName, rating, id, pricing,address, distance, servicesProvided, shopImageURL}:any) {
  return (
    <div className="hover:shadow-xl p-3 rounded-2xl cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="w-full ">
          <Image
            className="w-full rounded-2xl"
            src={`${shopImageURL}`}
            alt="shopImage"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="font-bold">{shopName} </div>

            <div className="flex justify-center items-center gap-2 bg-green-600 rounded-lg px-2 py-1 ">
                <div className="text-sm font-bold text-white">{rating} </div>
                <div><StarIcon fill="white" color="white" size={10}/></div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-500"> {servicesProvided?.slice(0, 2).join(', ') + (servicesProvided?.length > 2 ? '...' : '')} </div>

            <div className="text-sm text-gray-500 ">{pricing}</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-gray-400">{address}</div>

            <div className="text-xs text-gray-700 font-semibold">{distance}  km</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopCard;
