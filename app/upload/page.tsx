import UploadFilesWidget from "@/components/UploadFilesWidget"
import { createClient } from "@/lib/supabase/server";
import { useRouter } from 'next/router';
import React, { createContext } from 'react'

export default async function  UploadFiles() {

  return (
    <div>
            
        <UploadFilesWidget/>
    </div>
  )
}
