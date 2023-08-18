import React, { useEffect, useState } from "react";

import Image from "next/image";
import img from "../../public/assets/heroImage01.png";
import logo from "../../public/logo_original.png";
import { phrases } from "../../utils/i18n";

function MainpageHero() {
  const { mainH1, statementTitle } = phrases;
  const [dir, setDir] = useState("");
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  return (
    <div
      className={` ${
        lan === "en" ? "font-['Poppins']" : ""
      } relative w-[98vw] h-[80vh] flex justify-center items-center my-4 sm:my-1 rounded-xl sm:min-h-[115vh] sm:mb-10`}
    >
        <div
        className={`absolute w-4/6 h-5/6  rounded-xl  sm:my-1 gradiant sm:bg-inherit flex justify-around items-center sm:flex-col drop-shadow-2xl`}
      >
        <div className="flex flex-col justify-center items-center px-8 sm:p-4 ">
          <div className=" xl:w-[150px] xl:h-[172px] lg:w-[150px] lg:h-[1720px] md:w-[100px] md:h-[115px] sm:w-[150px] sm:h-[172px] relative  rounded">
            <Image
              src={logo}
              alt="MTGKCF logo"
              layout="fill"
              fill
              objectFit="cover"
              objectPosition="center"
              loading="lazy"
            />
          </div>
          <h1
            dir={dir}
            className={`
              ${
                lan === "en"
                  ? "text-4xl md:text-2xl sm:text-3xl"
                  : "text-5xl md:text-3xl sm:text-4xl"
              }
              text-center sm:text-center color-black-500 mt-6 w-full`}
          >
            {mainH1[lan]}{" "}
          </h1>
          {/* <h2 dir={dir} className={`
            ${lan === "en" ? "text-2xl md:text-lg" :
              "text-3xl md:text-xl"} text-center `}>
            {" "}
            {statementTitle[lan]}
          </h2> */}
        </div>

        <div className="flex justify-center items-center my-10 mx-4 ">
          <div className=" lg:w-[300px] lg:h-[430px]  xl:w-[300px] xl:h-[430px] md:w-[180px] h-[260px] sm:w-[300px] sm:h-[430px] relative opacity-1 rounded">
            <Image
              src={img}
              alt="Nuristani Carving"
              layout="fill"
              fill
              objectPosition="center"
              loading="lazy"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainpageHero;
