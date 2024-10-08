import React from "react";
import MyButton from "../layout/myButton";
import { FiRefreshCw } from "react-icons/fi";

const HeadingWrapper = ({ heading, desc, children, btnText, setState, onClick }) => {
  return (
    <div>
      <div className="m-6 flex flex-col lg:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-green-600">{heading}</h1>
          {desc && <p className="">{desc}</p>}
        </div>
        {btnText && (
          <div className="flex items-center space-x-8">
            <FiRefreshCw
              className="text-4xl mt-4 cursor-pointer"
              onClick={setState} // Trigger the state update to refresh
            />
            <MyButton text={btnText} onClick={onClick}/>
          </div>
        )}
      </div>
      {children}
    </div>
  );
};

export default HeadingWrapper;