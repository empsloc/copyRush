import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { supabase } from '@/lib/supabaseClient';



export async function uploadFiles(files: File[]) {
  const uploadedFiles = [];

  for (const file of files) {
    const { data, error } = await supabase.storage
      .from('files') // your bucket name
      .upload(`uploads/${Date.now()}_${file.name}`, file);

    if (error) {
      console.error(`Error uploading ${file.name}:`, error.message);
      continue;
    }

    uploadedFiles.push(data);
  }

  return uploadedFiles;
}

