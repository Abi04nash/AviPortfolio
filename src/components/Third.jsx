import React from 'react'
import About from './About'
import { useNavigate } from 'react-router-dom';
import Foot from './Foot';
import { motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Slightly longer stagger for big projects
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 }, // Using 20 to prevent the mobile glitch we discussed!
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};


const projectHover = {
  hover: { scale: 1.02, transition: { type: "spring", stiffness: 300 } }
};



const Third = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {

        console.log("Navigating to /about");
        navigate("/fourth ");
    };


    return (
        <>
            <br />
            <br />

            <main className='container'>


               <motion.div 
                  className='third'
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }} // Triggers early & prevents mobile jump
                >
                    <motion.div variants={itemVariants} className='third1'>
                        <h1 className='H'>My Projects</h1>
                        <p className='pp'>A collection of projects that show my skills in building websites, designing user interfaces, and using modern web tools.</p>
                    </motion.div>


                    <div className="third2">
                        <motion.div variants={itemVariants} className="proo">

                            <div className="proo-img-wrapper">
                                <img src="./images/sociova.png" alt="" className="project-image" />
                                <div className="overlay">
                                    <i onClick={() => window.location.href = 'https://github.com/Abi04nash/Sociova'} style={{ cursor: "pointer" }} className="fa-brands fa-github github-icon"></i>
                                </div>
                            </div>

                            <div className='proo1'>

                                <p className='inhead' style={{ color: "white", fontSize: "1.5rem" }}>Sociova</p>
                                <p>A full-stack social media web application inspired by Instagram with real-time features and responsive design.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>React.JS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> MongoDB</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> NodeJS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> ExpressJs</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> Socket.io</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> TailwindCSS</span>
                                </div>
                                <div className="proo13">
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/Sociova'}> <i class="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://sociova.onrender.com/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i class="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </div>


                        </motion.div>




                        <motion.div variants={itemVariants} className="proo">

                            <div className="proo-img-wrapper">
                                <img src="./images/An.png" alt="" className="project-image" />
                                <div className="overlay">
                                    <i onClick={() => window.location.href = 'https://github.com/Abi04nash/AnnSeva'} style={{ cursor: "pointer" }} className="fa-brands fa-github github-icon"></i>
                                </div>
                            </div>

                            <div className='proo1'>

                                <p className='inhead' style={{ color: "white", fontSize: "1.5rem" }}>AnnSeva</p>
                                <p>A platform where donors post surplus food from restaurants or events, and food banks request it for redistribution.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>React.JS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> MongoDB</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> Express</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> NodeJS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> TailwindCSS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> Cloudinary</span>

                                </div>
                                <div className="proo13">
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/AnnSeva'} > <i class="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://annseva-edbw.onrender.com/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i class="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </div>







                        </motion.div>



                        <motion.div variants={itemVariants} className="proo">

                            <div className="proo-img-wrapper">
                                <img src="./images/toogood.jpg" alt="" className="project-image" />
                                <div className="overlay">
                                    <i onClick={() => window.location.href = 'https://github.com/Abi04nash/TwoGoodCo-Clone-'} style={{ cursor: "pointer" }} className="fa-brands fa-github github-icon"></i>
                                </div>
                            </div>

                            <div className='proo1'>

                                <p className='inhead' style={{ color: "white", fontSize: "1.5rem" }}>UI Clone</p>
                                <p>Landing page UI clone of Too Good Co. A simple yet clean and responsive design replicating the original layout with precision.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>HTML</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> CSS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> JavaScript</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> GSAP</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> Lenis</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}> FramerMotion</span>
                                </div>
                                <div className="proo13">
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/TwoGoodCo-Clone-'}> <i class="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://abi04nash.github.io/TwoGoodCo-Clone-/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i class="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </div>







                        </motion.div>




                    </div>


                    
                   <motion.div variants={itemVariants} className='third4' style={{ width: '100%', margin: '0 auto 4rem auto' }}>
                        <p className='inhead' style={{ color: "white", fontSize: "1.5rem", marginBottom: "20px", textAlign: "left" }}>More Projects</p>
                        <div className='small-projects-grid'>

                       
                            <motion.div variants={projectHover} className='third41'>
                                <p className='inhead' style={{ color: "white", fontSize: "1.3rem" }}>Expense Tracker </p>
                                <p>A fully functional Expense Tracker built using React.js, styled with CSS, and powered by Chart.js.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>ReactJS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>Chart.js</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>CSS</span>
                                </div>
                                <div className="proo13" style={{ marginTop: "auto" }}>
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/Expense_Tracker'} > <i className="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://abi04nash.github.io/Expense_Tracker/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i className="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </motion.div>

                           
                            <motion.div variants={projectHover} className='third41'>
                                <p className='inhead' style={{ color: "white", fontSize: "1.3rem" }}>Task Manager</p>
                                <p>Developed a full-stack To-Do application to manage daily tasks with database persistence.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>ReactJS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>MongoDB</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>Express</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>NodeJS</span>
                                </div>
                                <div className="proo13" style={{ marginTop: "auto" }}>
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/Todo_Web_App'} > <i className="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://todo-web-app-x5um.onrender.com/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i className="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </motion.div>

                           
                            <motion.div variants={projectHover} className='third41'>
                                <p className='inhead' style={{ color: "white", fontSize: "1.3rem" }}>Portfolio</p>
                                <p>The latest iteration of my personal portfolio website, built with React.js and CSS.</p>
                                <div className="proo12">
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>ReactJS</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>React Router</span>
                                    <span style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "5px", paddingLeft: "10px", paddingRight: "10px", borderRadius: "20px" }}>CSS</span>
                                </div>
                                <div className="proo13" style={{ marginTop: "auto" }}>
                                    <div onClick={() => window.location.href = 'https://github.com/Abi04nash/AviPortfolio'} > <i className="fa-brands fa-github"></i> Code</div>
                                    <div onClick={() => window.location.href = 'https://abi04nash.github.io/AviPortfolio/'} style={{ background: "linear-gradient(to right, #d8b4fe, #3b82f6)" }}><i className="fa-solid fa-eye"></i> Demo</div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>




                    <motion.div variants={itemVariants} className="third3">
                        <p className='inhead' style={{ color: "white", fontSize: "1.5rem" }}>Interested in working together ?</p>
                        <p style={{lineHeight:"1.5rem"}}>I'm always open to discussing projects, creative ideas, or opportunities to collaborate and build something meaningful.</p>
                        <div onClick={handleNavigation}>Get In Touch</div>
                    </motion.div>





                </motion.div>
            </main>
            <Foot />
        </>
    )
}

export default Third