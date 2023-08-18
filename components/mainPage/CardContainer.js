import React, { useState, useEffect } from "react";

import { FiBook, FiBookOpen } from "react-icons/fi";
import { HiOutlineDocument, HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlinePicture, AiFillPicture } from "react-icons/ai";
import { GiSecretBook, GiSpellBook, GiIonicColumn } from "react-icons/gi";
import { TiSortAlphabetically } from "react-icons/ti";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/AppContext";
import { phrases } from "../../utils/i18n";

function CardContainer() {
  const {
    books,
    booksInfo,
    articles,
    articleInfo,
    dictionary,
    dicInfo,
    statementTitle,
    alphabet,
    alphabetInfo,
    landscapeImages,
    landscapeImagesInfo,
    historicalImages,
    historicalImagesInfo,
  } = phrases;

  const [change, setChange] = useState({
    alphabet: false,
    book: false,
    document: false,
    dic: false,
    histPics: false,
    landPics: false,
  });
  const [dir, setDir] = useState("");
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  const router = useRouter();
  const { dispatch } = useAppContext();

  const handleRouting = (route) => {
    router.push(route);
    dispatch({ type: "LOADINGPAGE", payload: true });
  };

  const cardInfo = [
    {
      title: alphabet[lan],
      text: alphabetInfo[lan],
      icon: <TiSortAlphabetically size={50} className="" />,
      type: "alphabet",
      route: "/alphabets",
    },
    {
      title: books[lan],
      text: booksInfo[lan],
      icon: <FiBook size={50} className="" />,
      type: "book",
      route: "/bookList",
    },
    {
      title: dictionary[lan],
      text: dicInfo[lan],
      icon: <GiSecretBook size={50} className="" />,
      type: "dic",
      route: "/dictionary/dictionary",
    },
    {
      title: articles[lan],
      text: articleInfo[lan],
      icon: <HiOutlineDocument size={50} className="" />,
      alterIcon: <HiOutlineDocumentText size={50} className="" />,
      type: "document",
      route: "/listArticles",
    },
    {
      title: landscapeImages[lan],
      text: landscapeImagesInfo[lan],
      icon: <AiOutlinePicture size={50} className="" />,
      type: "landPics",
      route: "/landscapeImages",
    },
    {
      title: historicalImages[lan],
      text: historicalImagesInfo[lan],
      icon: <GiIonicColumn size={50} className="" />,
      type: "histImage",
      route: "/historicalImages",
    },
  ];

  return (
    <section
      dir={dir}
      className={` ${
        lan === "en" ? "font-['Poppins']" : ""
      } px-7 lg:px-10  xl:px-14 w-4/6 m-auto flex flex-col justify-center items-center`}
    >
      <hr />
      <div className="pt-4">
        <div className="m-x-auto text-center px-4">
          <h2
            className={`font-semibold ${
              lan === "en" ? "text-2xl" : "text-3xl"
            }  m-x-auto text-center mb-5`}
          >
            {statementTitle[lan]}
          </h2>
        </div>
      </div>
      <div className="m-x-auto max-w-2/3 sm:max-w-full sm:px-0 px-8 my-10 md:my-5 ">
        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2 gap-y-[0] ">
          {cardInfo.map((card, index) => (
            <div
              key={index}
              className=" flex flex-col justify-start items-center rounded-xl m-4 sm:m-2 px-6 pb-8 pt-4 hover:shadow-lg cursor-pointer border-2 min-h-[250px] cardGradiant drop-shadow-lg"
              onClick={() => handleRouting(card?.route)}
            >
              <span>{card.icon}</span>
              <h4
                className={` ${
                  lan === "en" ? "text-xl" : "text-2xl"
                }  font-bold my-2`}
              >
                {card.title}
              </h4>
              <p className={` ${lan === "en" ? "text-lg" : "text-xl"}`}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardContainer;
