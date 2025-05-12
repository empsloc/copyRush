import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import { supabase } from '@/lib/supabaseClient';



export async function uploadFile(file: File) {
  if (!file) return;

  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}.${fileExt}`; // unique file name
  const filePath = `uploads/${fileName}`; // folder path

  const { data, error } = await supabase.storage
    .from('files') // replace with your bucket name
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading file:', error.message);
    return null;
  }

  // Get public URL
  const { data: urlData } = supabase.storage
    .from('files')
    .getPublicUrl(filePath);

  return urlData?.publicUrl; // return the file's public URL
}

