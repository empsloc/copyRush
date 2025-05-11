'use client'
import { FilesContext } from "@/context/FilesContext";
import { ReactNode, useState } from "react";

type ProviderProps = {
    children: ReactNode;
  };

  function Provider({children}: ProviderProps) {
  
    const [files, setFiles] = useState<File[]>([]);
  
 
    return (
      <div>
       <FilesContext.Provider value={{files,setFiles}}>
          {children}
          </FilesContext.Provider>
          </div>
    )
  }
  
  export default Provider