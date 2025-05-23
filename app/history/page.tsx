"use client";
import React from "react";
import Image from "next/image";
import { ListTile } from "../../components/listTile";

export default function History() {
    return (
        <div className="">
            <div className="flex flex-col justify-center items-start gap-5">
                <h2 className="text-4xl font-bold">History</h2>
                <ul className="w-full">
                    <ListTile />
                </ul>
            </div>
        </div>
    );
}
