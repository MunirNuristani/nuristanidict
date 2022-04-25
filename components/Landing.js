import {useState} from 'react'
import {useRouter } from 'next/router'


function Landing({words, articles, abbrs}) {
  const[searchValue, setSearchValue] = useState('')
  const router = useRouter()
  const random = Math.floor(Math.random()* articles.length)
  const selectedArticles = articles[random]
  const abbrev = abbrs.filter(abbr=>( abbr.fields.Abbr ===words[0].fields.Abbr))
    
    
  return (
    <div className="container my-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl p-5 rounded-xl w-[900px]">
      <div className='w-full flex flex-row-reverse px-2  text-2xl '>
        <input className='w-full rounded-lg mx-3 px-2 text-right' placeholder="جستجو لغت جدید"></input>
        <button className=""> جستجو</button>
      </div>
      <div className='w-full mt-5'>
        <div className='flex flex-row-reverse items-center'>
        <h1 className="flex justify-end text-2xl items-center"> &nbsp;:لغت روز </h1>
        <h2 className="flex flex-row-reverse text-2xl  justify-end items-center" dir='rtl'>{words[0].fields.Word} </h2> &emsp;
        <h2>
          ({abbrev[0].fields.Meaning} )
        </h2>
        </div>
        <p className="text-right text-2xl my-2">{words[0].fields.Description}</p>
        <div className ='w-full flex justify-center mt-10'>
          <button className='text-2xl items-center'>...بیشتر</button>
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-right text-3xl   " >
          {selectedArticles.fields.Article_Name}
        </h2>
        
        <div className="text-justify my-10 text-right text-lg" dir='rtl'
        dangerouslySetInnerHTML={{__html: selectedArticles.fields.Article_body.slice(0, selectedArticles.fields.Article_body.length/40)}}
        /> ...
  
        <div className ='w-full flex justify-center'>
          <button className='text-2xl items-center ' onClick={()=> {
            router.push({
              pathname: '../articles/[id]',
              query: { id:selectedArticles.id }
            })
          }}>...بیشتر</button>
        </div>
      </div>
    </div>
  )
}

export default Landing
