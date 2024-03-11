import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { books, minifyDocs } from "../utils/airTable";
import { useAppContext } from "../context/AppContext";
import LoadingPage from "../components/LoadingPage";
import { phrases } from "../utils/i18n";
import SomethingWentWrong from "../components/SomethingWentWrong";
export default function Index({ allBooks, error }) {
  const { author,translator } = phrases;
  const { state, dispatch } = useAppContext();
  const [dir, setDir] = useState("");
  const { loadingPage } = state;
  const router = useRouter();
  const newBooks = minifyDocs(allBooks);
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");
  const openBook = (id) => {
    router.push({
      pathname: "/books/[book]",
      query: { book: id },
    });
  };
  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false });
    console.log(newBooks);
  }, [allBooks]);

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  return (
    <>
      {error ? (
        <SomethingWentWrong />
      ) : loadingPage ? (
        <LoadingPage />
      ) : (
        <div className="container my-10 md:mt-[120px]  flex flex-col justify-center mx-auto bg-white p-5 rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px] text-xl sm:items-center">
          <div
            dir={dir}
            className="w-full flex flex-row flex-wrap flex-grow justify-center"
          >
            {newBooks?.map((book) => (
              <div
                key={book.index}
                className="w-[200px] h-[300px] rounded-xl border-1 border-gray-200 shadow-xl flex flex-col justify-center items-center bg-gray-200 hover:shadow-2xl cursor-pointer m-3"
                onClick={() => openBook(book.id)}
              >
                <Image
                  src={book.cover}
                  alt="bookCover"
                  height={200}
                  width={150}
                />
                <h2 className="text-center mx-auto text-xl">{book.title}</h2>
                <h3 className="align-center mx-2">
                  {" "}
                  {author[lan]}: {book.author}
                </h3>
                <div>
                  {book?.translator?.length > 0 ? (
                    <h3 className="align-center mx-2">
                      {" "}
                      {translator[lan]}: {book.translator}
                    </h3>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const allBooks = await books.select({}).all();
    return {
      props: {
        allBooks: JSON.parse(JSON.stringify(allBooks)),
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
