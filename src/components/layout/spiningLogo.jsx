import React from "react";
import Image from "next/image";

const SpiningLogo = () => {
  return (
    <div className="relative">
      <Image
        src="/logo/electron.png"
        alt="SpottiFusion Logo"
        width={200}
        height={200}
        className="animate-slowSpin size-24 lg:size-52"
      />
      <Image
        src="/logo/spotify.png"
        alt="SpottiFusion Logo"
        width={50}
        height={50}
        className="absolute size-8 lg:size-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default SpiningLogo;
