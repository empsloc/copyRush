'use client'
import { FilesContext } from "@/context/FilesContext";
import { FilesPropertiesContext } from "@/context/FilesPropertiesContext";
import { ReactNode, useState } from "react";

type ProviderProps = {
    children: ReactNode;
  };

  function Provider({children}: ProviderProps) {
  
    const [files, setFiles] = useState<File[]>([]);
    const [filesProperties, setFilesProperties] = useState<any>([])
  
 
    return (
      <div>
       <FilesContext.Provider value={{files,setFiles}}>
        <FilesPropertiesContext.Provider value={{filesProperties, setFilesProperties}}>
          {children}
          </FilesPropertiesContext.Provider>
          </FilesContext.Provider>
          </div>
    )
  }
  
  export default Provider