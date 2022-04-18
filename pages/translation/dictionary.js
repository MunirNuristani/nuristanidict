import React, { useState } from "react";

function Dictionary() {

  return (
          <div className=" container  my-auto mt-10 mx-auto backdrop-blur-sm bg-white/60 drop-shadow-xl rounded-2xl py-10  text-4xl  flex flex-col justify-center w-[900px]"  dir="rtl" >
            <div dir="rtl" className="flex justify-center">
              <h2 className="p-auto">قاموس دری – نورستانی (کلښه الا)</h2>
            </div>
            <form className="flex flex-row justify-center p-4">
              <label htmlFor="word" className="px-4 md:text-5xl "> لغت: </label>
              <input type='text' placeholder="لغت را اینجا وارد کنید" name="word" className="w-full rounded-lg px-4 mx-3"></input>
              <button type='submit' className=".button"
              > جستجو</button>
            </form>
          </div>
  )}

export default Dictionary;
