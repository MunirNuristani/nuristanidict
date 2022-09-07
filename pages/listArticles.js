import React, { useEffect, useState } from 'react'
import { articles, minifyRecords } from '../utils/airTable'
import { useRouter } from 'next/router'
import SomethingWentWrong from '../components/SomethingWentWrong'
import { useAppContext } from '../context/AppContext'
import LoadingPage from '../components/LoadingPage'


function ListArticles({ listOfArticles, error }) {
  const { state, dispatch } = useAppContext()
  const { loadingPage } = state
  const router = useRouter()
  const cells = " text-right pr-2 hover:cursor-pointer border-b border-gray-300"
  const cells2 = " text-right border-b border-gray-300"
  const [sortedArticles, setSortedArticles] = useState([])
  const handleClick = (e, el) => {
    e.preventDefault()
    dispatch({ type: "LOADINGPAGE", payload: true })
    router.push({
      pathname: '/articles/[id]',
      query: { id: el },
    })
  }

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
    setSortedArticles(listOfArticles.sort((a, b) => {
      let nameA = a.fields.Article_Name
      let nameB = b.fields.Article_Name
      if (nameA < nameB) {
        return -1;
      }
      else if (nameA > nameB) {
        return 1;
      }
      return 0;
    }));
  },[listOfArticles])

  console.log("list: ", listOfArticles.sort((a, b) => a === b ? 0 : a < b ? -1 : 1))
  return (
    <>
      {error ? <SomethingWentWrong /> :
        loadingPage ? <LoadingPage /> : (<div dir='rtl' className=" my-10  flex flex-col justify-center mx-auto bg-white p-16  rounded-xl max-w-[900px] md:max-w-[700px] sm:max-w-[360px] text-xl ">
          <div className=" text-xl sm:hidden flex justify-center" >
            <table dir="rtl" className=" text-xl sm:hidden">
              <thead className=" text-center">
                <tr>
                  <th className={`${cells} text-3xl border-gray-500`}> عناوین مقاله
                  </th>
                  <th className={`${cells2} text-3xl border-gray-500`}>
                    نویسنده
                  </th>
                </tr>
              </thead>

              <tbody>
                {sortedArticles.map(el => (
                  <tr key={el.id}>
                    <td className={cells}
                      onClick={(e) => { handleClick(e, el.id) }}
                    > {el.fields.Article_Name}</td>
                    <td className={cells2}> {el.fields.Author_Name}</td>
                  </tr>))}
              </tbody>
            </table>

          </div>
          <div className=" text-xl md:hidden lg:hidden xl:hidden sm:block flex justify-center" >
            <table dir="rtl" className=" text-xl  ">
              <thead className=" text-center">
                <tr>
                  <th className={`${cells} text-3xl border-gray-500`}> عناوین مقاله
                  </th>
                </tr>
              </thead>
              <tbody>
                {listOfArticles.map(el => (
                  <tr key={el.id}>
                    <td className={cells}
                      onClick={(e) => { handleClick(e, el.id) }}
                    > {el.fields.Article_Name} <br />
                      <span>نویسنده: </span><span className='w-full text-left'>{el.fields.Author_Name}</span></td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>)}
    </>

  )
}

export default ListArticles

export async function getServerSideProps(context) {
  try {
    const allArticles = await articles.select().all();
    return {
      props: {
        listOfArticles: minifyRecords(allArticles)
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