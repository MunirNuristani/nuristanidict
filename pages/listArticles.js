import React from 'react'
import {articles, minifyRecords} from '../utils/airTable'
import { useRouter } from 'next/router'

function ListArticles({listOfArticles, error}) {
    const router = useRouter()

    const cells = "border-2 border-[#000] text-right pr-2 hover:cursor-pointer" 
    const cells2 = "border-2 border-[#000] text-center" 
    const handleClick = (e, el) =>{
      e.preventDefault()
        router.push({
            pathname: '/articles/[id]',
            query: { id: el },
        })
    }
    
  return (
    <div dir='rtl' className="container mt-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl px-16 py-5 rounded-xl w-[900px] text-xl">
         <table dir="rtl" className="border-2 text-xl">
                <thead className="border-2 text-center">
                    <tr>
                        <th className={`${cells} text-3xl`}> عنوان مقاله
                        </th>
                        <th className={`${cells2} text-3xl`}>
                           نویسنده
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listOfArticles.map(el=>( 
                    <tr key={el.id}>
                        <td className={cells}
                        onClick={(e)=>{handleClick(e, el.id)}}
                        > {el.fields.Article_Name}</td>
                        <td className={cells2}> {el.fields.Author_Name}</td>
                    </tr>))}
                </tbody>
        </table>
    </div>
  )
}

export default ListArticles

export async function getServerSideProps(context) {
try{
    const allArticles = await articles.select({sort:[{field: "No", direction: "asc"}]}).all();
    return {
      props: {
        listOfArticles: minifyRecords(allArticles)
      }
    }
    }catch (error){
        return {
            props: {
              error: "Error"
            }
        }
    }
}