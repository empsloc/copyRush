import { ListTile } from '@/components/listTile'
import TransactionSection from '@/components/transactionSection'
import { supabase } from '@/lib/supabaseClient';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

export default async function Transactions() {
    const user = await currentUser();
    const userEmail = user?.emailAddresses[0]?.emailAddress;
    const { data: userSession } = await supabase
    .from("userSession")
    .select()
    .eq("user_email", userEmail);
  return (
   <div className="">
            <TransactionSection/>
          </div>
  )
}

