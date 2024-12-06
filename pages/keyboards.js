import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import LoadingPage from "../components/LoadingPage";
import { phrases } from "../utils/i18n";
import Image from "next/image";
import buttonCSS from "../components/CSS/TailwindCSS";
function Page() {
  const { keyboards, downloadKeyboardText, download, installationGuide } =
    phrases;

  const [dir, setDir] = useState("");
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state;
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false });
  }, [dispatch]);
  const buttonCSS = "relative  min-w-[110px] h-[50px] justify-center after:content-[''] after:absolute after:top-0 after:left-0 after:border-2 after:rounded-md after:border-[#1B57A6] after:w-full after:h-full  m-2 flex items-center px-4 rounded-md after:hover:border-4 after:hover:border-[#1B57A6] after:duration-500 after:ease-in  after:hover:ease-out after:hover:duration-500 disabled:text-[gray] disabled:border-[gray] disabled:after:border-[gray] text-2xl mt-5"
  return (
    <>
      {loadingPage ? (
        <LoadingPage />
      ) : (
        <div
          dir={dir}
          className="container mt-10 md:mt-[120px] sm:mt-[20px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl sm:px-8 px-16 py-5 mb-16 rounded-xl xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[360px] text-xl "
        >
          <div className="flex justify-center items-center w-full h-full flex-col gap-3 py-5 ">
            <h2 className="text-3xl text-center "> {keyboards[lan]} </h2>
            <div className="w-2/3 h-full relative">
              <Image
                src={`/images/keyboard/${"Keyboard"}.jpg`}
                alt="Keyboard"
                layout="responsive"
                loading="lazy"
                width={1200}
                height={400}
              />
            </div>

            <div className="w-2/3 h-full relative">
              <Image
                src={`/images/keyboard/${"Keyboard_shift"}.jpg`}
                alt="Keyboard_shift"
                layout="responsive"
                loading="lazy"
                width={1200}
                height={400}
              />
            </div>
            <p className="text-center">{downloadKeyboardText[lan]} :</p>
            <div>
              <button
                className={buttonCSS}
                onClick={() =>
                  window.open("/assets/keyboard/kalasha.zip", "_blank")
                }
              >
                {download[lan]}
              </button>
              <button
                className={buttonCSS}
                onClick={() =>
                  window.open("/assets/guides/Installation_Guide_en.pdf", "_blank")
                }
              >
                {installationGuide[lan]}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
