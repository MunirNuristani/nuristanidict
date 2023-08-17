import React, { useEffect, useState } from "react";
import { articles, minifyRecords } from "../utils/airTable";
import { useRouter } from "next/router";
import SomethingWentWrong from "../components/SomethingWentWrong";
import { useAppContext } from "../context/AppContext";
import LoadingPage from "../components/LoadingPage";
import { phrases } from "../utils/i18n";

function ListArticles({ listOfArticles, error }) {
  const {
    articleTitle,
    articleAuthor,
    language,
    publish,
    english,
    pashto,
    farsi,
    nuristani,
  } = phrases;
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state;
  const [dir, setDir] = useState("");
  const router = useRouter();
  const cells = `${
    lan === "en" ? "text-left" : "text-right"
  } pr-2 hover:cursor-pointer border-b border-gray-300 `;
  const cells2 = `${
    lan === "en" ? "text-left" : "text-right"
  } border-b border-gray-300 min-w-[100px]`;
  const [sortedArticles, setSortedArticles] = useState([]);

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
    console.log("list of articles:", listOfArticles);
  }, [lan]);
  useEffect(() => {});
  const handleClick = (e, el) => {
    e.preventDefault();
    dispatch({ type: "LOADINGPAGE", payload: true });
    router.push({
      pathname: "/articles/[id]",
      query: { id: el },
    });
  };

  const getLanguage = (writeLang, lang) => {
    console.log("run:", writeLang, lang)
    switch (writeLang) {
      case "en":
        return english[lang];
      case "prs":
        return farsi[lang];
      case "ps":
        return pashto[lang];
      case "nr":
        return nuristani[lang];
      default:
        return "";
    }
  };

  useEffect(() => {
    setSortedArticles(
      listOfArticles.sort((a, b) => {
        let nameA = a.fields.Article_Name;
        let nameB = b.fields.Article_Name;
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    );
    dispatch({ type: "LOADINGPAGE", payload: false });
  }, [listOfArticles]);

  return (
    <>
      {error ? (
        <SomethingWentWrong />
      ) : loadingPage ? (
        <LoadingPage />
      ) : (
        <div
          dir={dir}
          className={` ${
            lan === "en" ? "font-['Poppins'] text-base" : "text-xl"
          } container my-10 md:mt-[120px]  flex flex-col justify-center mx-auto bg-white p-5 rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px] `}
        >
          <div className="  sm:hidden flex justify-center">
            <table dir={dir} className="  sm:hidden">
              <thead className=" text-center">
                <tr>
                  <th className={`${cells} text-3xl border-gray-500`}>
                    {" "}
                    {articleTitle[lan]}{" "}
                  </th>
                  <th className={`${cells2} text-xl border-gray-500`}>
                    {articleAuthor[lan]}
                  </th>
                  <th className={`${cells2} text-xl border-gray-500`}>
                    {publish[lan]}
                  </th>
                  <th className={`${cells2} text-xl border-gray-500`}>
                    {language[lan]}
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedArticles.map((el) => (
                  <tr key={el.id}>
                    <td
                      className={cells}
                      onClick={(e) => {
                        handleClick(e, el.id);
                      }}
                    >
                      {lan === "en"
                        ? el.fields.Article_Name_en
                        : el.fields.Article_Name}
                    </td>
                    <td className={cells2}>
                      {" "}
                      {lan === "en"
                        ? el.fields.Author_Name_en
                        : el.fields.Author_Name}
                    </td>
                    <td className={cells2}> {}</td>
                    <td className={cells2}>
                      {" "}
                      {getLanguage(el.fields.language, lan)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className=" text-xl md:hidden lg:hidden xl:hidden sm:block flex justify-center">
            <table dir={dir} className=" text-xl  ">
              <thead className=" text-center">
                <tr>
                  <th className={`${cells} text-3xl border-gray-500`}>
                    {" "}
                    {articleTitle[lan]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfArticles.map((el) => (
                  <tr key={el.id}>
                    <td
                      className={cells}
                      onClick={(e) => {
                        handleClick(e, el.id);
                      }}
                    >
                      {" "}
                      {el.fields.Article_Name} <br />
                      <span>{articleAuthor[lan]}: </span>
                      <span className="w-full text-left">
                        {el.fields.Author_Name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ListArticles;

export async function getServerSideProps(context) {
  try {
    const allArticles = await articles.select().all();
    return {
      props: {
        listOfArticles: minifyRecords(allArticles),
      },
    };
  } catch (error) {
    return {
      props: {
        error: "Error",
      },
    };
  }
}
