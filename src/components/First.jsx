import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typed from "typed.js";
import { motion } from "framer-motion";

import throneBg from "/images/tech-throne (3).jpg";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// --- Theme Colors for Bubbles ---
const bubbleColors = {
  frost: '#00e5ff', // Cyan
  ember: '#ff2a6d', // Pink
};

// --- Background Slow Zoom Component ---
const BackgroundLayer = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <motion.img
        src={throneBg}
        alt="Tech Throne Background"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Dark overlay to match your #09090B theme and make text readable */}
      <div style={{
        position: 'absolute',
        inset: 0,
        // background: `linear-gradient(to bottom, rgba(9, 9, 11, 0.5), rgba(9, 9, 11, 0.95))`
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.85))`

      }} />
    </div>
  );
};

// --- Floating Bubbles Component ---
const FloatingBubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const bubbleArray = Array.from({ length: 30 }).map((_, i) => {
      const isPink = Math.random() > 0.5;
      return {
        id: i,
        size: Math.random() * 2.5 + 1.5, 
        left: Math.random() * 100,   
        duration: Math.random() * 8 + 9, 
        delay: Math.random() * 5,    
        color: isPink ? bubbleColors.ember : bubbleColors.frost, 
      };
    });
    setBubbles(bubbleArray);
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      {bubbles.map((b) => (
        <motion.div
          key={b.id}
          initial={{ y: '100vh', opacity: 0 }}
          animate={{
            y: '-10vh', 
            opacity: [1, 0.7, 0], 
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            borderRadius: '50%',
            backgroundColor: b.color,
            boxShadow: `0 0 10px ${b.color}`,
          }}
        />
      ))}
    </div>
  );
};

const First = () => {
  const glowRef = useRef(null); 
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  const handleNavigation = () => {
    console.log("Navigating to /third"); // Debugging log
    navigate("/third"); // Redirect to Project page
  };

  const typedElement = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (event) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${event.clientX}px`;
        glowRef.current.style.top = `${event.clientY}px`;
      }
    };
    
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const options = {
      strings: ["Web Developer", "Competitive Programmer", "Problem Solver", "Designer"],
      typeSpeed: 45,
      backSpeed: 15,
      backDelay: 1500,
      loop: true,
      cursorChar: '|', 
    };

    if (isMobile) {
      options.strings = ["Web Developer", "Programmer", "Problem Solver", "Designer"];
    }

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <>
      <motion.div className="first" variants={containerVariants} initial="hidden" animate="visible">
        
        {/* --- INJECTED BACKGROUND ANIMATIONS HERE --- */}
        <BackgroundLayer />
        <FloatingBubbles />

        {/* --- YOUR EXACT CONTENT STARTS HERE --- */}
        {!isMobile && <div className="cursor-glow" ref={glowRef}></div>}
        
        <motion.main variants={itemVariants} className='contain'>
          <div className='first1'>
            <p className='pppp' style={{fontWeight:"600" , color:"rgb(101, 15, 241)"}}>Hello I'm  </p>
            <h1 className='HH'>Abinash Mishra</h1>
            <p className='hello'><span className={`typed ${isMobile ? "mob" : "web"}`} ref={typedElement}></span> </p>
          </div>
        </motion.main>

        <motion.main variants={itemVariants} className='contain'>
          <div className='first2'>
            <div className='extra'> <p className='iextra'>{`</>`} Full Stack Developer</p></div>
            <p className='Pp'> I am a Full-stack Web developer. I claim the Iron Throne of the modern web — forged from frameworks, shaped by Code, and tempered with Valyrian steel and stubborn intent.</p>
          </div>
        </motion.main>

        <motion.main variants={itemVariants} className='contain'>
          <div className='first3'>
            <motion.div className='a' whileHover={{ scale: 1.00 }} whileTap={{ scale: 0.95 }} onClick={() => window.location.href = 'https://drive.google.com/file/d/1BLnospFs0K1ToSPTRajmO5M-p3cIr1tR/view?usp=sharing'} style={{color:"white"}}> View Resume</motion.div>
            <motion.div whileHover={{ scale: 1.00 }} whileTap={{ scale: 0.95 }} className='b' onClick={handleNavigation}> Project Gallery</motion.div>
          </div>
        </motion.main>
        
      </motion.div>    
    </>
  )
}


export default First;