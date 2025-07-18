import React from 'react'
import About from './About'
import { useNavigate } from 'react-router-dom';

const Third = () => {

    const navigate = useNavigate();
  const handleNavigation = () => {
    
    console.log("Navigating to /about"); // Debugging log
    navigate("/fourth "); // Redirect to About page
};


    return (
        <>
        <br />
        <br />

            <div className='third'>
                <div className='third1'>
                    <h1 className='H'>My Projects</h1>
                    <p className='pp'>A collection of projects that show my skills in building websites, designing user interfaces, and using modern web tools.</p>
                </div>


                <div className="third2">
                    <div className="proo">

                         <div className="proo-img-wrapper">
    <img src="./images/sociova.png" alt="" className="project-image" />
    <div className="overlay">
      <i onClick={() => window.location.href = 'https://github.com/Abi04nash/Sociova'} className="fa-brands fa-github github-icon"></i>
    </div>
  </div>

                        <div className='proo1'>

                            <h2>Sociova</h2>
                            <p>A full-stack social media web application inspired by Instagram with real-time features and responsive design.</p>
                            <div className="proo12">
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}>React</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> MongoDB</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> NodeJS</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> ExpressJs</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> Socket.io</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> TailwindCSS</span>
                            </div>
                            <div className="proo13">
                                <div onClick={() => window.location.href = 'https://github.com/Abi04nash/Sociova'}> <i class="fa-brands fa-github"></i> Code</div>
                                <div onClick={() => window.location.href = 'https://sociova.onrender.com/'} style={{background: "linear-gradient(to right, #d8b4fe, #3b82f6)"}}><i class="fa-solid fa-eye"></i> Demo</div>
                            </div>
                        </div>


                    </div>



                    <div className="proo">

                        <div className="proo-img-wrapper">
    <img src="./images/toogood.jpg" alt="" className="project-image" />
    <div className="overlay">
      <i onClick={() => window.location.href = 'https://github.com/Abi04nash/TwoGoodCo-Clone-'} className="fa-brands fa-github github-icon"></i>
    </div>
  </div>

                        <div className='proo1'>

                            <h2>UI Clone</h2>
                            <p>Landing page UI clone of Too Good Co. A simple yet clean and responsive design replicating the original layout with precision.</p>
                            <div className="proo12">
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}>HTML</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> CSS</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> JavaScript</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> GSAP</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> Lenis</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> FramerMotion</span>
                            </div>
                            <div className="proo13">
                                <div onClick={() => window.location.href = 'https://github.com/Abi04nash/TwoGoodCo-Clone-'}> <i class="fa-brands fa-github"></i> Code</div>
                                <div  onClick={() => window.location.href = 'https://abi04nash.github.io/TwoGoodCo-Clone-/'} style={{background: "linear-gradient(to right, #d8b4fe, #3b82f6)"}}><i class="fa-solid fa-eye"></i> Demo</div>
                            </div>
                        </div>







                    </div>




                    <div className="proo">

                       <div className="proo-img-wrapper">
    <img src="./images/aaaa.jpg" alt="" className="project-image" />
    <div className="overlay">
      <i onClick={() => window.location.href = 'https://github.com/Abi04nash/New_Portfolio'} className="fa-brands fa-github github-icon"></i>
    </div>
  </div>

                        <div className='proo1'>

                            <h2>Portfolio</h2>
                            <p>Designed and developed a personal portfolio website to showcase projects, skills, and accomplishments in web dev.</p>
                            <div className="proo12">
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}>React</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> React Router</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> CSS</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> TailwindCSS</span>
                                <span  style={{ textAlign:"center" , fontWeight:"600" , display:"flex" , justifyContent:"center",  alignItems:"center", padding:"5px", paddingLeft:"10px" , paddingRight:"10px", borderRadius:"20px"}}> FontAwesome</span>
                            </div>
                            <div className="proo13">
                                <div onClick={() => window.location.href = 'https://github.com/Abi04nash/New_Portfolio'} > <i class="fa-brands fa-github"></i> Code</div>
                                <div onClick={() => window.location.href = 'https://abi04nash.github.io/New_Portfolio/'} style={{background: "linear-gradient(to right, #d8b4fe, #3b82f6)"}}><i class="fa-solid fa-eye"></i> Demo</div>
                            </div>
                        </div>







                    </div>
                </div>

                <div className="third3">
                    <h2 style={{color:"white"}}>Interested in working together?</h2>
                    <p>I'm always open to discussing new opportunities and exciting projects.</p>
                    <div  onClick={handleNavigation}>Get In Touch</div>
                </div>





            </div>
        </>
    )
}

export default Third
