import React,{useState, useEffect} from "react";
import MainpageHero from "./Hero";
import CardContainer from "./CardContainer";
export default function MainLandingPage() {
  const [dir, setDir] = useState("")
  const lan = (typeof window !== "undefined" && localStorage.getItem('lan'))

  useEffect(() => {
    setDir(lan === "en" ? "ltr" : "rtl")
  }, [lan])

  return (
    <div dir={dir} className="h-full">
      {/* Hero Section */}
      <MainpageHero />
      {/* Cards Container*/}
      <CardContainer/>
    </div>
  );
}
