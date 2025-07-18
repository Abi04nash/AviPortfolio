import React from 'react'
import { useRef , useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from "typed.js";


const First = () => {


  const navigate = useNavigate();
  const handleNavigation = () => {
    
    console.log("Navigating to /about"); // Debugging log
    navigate("/third "); // Redirect to About page
};

  const typedElement = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    const options = {
      strings: ["Developer", "Programmer","Designer✨"],
      typeSpeed: 100,
      backSpeed: 20,
      loop: true,
    };

    if (isMobile) {
      options.strings = ["Developer", "Programmer" , "Designer✨"];
    }

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);





  return (
    <>
      <div className='first'>
        <div className='first1'>
          <p className='pppp' style={{fontWeight:"600" , color:"#6B26D9"}}>Hello I'm</p>
          <h1 className='HH'>Abinash Mishra</h1>
            <p className='hello'><span className={`typed ${isMobile ? "mob" : "web"}`} ref={typedElement}></span> </p>
        </div>


        <div className='first2'>
          <p className='pp'>Crafting modern web applications with cutting-edge technologies.</p>
          <p className='pp'>Passionate about clean code, user experience, and innovative solutions.</p>
        </div>


        <div className='first3'>
          <div className='a' style={{color:"white"}}><a style={{color:"white"}} href="https://drive.google.com/file/d/1isxPRaKfDPH9ji6mzzEtd6UUWN0w-bmD/view?usp=sharing">Resume</a></div>
          <div className='b' onClick={handleNavigation}>My Work</div>
        </div>

        
      </div>
    </>
  )
}

export default First
