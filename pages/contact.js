import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { buttonCSS } from '../components/CSS/TailwindCSS'
import { useAppContext } from '../context/AppContext'
import { messages } from "../utils/airTable"
import AlertModal from "../components/Modal/AlertModal";
import LoadingPage from "../components/LoadingPage";
import { phrases } from "../utils/i18n";
function Contacts() {

  const { contactUs, name, email, message, contactMsgSalutation, contactMsgDetails, contactMsgClosing, send, cancel, letterCount, msgSentSuccess, msgSentFailure, nameValidation, emailValidation, messageValidation } = phrases
  const router = useRouter();
  const [msg, setMsg] = useState({ Name: "", Email: "", Message: "" });
  const [validation, setValidation] = useState({ name: false, email: false, msg: false })
  const [dir, setDir] = useState('')
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state
  const lan = (typeof window !== "undefined" && localStorage.getItem("lan"))

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])

  const routeHome = () => {
    router.push('/')
  }

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false })
  }, [dispatch])


  const handleSubmit = () => {
    dispatch({ type: "LOADINGPAGE", payload: true })
    try {
      messages.create([
        { fields: { ...msg } }
      ]).then(() => {
        dispatch({
          type: "MULTIPLE_ASSIGNMENT", payload: {
            showAlertModal: true,
            alertModalMessage:msgSentSuccess[lan],
            loadingPage: false
          }
        })
      })
    }
    catch (error) {
      dispatch({
        type: "MULTIPLE_ASSIGNMENT", payload: {
          showAlertModal: true,
          alertModalMessage: msgSentFailure[lan],
          loadingPage: false
        }
      })
    }

    setMsg({ Name: "", Email: "", Message: "" })

  }
  return (
    <>
      {loadingPage ? <LoadingPage /> :
        <div dir={dir} className="container mt-10 md:mt-[120px] sm:mt-[20px] flex flex-col justify-center mx-auto backdrop-blur-sm bg-white/90 drop-shadow-xl sm:px-8 px-16 py-5 mb-16 rounded-xl xl:max-w-[1200px] lg:max-w-[900px] md:max-w-[700px] sm:max-w-[360px] text-xl">
          <h2 className='text-3xl text-center'> {contactUs[lan]} </h2>
          <p className="text-justify"> {contactMsgSalutation[lan]}
            <br />
            {contactMsgDetails[lan]}
            <br />
            <span dangerouslySetInnerHTML = {{__html: contactMsgClosing[lan]}} />

          </p>
          <form className="flex flex-col">
            <div className='flex flex-col my-4'>
              <label htmlFor="name" className="">
                {" "}{name[lan]}:{" "}
              </label>
              <input
                type="text"
                placeholder={name[lan]}
                name="name"
                className={`${validation.name ? "border-red-600 border-2" : ""} rounded-lg px-4`}
                value={msg.Name}
                onChange={e => {
                  setMsg({ ...msg, Name: e.target.value })
                }}

              />
              <p className={`${validation.name ? "text-red-600" : "hidden"}`}> {nameValidation[lan]} </p>
            </div>
            <div className='flex flex-col my-2'>
              <label htmlFor="email" className="emailTitle">
                {" "}{email[lan]}:{" "}
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                name="email"
                className={`${validation.email ? "border-red-600 border-2" : ""} rounded-lg px-4`}
                value={msg.Email}
                onChange={e => {
                  setMsg({ ...msg, Email: e.target.value });
                  {
                    (msg.Email.includes(["@"]) && msg.Email.includes(['.']) ?
                      setValidation({ ...validation, email: false }) : setValidation({ ...validation, email: true })
                    )
                  }
                }}
              />
              <p className={`${validation.email ? "text-red-600" : "hidden"}`}> {emailValidation[lan]} </p>
            </div >
            <div className='flex flex-col my-2 '>
              <label htmlFor="word" className="messageTitle">
                {" "}{message[lan]}{" "}
              </label>
              <textarea
                type="textarea"
                placeholder={message[lan]}
                rows="5"
                name="message"
                className={`${validation.msg ? "text-red-600" : ""} rounded-lg px-4`}
                value={msg.Message}
                onChange={e => {
                  setMsg({ ...msg, Message: e.target.value });
                  {
                    msg.Message.length < 100 ?
                    setValidation({ ...validation, msg: true }) : setValidation({ ...validation, msg: false })
                  }
                }}
              />
              <div className="flex justify-between flex-row-reverse sm:flex-col">
                <p className=" bottom-0 left-0">{letterCount[lan]}: {msg.Message.length}</p>
                <p className={`${validation.msg ? "text-red-600" : "hidden"}`}> {messageValidation[lan]} </p>
              </div>
            </div>
          </form>

          <div className="flex flex-row justify-center my-2 text-2xl">
            <button
              type="submit"
              className={`${buttonCSS} disabled:bg-gray-400 disabled:border-gray-400`}
              disabled={!validation.name || !validation.email || !validation.msg}
              onClick={() => {
                handleSubmit()
              }}
            >
              {" "}{send[lan]}{" "}
            </button>
            <button
              type="submit"
              className={buttonCSS}
              onClick={() => {
                dispatch({ type: 'LOADINGPAGE', payload: true })
                router.push('/')
              }}
            >
              {" "}{cancel[lan]}{" "}
            </button>
          </div>
          <AlertModal routeTo={routeHome} />
        </div>}
    </>
  );
}

export default Contacts;
