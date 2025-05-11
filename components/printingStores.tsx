import React from "react";
import ShopCard from "./ShopCard";

function PrintingStores({shopList}:any) {
  return (
    <div className="flex flex-col gap-7">
      <div className="font-bold text-2xl">
      Explore shops near you
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {shopList.map((item:any,index:any)=>(
          <div key={index}><ShopCard shopName={item.shop_name} rating={item.rating} /></div>
        ))}
      
     
     
      </div>
    </div>
  );
}

export default PrintingStores;
