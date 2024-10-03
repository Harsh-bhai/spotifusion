import React from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";


export default function TagBadge({ text, index }) {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
  const color = colors[index % colors.length]; // Cycle through colors if there are more tags than colors

  return (
    <span className={`text-sm cursor-pointer flex items-center justify-between font-bold text-black ${color} px-2 py-1 m-2 rounded-full`}>
      <IoMdCloseCircleOutline />
      {text}
    </span>
  );
}
