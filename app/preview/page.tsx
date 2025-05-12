import React from 'react'
import { FilePlus2, Plus, X } from "lucide-react";
import { DocumentPreview } from '@/components/filePreview';
import { Button } from '@/components/ui/button';
import { PrintSettingTile } from '@/components/printSettingTile';
import AddMoreFiles from '@/components/addMoreFiles';



function Preview() {


    return (
        <div className="">
            <div className="bg-[rgb(232,234,245)] pb-5 space-y-5">
                {/* Preview section */}
                <div className=" space-y-5">
                    {/* Title -> PrintOut Preview */}
                    <div className="flex justify-center">
                        <h1 className="text-3xl text-black font-bold mt-5">
                            Print Out Preview
                        </h1>
                    </div>

                    {/* List of files displayed here */}
                    <div className='listOfFile flex flex-row gap-5  overflow-x-auto hitespace-nowrap custom-scrollbar justify-center scroll-auto'>
                        
                       
                            <DocumentPreview  />
                       

                        {/* Add more file card */}
                       <AddMoreFiles/>
                    </div>

                    {/* Alternate button to add more files */}
                    {/* <div className="flex justify-center">
                        <Button className="bg-green-600 mt-5 mb-5 hover:bg-green-700 text-base font-medium text-white cursor-pointer">
                            <FilePlus2 color="#ffffff" />
                            Add more files
                        </Button>
                    </div> */}
                </div>
            </div>

            {/* Configuration section for prints */}
            <div className=" space-y-5">
                <div className="">
                    <h1 className='text-black text-xl font-bold mt-5'>
                        Print settings
                    </h1>
                    <h1 className='text-black text-xs font-extralight'>
                        Choose print settings for files
                    </h1>
                </div>

             
                    <PrintSettingTile/>
               
            </div>
        </div>
    )
}

export default Preview