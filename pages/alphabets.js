import React, {useEffect} from 'react'
import { letters, minifyRecords } from '../utils/airTable';
import SomethingWentWrong from '../components/SomethingWentWrong';
import {useAppContext } from '../context/AppContext'
import LoadingPage from '../components/LoadingPage'

export default function Alphabets({kalasha, error}) {
    const { state, dispatch } =useAppContext()
    const {loadingPage } = state
    const cells = "border-2 border-[#000] text-center w-36" 
    const lastCell = "border-2 border-[#000] text-center w-56"
   
    useEffect(()=>{
       dispatch({type:"LOADINGPAGE", payload: false}) 
    },[kalasha])
   

    return (
        <>
        {error? 
            (<SomethingWentWrong />) :(
        loadingPage? <LoadingPage />:(
        <div dir='rtl' className="container my-10 md:mt-[120px]  flex flex-col justify-center mx-auto bg-white p-5 rounded-xl max-w-[900px] md:max-w-[700px] sm:max-w-[360px] sm:mt-[20px]">
            <div className='flex  flex-col justify-center items-center text-3xl my-4'>
                <h3>نورستاني(کلښه الا) به باښ </h3>
                <h3>د نورستاني (کلښه ژبې) الفبا  </h3>
            </div>
            <table dir="rtl" className="border-2 text-xl">
                <thead className="border-2 text-center">
                    <tr>
                      
                        <th className={`${cells} `} >باښ
                            (ټکی )
                             (حرف)
                        </th>
                        <th className={cells}> لاتین</th>
                        <th className={cells}>باښ به نام
                            <br/>(د ټکی نوم ) <br />
                            (نام حرف )
                        </th>
                        <th className={lastCell}> بـــــــــاښ کــــــــــــه<br/>
                            ( په کلمو کی ) (درکلمات )<br />
                            (د کلمې اول ،منـځ او اخــرکې )<br />
                            (دراول، درمیـان وآخـرکلـمـه)
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {kalasha.map(el=>(
                        
                    <tr key={el.id}>
                       
                        <td className={cells}> {el.fields.Letter}</td>
                        <td className={cells}> {el.fields.Latin}</td>
                        <td className={cells}> {el.fields.Name}</td>
                        <td className={lastCell}> {el.fields.Description} </td>
                    </tr>
                     )) }   
                </tbody>
            </table>
        </div>))
        }
        </>
    )
                    
}

export async function getServerSideProps(context) {
    try{
    const allLetters = await letters.select({sort:[{field: "No", direction: "asc"}]}).all();
    return {
      props: {
        kalasha: minifyRecords(allLetters)
      }
    }
    }catch (error)
    {
        return {
            props: {
              error: "Error"
            }
        }
    }
  }