"use client";
import Link from 'next/link';
import React from 'react';

const OptionCard = ({ symbol, name, description, route }) => {
  return (
    <Link href={route}>
        <div
          className="group flex flex-col justify-center items-center p-4 border border-green-400 rounded-lg
                     hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.7)] hover:shadow-green-400/70 transition-all
                     transform hover:scale-105 cursor-pointer max-w-xs h-56"
        >
          <div className="text-5xl text-green-400 mb-2">{symbol}</div>
          <span className="font-medium text-2xl">{name}</span>
          <p className="text-sm text-gray-400 text-center mt-1 overflow-hidden group-hover:text-green-400 transition-colors">
            {description}
          </p>
        </div>
    </Link>
  );
};

export default OptionCard;
