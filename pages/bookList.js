import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { books, minifyDocs } from "../utils/airTable";
import { useAppContext } from '../context/AppContext'
import LoadingPage from "../components/LoadingPage";

export default function Index({ allBooks }) {
  const { state, dispatch } = useAppContext()
  const { loadingPage } = state
  const router = useRouter();
  const newBooks = minifyDocs(allBooks)

  const openBook = (id) => {
    router.push({
      pathname: '/books/[book]',
      query: { book: id }
    })
  }
  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
  }, [allBooks])

  return (
    <>{
      loadingPage ? <LoadingPage /> :

        <div className="container mt-10 md:mt-[120px] sm:mt-[20px] flex  flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-12 sm:p-2 rounded-xl max-w-[1000px] md:max-w-[700px] sm:max-w-[360px] text-xl relative">
          <div dir="rtl" className="w-full flex flex-row flex-wrap flex-grow">
            {newBooks.map(book => (
              <div key={book.index}
                className="w-[200px] h-[300px] rounded-xl border-1 border-gray-200 shadow-xl flex flex-col justify-center items-center bg-gray-300 hover:shadow-2xl cursor-pointer m-3"
                onClick={() => openBook(book.id)}
              >
                <Image src={book.cover} alt="bookCover" height={200} width={150} />
                <h2 className="text-center mx-auto text-lg">
                  {book.title}
                </h2>
                <h3 className="align-center mx-2">نویسنده: {book.author}</h3>
              </div>
            ))}
          </div>
        </div>
    }</>
  );
}

export async function getServerSideProps(context) {
  try {
    const allBooks = await books.select({}).all();
    return {
      props: {
        allBooks: JSON.parse(JSON.stringify(allBooks))
      }
    }
  } catch (error) {
    return {
      props: {
        error: "Error"
      }
    }
  }
}