import React, { useState, useEffect } from "react";
import {useRouter} from 'next/router'
import {buttonCSS } from '../components/CSS/TailwindCSS'
import { useAppContext } from '../context/AppContext'
import { messages } from "../utils/airTable"
import AlertModal from "../components/Modal/AlertModal";
import LoadingPage from "../components/LoadingPage";

function Contacts() {
  const router = useRouter();
  const [message, setMessage] = useState({ Name: "", Email: "", Message: "" });
  const [validation, setValidation ] = useState({name:false, email:false, message:false})
  const { state, dispatch } = useAppContext();
  const {loadingPage} = state
  console.log(state)
  
 

  const handleSubmit = () =>{
    try{
    messages.create([
      {fields: {...message}}
    ]).then(()=>{
      dispatch({type: "MULTIPLE_ASSIGNMENT", payload:{
        showAlertModal: true,
        alertModalMessage: " تشکر از شما \n .پیام شما موفقانه ارسال شد "
      }})
    })}
    catch (error)
      {
        dispatch({type: "MULTIPLE_ASSIGNMENT", payload:{
          showAlertModal: true,
          alertModalMessage: "متاسف استیم \nپیام شما ارسال نشد. لطفاً دوباره کوشش کنید.   "
        }}) 
      } 
    
    setMessage({ Name: "", Email: "", Message: "" })
   
  }
  return (
    <div dir='rtl' className="container mt-10 md:mt-[120px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl px-16 py-5 rounded-xl xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[360px] text-xl">
      <h2 className='text-3xl text-center'>تماس با ما </h2>
      <p className="text-justify"> هموطن و همزبان گرانقدر! <br/>
صفحۀ تماس امکان پیوند شما را با ما را میسر میسازد. در صورتیکه شما سوال و یا پیشنهاد سازنده ای داشته باشید و یا هم در صورت عدم موجودیت کلمه مورد نظر شما و شمولیت آن، میتوانید با درج اسم کامل و آدرس ایمیل  تان که حتمیست، پیام تان را از طریق همین دریچه به ما بفرستید. همچنان اگر میخواهید که در بخش های زبانی و یا مسلکی کدام بخش جدید ایجاد گردد، در صورتیکه یا خود شما آمادۀ همکاری در آن بخش جدید باشید و یا کسی را که در آن عرصه آگاهی و علاقه همکاری داشته باشد، به ما معرفی نمائید. لطفاً از درست بودن اسم و تخلص خاصتاً ایمیل آدرس تان خود را مطمئن سازید. <br/>
</p>
      <form className="flex flex-col">
        <div className='flex flex-col my-4'>
        <label htmlFor="name" className="">
          {" "}اسم:{" "}
        </label>
        <input
          type="text"
          placeholder="اسم کامل"
          name="name"
          className={`${validation.name? "border-red-600 border-2":""} rounded-lg px-4`}
          value = {message.Name}
          onChange={e => {
            setMessage({ ...message, Name: e.target.value })
            {message.Name.length!==0 && (message.Name.length <3 || message.Name.length>25?
            setValidation({...validation, name:true}): setValidation({...validation, name:false}))}
          }}
        />
        <p className={`${validation.name? "text-red-600":"hidden"}`}>  تام تان بین ۳ الی ۲۵ حرف باشد</p>
      </div>
      <div className='flex flex-col my-2'>
        <label htmlFor="email" className="emailTitle">
          {" "}ادرس ایمیل:{" "}
        </label>
        <input
          type="email"
          placeholder="email@example.com"
          name="email"
          className={`${validation.email? "border-red-600 border-2":""} rounded-lg px-4`}
          value = {message.Email}
          onChange={e => {
            setMessage({ ...message, Email: e.target.value });
            {(message.Email.includes(["@"]) && message.Email.includes(['.'])?
              setValidation({...validation, email:false}): setValidation({...validation, email:true})
              )}
          }}
        />
          <p className={`${validation.email? "text-red-600":"hidden"}`}> لطفاً از درست بودن ادرس ایمیل تان اطمینان حاصل کنید.</p>
        </div >
        <div className='flex flex-col my-2 '>
        <label htmlFor="word" className="messageTitle">
          {" "}پیام:{" "}
        </label>
        <textarea
          type="textarea"
          placeholder="پیام"
          rows="5"
          name="message"
          className={`${validation.message? "text-red-600":""} rounded-lg px-4`}
          value = {message.Message}
          onChange={e => {
            setMessage({ ...message, Message: e.target.value });
            {message.Message.length<100?
              setValidation({...validation, message:true}): setValidation({...validation, message:false})}
          }}
        />
        <div className="flex justify-between flex-row-reverse sm:flex-col">
        <p className=" bottom-0 left-0">تعداد حروف: { message.Message.length}</p>
        <p className={`${validation.message? "text-red-600":"hidden"}`}> پیام تان باید حد اقل ۱۰۰ کارکتر(حرف) باشد.</p>
        </div>
        </div>
      </form>
      
      <div className="flex flex-row justify-center my-2 text-2xl">
        <button
          type="submit"
          className={`${buttonCSS} disabled:bg-gray-400 disabled:border-gray-400`}
          disabled={validation.name || validation.email || validation.message}
          onClick={() => {
            handleSubmit()
          }}
        >
          {" "}ارسال{" "}
        </button>
        <button
          type="submit"
          className={buttonCSS}
          onClick={() =>{
          dispatch({ type:'LOADINGPAGE', payload: true })
          router.push('/')
        }}
        >
          {" "}انصراف{" "}
        </button>
      </div>
      <AlertModal />
    </div>
  );
}

export default Contacts;
