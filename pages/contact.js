import React, { useState } from "react";
import {useRouter} from 'next/router'

function Contacts() {
  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const router = useRouter();
  const handleSubmit = () =>{
    setMessage({ name: "", email: "", message: "" })
    router.push({
        pathname: '/'
    })
  }
  return (
    <div dir='rtl' className="container mt-10  flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl px-16 py-5 rounded-xl w-[900px] text-xl">
      <h2 className='text-3xl text-center'>تماس با ما </h2>
      <p className="text-justify"> هموطن و همزبان گرانقدر! <br/>
صفحۀ «تماس» امکان پیوند شما را با ما را میسر میسازد. در صورتیکه شما سؤال و یا پیشنهاد سازنده ای داشته باشید و یا هم در صورت عدم موجودیت کدام کلمه و شمولیت آن نظر به لزوم دید شما در «قاموس زبان دری به نورستانی (کلشه الا) » طرح پیشنهادی داشته باشید، میتوانید با درج اسم کامل و ایمیل آدرس تان که حتمیست، پیام تان را از طریق همین دریچه به ما بفرستید. همچنان اگر میخواهید که در بخش های زبانی و یا مسلکی کدام بخش جدید ایجاد گردد، در صورتیکه یا خود شما آمادۀ همکاری در آن بخش جدید باشید و یا کسی را که در آن عرصه آگاهی و علاقۀ همکاری داشته باشد، به ما معرفی نمائید. لطفاً از درست بودن اسم و تخلص خاصتاً ایمیل آدرس تان خود را مطمئن سازید. <br/>
</p>
      <form className="flex flex-col">
        <label htmlFor="name" className="">
          {" "}اسم:{" "}
        </label>
        <input
          type="text"
          placeholder="اسم کامل"
          name="name"
          className="rounded-lg px-4"
          value = {message.name}
          onChange={e => {
            setMessage({ ...message, name: e.target.value });
          }}
        />
        <label htmlFor="email" className="emailTitle">
          {" "}ادرس ایمیل:{" "}
        </label>
        <input
          type="email"
          placeholder="email@example.com"
          name="email"
          className="rounded-lg px-4"
          value = {message.email}
          onChange={e => {
            setMessage({ ...message, email: e.target.value });
          }}
        />
        <label htmlFor="word" className="messageTitle">
          {" "}پیام:{" "}
        </label>
        <textarea
          type="textarea"
          placeholder="پیام"
          rows="5"
          name="message"
          className="rounded-lg px-4"
          value = {message.message}
          onChange={e => {
            setMessage({ ...message, message: e.target.value });
          }}
        />
      </form>
      <div className="flex flex-row justify-center my-3 ">
        <button
          type="submit"
          className='mx-4 my-2'
          onClick={() => {
            handleSubmit()
          }}
        >
          {" "}ارسال{" "}
        </button>
        <button
          type="submit"
          className="mx-4 my-2"
          onClick={() => handleSubmit()}
        >
          {" "}انصراف{" "}
        </button>
      </div>
    </div>
  );
}

export default Contacts;
