import Image from "next/image";
import Link from "next/link";
import React from "react";

// relative left-[25%]

//justify-evenly items-center
function SidePanel() {
  return (
    <div className="hidden lg:flex flex-col pt-7 h-[70vh] ">
        <div className="relative ml-[30%] w-64 h-64 ">

      <div className="border-b border-gray-800 w-full pl-10 h-60 rotate-90"></div>
  
  </div>
      <div className="relative ml-[28%] w-64 h-64 mt-8">
        <Link href="https://www.linkedin.com/in/bint-e-zahra-sajid-hussain-43a173285/">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn Icon"
            width={20}
            height={20}
            className="-rotate-90 opacity-60"
          />
        </Link>
        <Link href="https://github.com/Syeda-Zahra79">
          <Image
            src="/github.svg"
            alt="Github Icon"
            width={20}
            height={20}
            className="-rotate-90 opacity-60 mt-4"
          />
        </Link>
        <Link href="/">
          <Image
            width="20"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/resume.png"
            alt="resume"
            className="-rotate-90 opacity-60 mt-4"
          />
        </Link>
      </div>
    </div>
  );
}

export default SidePanel;
