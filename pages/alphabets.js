import React, { useState, useEffect } from "react";
import { letters, minifyRecords } from "../utils/airTable";
import SomethingWentWrong from "../components/SomethingWentWrong";
import { useAppContext } from "../context/AppContext";
import LoadingPage from "../components/LoadingPage";
import { phrases } from "../utils/i18n";
import Image from "next/image";
import rotateImage from "../public/assets/rotatePhone.svg";
import AudioPlay from "../components/AudioPlay";

export default function Alphabets({ kalasha, error }) {
  const [dir, setDir] = useState("");
  const {
    alphabetHeading,
    letter,
    latin,
    nameOfLetter,
    usage,
    phoneme,
    rotate,
  } = phrases;
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state;
  const cells = "border-2 border-[#000] text-center w-20 ";
  const lan = typeof window !== "undefined" && localStorage.getItem("lan");

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl");
  }, [lan]);

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false });
  }, [kalasha, dispatch]);

  return (
    <>
      {error ? (
        <SomethingWentWrong />
      ) : loadingPage ? (
        <LoadingPage />
      ) : (
        <div
          dir={dir}
          className="container my-10 flex flex-col justify-center bg-white p-5 rounded-xl max-w-[1000px] md:max-w-[700px] mx-2 sm:mt-[20px]"
        >
          <div className="flex  flex-col justify-center items-center text-3xl my-4">
            <h3 className="text-5xl  text-center sm:text-center mt-6 w-full">
              {" "}
              {alphabetHeading[lan]}{" "}
            </h3>
          </div>
          <div className="md:hidden xl:hidden lg:hidden sm:flex flex-col">
            <p className="mt-5 w-full text-center text-2xl">{rotate[lan]}</p>
            <Image
              src={rotateImage}
              alt="rotate your phone "
              width={100}
              height={200}
            />
          </div>
          <table dir={dir} className="border-2 text-xl sm:hidden">
            <thead className="border-2 text-center">
              <tr>
                <th className={cells}>{letter[lan]}</th>
                <th className={cells}> {latin[lan]} </th>
                <th className={cells}> {nameOfLetter[lan]}</th>
                <th className={cells}>{usage[lan]}</th>
                <th className={cells}>{phoneme[lan]}</th>
              </tr>
            </thead>
            <tbody>
              {kalasha.map((el) => (
                <tr key={el.id}>
                  <td className={cells}> {el.fields.Letter}</td>
                  <td className={cells}> {el.fields.Latin}</td>
                  <td className={cells}> {el.fields.Name}</td>
                  <td className={cells}> {el.fields.Description} </td>
                  <td className={cells}>
                    {el.fields.recording1 && <AudioPlay src={el.fields.recording1[0].url} />
                      
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  try {
    const allLetters = await letters
      .select({ sort: [{ field: "No", direction: "asc" }] })
      .all();
    return {
      props: {
        kalasha: minifyRecords(allLetters),
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
