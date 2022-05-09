import {useState, useEffect} from 'react'
import {AiOutlineToTop} from 'react-icons/ai'


export default function ScrollToTop() {
    const [showButton, setShowButton] = useState(false);
    const activiteBounce = "hover:animate-bounce"
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
      
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // for smoothly scrolling
        });
      };
      
  return (
    <div className={`${!showButton? 'hidden': '' } h-[50px] text-3xl rounded-lg backdrop-blur-sm bg-white/60 drop-shadow-xl hover:pt-4 p-2 fixed bottom-14 right-10 `} onClick={()=>scrollToTop()}>
      <div className="relative w-full h-full  justify-center flex items-center px-4 rounded-md hover:animate-bounce  after:duration-500 ease-in-out">
         <AiOutlineToTop className="absolute bottom-0 " /> 
         </div>
    </div>
  )
}
