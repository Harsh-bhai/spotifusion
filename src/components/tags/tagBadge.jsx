import React from 'react';
import { IoIosCloseCircle } from "react-icons/io";

export default function TagBadge({ text, onClick, index, close }) {
  const colors = ['bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-purple-500'];
  const color = colors[index % colors.length];;

  return (
    <span className={`text-sm cursor-pointer flex items-center justify-between font-bold text-black ${color} px-2 py-1 m-2 rounded-full`} >
      {text}
      {(close ?? true) &&<IoIosCloseCircle  className="ml-1 text-xl" onClick={onClick ?? (() => { })}/>}
    </span>
  );
}
