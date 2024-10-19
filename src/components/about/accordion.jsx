import React from "react";

const Accordion = ({title, desc}) => {
  return (
    <div className="collapse collapse-plus bg-base-200 mb-4">
      <input type="checkbox"   />
      <div className="collapse-title text-2xl font-medium text-green-600">
        {title}
      </div>
      <div className="collapse-content text-xl">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Accordion;
