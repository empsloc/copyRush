"use client"
import React, { useEffect, useState } from 'react'
import { ListTile } from './listTile'
import { supabase } from '@/lib/supabaseClient';
import { useUser } from '@clerk/nextjs';
import { Button } from './ui/button';

export default async function TransactionSection() {
    const { user } = useUser();
    const  [userEmail, setuserEmail] = useState<any>()
    useEffect(()=>{

    },[user])

const showTransactions=()=>{
 
    console.log("buttonClicked")
}
  return (
      <div className="flex flex-col justify-center items-start gap-5">
                      <h2 className="text-4xl font-bold">Transactions</h2>
                      <ul className="w-full">

                          <ListTile />
                      </ul>
                      <Button onClick={()=>showTransactions()}>Show transactions</Button>

                  </div>
  )
}

