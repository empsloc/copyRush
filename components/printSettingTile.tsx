"use client";
import { FileCog, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/button";
import CheckOutDialog from "./checkOutDialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FilesContext } from "@/context/FilesContext";
import { useSearchParams } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export const PrintSettingTile = () => {
  const blackWhiteSvg =
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/bnw_print.png";
  const colorPrintSvg =
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/color_print.png";
  const portaitSvg =
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/potrait_print.png";
  const landScapeSvg =
    "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/ui/print/landscape_print.png";
  var isExpanded = false;
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [numberOfCopies, setNumberOfCopies] = useState(1);
  const [colorOfPrint, setColorOfPrint] = useState("b&w");
  const [orientationOfPrint, setOrientationOfPrint] = useState("portrait");
  const [sidesOfPrint, setSidesOfPrint] = useState("single");
  const [userEmail, setUserEmail] = useState<any>();
  const [price, setPrice] = useState(100);
  const { files, setFiles } = useContext(FilesContext);
  const searchParams = useSearchParams();
  const shopID = searchParams.get("shopID");
  const { user, isLoaded } = useUser();
  const updateFileSetting = (index: number, key: string, value: any) => {
    const updatedFiles = [...files];
    updatedFiles[index][key] = value;
    setFiles(updatedFiles);
  };
  useEffect(() => {
    console.log(shopID);
    setUserEmail(user?.primaryEmailAddress?.emailAddress);
    console.log(userEmail);
  }, [user]);

  return (
    <div className="fileSettingTile flex flex-col gap-5 w-full rounded-2xl  p-5">
      {files.map((file: any, index: any) => (
        <div key={index} className="flex flex-col gap-5 w-full rounded-2xl  py-5">
          {/* File name and configuration settings of print */}
          <div className="fileName flex flex-row justify-between items-center">
            <h2 className="text-black text-md font-bold">{file.name}</h2>
            {/* <div className="flex flex-row items-center p-1 rounded-md border gap-1 border-green-600 cursor-pointer">
                    <FileCog size={16} color="#23ce0c" />
                    <h2 className="text-green-600 text-sm font-small">
                        Configure Settings
                    </h2>
                </div> */}
          </div>

          {/* Horizantal divider */}
          <div className="dividerBorder border-t border-gray-300"></div>

          {/* Grid of four options */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-between">
            {/* Choosing between black and white */}
            <div className="flex md:flex-col gap-3 items-center justify-between">
              <div className="">
                <h1 className="text-black text-md font-bold">
                  Select print color
                </h1>
                <h1 className="text-black text-xs font-extralight">
                  Choose print colour for files
                </h1>
              </div>
              <div className="flex  justify-evenly gap-2">
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => updateFileSetting(index, "colorOfPrint", "b&w")}
                    className={`border border-green-700 ${
                      file.colorOfPrint === "b&w" ? "bg-green-100" : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      src={blackWhiteSvg}
                      alt="b&w"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">B&W</h1>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => updateFileSetting(index, "colorOfPrint", "color")}
                    className={`border border-green-700 ${
                      file.colorOfPrint === "color"
                        ? "bg-green-100"
                        : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      src={colorPrintSvg}
                      alt="color"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">Colour</h1>
                </div>
              </div>
            </div>

            {/* Choosing orientation for printing */}
            <div className="flex md:flex-col gap-3 items-center justify-between">
              <div>
                <h1 className="text-black text-md font-bold">
                  Select orientation
                </h1>
                <h1 className="text-black text-xs font-extralight">
                  Choose print settings for files
                </h1>
              </div>
              <div className="flex justify-evenly  gap-2">
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => updateFileSetting(index, "orientationOfPrint", "portrait")}
                    className={`border border-green-700 ${
                      file.orientationOfPrint === "portrait"
                        ? "bg-green-100"
                        : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      className=""
                      src={portaitSvg}
                      alt="portrait"
                      width={20}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">Portait</h1>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    onClick={() => updateFileSetting(index, "orientationOfPrint", "landscape")}
                    className={`border border-green-700 ${
                      file.orientationOfPrint === "landscape"
                        ? "bg-green-100"
                        : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      src={landScapeSvg}
                      alt="landscape"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">
                    Landscape
                  </h1>
                </div>
              </div>
            </div>

            {/* Back to back or single side */}
            <div className="flex md:flex-col gap-3 items-center justify-between">
              <div>
                <h1 className="text-black text-md font-bold">
                  Single side / Both side
                </h1>
                <h1 className="text-black text-xs font-extralight">
                  Choose print settings for files
                </h1>
              </div>
              <div className="flex   gap-2">
                <div className="flex flex-col items-center">
                  <div
                   onClick={() => updateFileSetting(index, "sidesOfPrint", "single")}
                    className={`border border-green-700 ${
                      file.sidesOfPrint === "single"
                        ? "bg-green-100"
                        : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      src={"singleSide.svg"}
                      alt="portrait"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">
                    Single side
                  </h1>
                </div>
                <div className="flex flex-col items-center">
                  <div
                                       onClick={() => updateFileSetting(index, "sidesOfPrint", "double")}

                    className={`border border-green-700 ${
                      file.sidesOfPrint === "double"
                        ? "bg-green-100"
                        : "bg-transparent"
                    } rounded-xl w-[50px] h-[50px] flex items-center justify-center cursor-pointer`}
                  >
                    <Image
                      src={"bothSide.svg"}
                      alt="landscape"
                      width={30}
                      height={30}
                    />
                  </div>
                  <h1 className="text-green-600 text-sm font-light">
                    Both side
                  </h1>
                </div>
              </div>
            </div>

            {/* Choosing number of copies */}
            <div className="flex md:flex-col gap-3 items-center justify-">
              <div>
                <h1 className="text-black text-md font-bold">
                  Number of copies
                </h1>
                <h1 className="text-black text-xs font-extralight">
                  Choose print settings for files
                </h1>
              </div>
              <div className="flex mt-2 flex-row border border-green-700 rounded-xl w-[120px] h-[50px] items-center justify-between px-2">
                <div
                  onClick={() => updateFileSetting(index, "numberOfCopies", (file.numberOfCopies || 1) - 1)}
                  className="cursor-pointer"
                >
                  <Minus size={20} color="#07630b" />
                </div>
                <div className="text-lg text-black font-bold select-none ">
                  {file.numberOfCopies}
                </div>
                <div
                  onClick={() => updateFileSetting(index, "numberOfCopies", (file.numberOfCopies || 1) + 1)}
                  className="cursor-pointer"
                >
                  <Plus size={20} color="#076d0c" />
                </div>
              </div>
              {/* <h1 className="text-green-600 text-sm font-light">Copies</h1> */}

            </div>
          </div>

          {/* Horizantal divider */}
          <div className="dividerBorder border-t border-gray-300"></div>

          {/* TextArea for more specification */}
          <div>
            <div className="flex justify-between gap-4">
              <h2 className="text-black text-md font-bold">
                Specify any other requirements
              </h2>
              <Button
                onClick={() => setDetailsOpen(!detailsOpen)}
                className="cursor-pointer"
              >
                {detailsOpen ? "Remove details" : "Add details"}
              </Button>
            </div>
            {detailsOpen && (
              <div>
                <textarea className="w-full border rounded-md"></textarea>
              </div>
            )}
          </div>
        </div>
      ))}

      <div className="flex justify-between">
        <div className="flex gap-5">
          <div>
            <Image src="/globe.svg" alt="" width={50} height={50} />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold text-gray-600">
              Total files : {files.length}
            </div>
            <div className="font-bold">₹ {2*files.length}</div>
          </div>
        </div>
        <div>
          <Button className="bg-green-600 p-2 rounded-lg hover:bg-green-700 text-white cursor-pointer">
            <CheckOutDialog
              shop_id={shopID}
              number_of_copies={numberOfCopies}
              color_of_print={colorOfPrint}
              orientation_of_print={orientationOfPrint}
              sides_of_print={sidesOfPrint}
              price = {price}
              user_email = {userEmail}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
