import React from 'react'
import About from './About';
import Foot from './Foot';
import { motion } from "framer-motion";

const techStack = ["React", "Node", "MongoDB", "Mongoose", "MongoAtlas", "Data Structures", "Algorithms", "C/C++", "Tailwind CSS", "JavaScript", "MERN", "Express", "Postman", "ShadCN", "Git", "HTML", "CSS", "Github", "VS Code", "Figma", "Render"];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const cardHoverVariants = {
  hover: {
    y: 0,
    scale: 1,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
    transition: { type: "spring", stiffness: 300 }
  }
};


const Second = () => {
  return (
    <>
      <br />
      <br />
      <main className='container'>
        <motion.div
          className='second'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >

          <motion.div variants={itemVariants} className='second1'>
            <h1 className='H'>About Me</h1>
            <p className='pp'>Passionate Web developer with 2+ years of experience building scalable web applications and leading development.</p>
          </motion.div>


          <motion.div variants={itemVariants} className="second2">
            <div className="second21">
              <p className='inhead' style={{ color: "white", fontSize: "1.5rem" }}>My Journey</p>
              <p style={{ color: "#8f969c", lineHeight: "1.5rem" }}>Hello👋🏻, I'm Abinash Mishra, a passionate Web Developer and Programmer currently pursuing my Bachelor's degree in Information Technology at IIIT Bhubaneswar.</p>
              <p style={{ color: "#8f969c", lineHeight: "1.5rem" }}>My journey in tech started with programming and problem-solving, which gradually led me to discover my passion for web development. I love building modern, responsive, and user-friendly web applications that combine creativity with functionality.</p>
              <p style={{ color: "#8f969c", lineHeight: "1.5rem" }}>I work with technologies like HTML, CSS, JavaScript, React.js, and the MERN stack — MongoDB, Express.js, React.js, and Node.js. I’m always excited to learn new technologies, build impactful projects, and grow as a developer while creating meaningful digital experiences.</p>
              <p style={{ color: "#8f969c", lineHeight: "1.5rem" }}>Alongside web development, I actively practice DSA and competitive programming to sharpen my problem-solving skills.</p>

            </div>



            <div className='second22'>
              <About />
            </div>




          </motion.div>




          <motion.div variants={itemVariants} className='second3'>
            <p className='inhead' style={{ color: "white", marginBottom: "10px" }}>Technologies & Tools</p>

            <div className='second31'>
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  style={{ textAlign: "center", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center", padding: "8px", paddingLeft: "18px", paddingRight: "18px", borderRadius: "20px", cursor: "pointer" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className='second4'>


            <motion.div
              className='second41 lc-card'
              variants={cardHoverVariants}
            // whileHover="hover"
            >
              <div className='card-header'>
                <i className="fa-solid fa-code" style={{ fontSize: '1.6rem', color: "#ffa116" }}></i>
                <p className='inhead' style={{ fontSize: '1.5rem', color: "white" }}>LeetCode</p>
              </div>
              <div className='card-stats'>
                <p><span>Max Rating</span> <strong>1891 (Top 4%)</strong></p>
                <p><span>Problems Solved</span> <strong>900+</strong></p>
                <p><span>Level</span> <strong style={{ color: '#ffa116' }}>Knight</strong></p>
              </div>
              <a href="https://leetcode.com/u/abinashmishra1401/" target="_blank" rel="noreferrer" className='card-btn'>View Profile</a>
            </motion.div>


            <motion.div variants={cardHoverVariants}
              className='second41 cf-card'>
              <div className='card-header'>
                <i className="fa-solid fa-chart-simple" style={{ fontSize: '1.6rem', color: "green" }}></i>
                <p className='inhead' style={{ fontSize: '1.5rem', color: "white" }}>Codeforces</p>
              </div>
              <div className='card-stats'>
                <p><span>Max Rating</span> <strong>1219</strong></p>
                <p><span>Problems Solved</span> <strong>200+</strong></p>
                <p><span>Level</span> <strong style={{ color: 'green' }}>Pupil</strong></p>
              </div>
              <a href="https://codeforces.com/profile/Avi1401" target="_blank" rel="noreferrer" className='card-btn'>View Profile</a>
            </motion.div>


            <motion.div variants={cardHoverVariants}
              className='second41 gh-card'>
              <div className='card-header'>
                <i className="fa-brands fa-github" style={{ fontSize: '1.6rem', color: "#318CE7" }}></i>
                <p className='inhead' style={{ fontSize: '1.5rem', color: "white" }}>GitHub</p>
              </div>
              <div className='card-stats'>
                <p><span>Repositories</span> <strong>20+</strong></p>
                <p><span>Top Language</span> <strong>JavaScript</strong></p>
                <p><span>Level</span> <strong style={{ color: "#318CE7" }}>Adventurer</strong></p>
              </div>
              <a href="https://github.com/Abi04nash" target="_blank" rel="noreferrer" className='card-btn'>View Profile</a>
            </motion.div>

          </motion.div>
        </motion.div>
      </main>
      <Foot />
    </>

  )
}

export default Second
