import React from "react";
import { TbHandClick } from "react-icons/tb";
import { phrases } from "../../utils/i18n";
export default function MenuItemsDiv({ item, dir, lan, handleRouting}) {
  const iconCSS = dir === "rtl" ? "ml-2" : "mr-2";
  const {visit} = phrases
  return (
    <ul
      onClick={() => handleRouting(item.pathName)}
      className="px-4 w-full h-full pb-6 pt-6 lg:pt-3 cursor-pointer  flex flex-col justify-between "
    >
      <div>
        <div className="flex items-center  ">
          <span className="md:hidden">{item.icon}</span>
          <h3
            className={`font-bold
          ${
            lan === "en" ? "text-xl md:text-lg" : "text-3xl md:text-2xl"
          } text-white text-bold `}
          >
            {item.name}
          </h3>
        </div>
        <p className={`${lan==='en'? "text-xs" :"text-base"} text-gray-100 `}>{item.info}</p>
      </div>
      <div>
        <div dir={dir} className="flex items-center py-3 h-8 ">
          <a
            className={`aLink flex flex-row justify-center items-center text-white bold border-b-2 border-white hover:text-white ${
              lan === "en" ? "text-left" : "text-right"
            }`}
          >
            <span className={iconCSS}>
              <TbHandClick size={18} />
            </span>{" "}
            {visit[lan]}{" "}
          </a>
        </div>
      </div>
    </ul>
  );
}
