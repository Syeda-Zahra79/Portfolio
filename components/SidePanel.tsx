import Image from "next/image";
import Link from "next/link";
import React from "react";

function SidePanel() {
  return (
    <div className="hidden lg:flex flex-col pt-7 h-[70vh] ">
        <div className="relative ml-[30%] w-64 h-64 2xl:w-96 2xl:h-96 2xl:ml-[5%]">

      <div className="border-b border-gray-800 w-full pl-10 h-60 rotate-90"></div>
  
  </div>
      <div className="relative ml-[28%] w-64 h-64 mt-8 2xl:w-96 2xl:h-96 2xl:ml-[20%]">
        <Link target="_blank" href="https://www.linkedin.com/in/bint-e-zahra-sajid-hussain-43a173285/">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn Icon"
            width={20}
            height={20}
            className="-rotate-90 opacity-60 2xl:w-8"
          />
        </Link>
        <Link target="_blank" href="https://github.com/Syeda-Zahra79">
          <Image
            src="/github.svg"
            alt="Github Icon"
            width={20}
            height={20}
            className="-rotate-90 opacity-60 mt-4 2xl:w-8"
          />
        </Link>
        <Link href="/resume.pdf" target="_blank">
          <Image
            width="20"
            height="25"
            src="https://img.icons8.com/ios-glyphs/30/resume.png"
            alt="resume"
            className="-rotate-90 opacity-60 mt-4 2xl:w-8" 
          />
        </Link>
      </div>
    </div>
  );
}

export default SidePanel;
