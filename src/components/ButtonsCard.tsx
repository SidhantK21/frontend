"use client";
// import React from "react";

// import { IconClipboard } from "@tabler/icons-react";
// import { cn } from "../utils/cn";

const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    // add the link to the resume file in the folder and write it here so that i resume can be downloaded 
    link.href = 'src/assets/files/exampleDoc.pdf';
    // Set the download attribute to suggest a filename
    link.download = 'exampleDoc.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };
export const ButtonsCard=()=>{ 
    return (
        <button  onClick={handleDownload} className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Know More !
            </span>
        </button>
    );
};
