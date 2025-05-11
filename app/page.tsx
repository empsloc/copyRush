import CheckOutDialog from "@/components/checkOutDialog";
import Hero from "@/components/Hero";
import PrintingStores from "@/components/printingStores";
import ShopCard from "@/components/ShopCard";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: shopList } = await supabase.from("shopList").select();
  return (
    <div>
     <Hero shopList={shopList}/>
    
     <PrintingStores shopList={shopList} />
    </div>
  );
}
