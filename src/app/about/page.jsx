import QnA from "@/components/about/qna";
import SpiningLogo from "@/components/layout/spiningLogo";
import React from "react";

const About = () => {
  return (
    <div className="hero  min-h-screen">
      <div className="flex flex-col space-y-10 justify-center items-center lg:space-x-10 mb-10">
            <SpiningLogo />
          <QnA />
          </div>
    </div>
  );
};

export default About;
