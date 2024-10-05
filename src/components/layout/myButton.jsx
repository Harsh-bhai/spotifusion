import React from "react";

const MyButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="btn lg:btn-lg bg-green-500 hover:bg-green-400 hover:shadow-[0_0_15px_5px_rgba(34,197,94,0.7)] hover:shadow-green-400 text-black rounded-full mt-4">
      <span>{text}</span>
    </button>
  );
};

export default MyButton;
