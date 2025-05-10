import React from "react";
import ShopCard from "./ShopCard";

function PrintingStores() {
  return (
    <div className="flex flex-col gap-7">
      <div className="font-bold text-2xl">
      Explore shops near you
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <ShopCard />
      <ShopCard />
      <ShopCard />
      </div>
    </div>
  );
}

export default PrintingStores;
