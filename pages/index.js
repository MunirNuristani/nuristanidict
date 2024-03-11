/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";
import MainLandingPage from "../components/mainPage/MainLandingPage";
import { useAppContext } from "../context/AppContext";
import SomethingWentWrong from "../components/SomethingWentWrong";
import { letters, minifyRecords } from "../utils/airTable";

export default function Index({ alphabets, error }) {
  const { state, dispatch } = useAppContext();
  const { loadingPage } = state;

  useEffect(() => {
    if (localStorage.getItem("lan") === null) {
      localStorage.setItem("lan", "prs");
    }
  }, []);

  useEffect(() => {
    dispatch({ type: "LOADINGPAGE", payload: false });
  }, [alphabets, error]);

  return <>{loadingPage ? <LoadingPage /> : <MainLandingPage />}</>;
}

export async function getServerSideProps(context) {
  try {
    const allLetters = await letters
      .select({ sort: [{ field: "No", direction: "asc" }] })
      .all();
    return {
      props: {
        alphabets: minifyRecords(allLetters),
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
