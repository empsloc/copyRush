import React from "react";
import ShopCard from "./ShopCard";
import Link from "next/link";

function PrintingStores({ shopList }: any) {
  return (
    <div className="flex flex-col gap-7">
      <div className="font-bold text-2xl">Explore shops near you</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {shopList.map((item: any, index: any) => (
          <Link href={{ pathname: '/upload', query: { shopID: item.shop_id } }}  key={index}>
            <ShopCard
              shopName={item.shop_name}
              rating={item.rating}
              id={item.shop_id}
              pricing={item.pricing}
              address={item.address}
              distance={item.distance}
              servicesProvided = {item.services_provided}
              shopImageURL = {item.shop_image_url}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PrintingStores;
