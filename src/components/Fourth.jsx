import React from 'react'
import Swal from 'sweetalert2'
import Foot from './Foot';
import { motion } from "framer-motion";

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


const Fourth = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "579c4ae3-0a03-4ef3-847e-fb6e29f3206f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();

            Swal.fire({
                title: "Success",
                text: "Message sent successfully",
                icon: "success"
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };






    return (
        <>
            <br />
            <br />
            <main className='container'>
                <motion.div 
                    className='fourth'
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05, margin: "0px 0px -50px 0px" }}
                >
                    <motion.div variants={itemVariants} className='fourth1'>
                        <h1 className='H'>Let's Connect</h1>
                        <p className='pp'>Have a project in mind or just want to chat? I'd love to hear from you. Let's build something amazing together.</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className='fourth2'>

                        <form className='fourth2a' onSubmit={onSubmit}>
                            <p className='inhead' style={{ color: "white" }}>Send a Message</p>

                            <div className='input-box'>
                                <label style={{ color: "white", fontSize: "15px", fontWeight: "600" }}>Full Name</label>
                                <input type="text" className='field' placeholder='Enter your name' name='name' required />
                            </div>
                            <div className='input-box'>
                                <label style={{ color: "white", fontSize: "15px", fontWeight: "600" }}>Email Address</label>
                                <input type="email" className='field' placeholder='Enter your email' name='email' required />
                            </div>

                            <div className='input-box'>
                                <label style={{ color: "white", fontSize: "15px", fontWeight: "600" }}>Your Message</label>
                                <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
                            </div>
                            <div  onClick={(e) => e.target.closest("form").requestSubmit()} className='buttonn' style={{ cursor: "pointer" }} type='submit'>  Send Message</div>
                        </form>






                        <div className='fourth22b'>
                            <div className='fourth2b'>
                                <p className='inhead' style={{ color: "white" }}>Contact Information</p>
                                <div className='fourth2bb'>
                                    <i class="fa-solid fa-envelope "></i>

                                    <div>
                                        <p style={{ color: "white", fontWeight: "600" }}>Email</p>
                                        <p>abinashmishra1401@gmail.com</p>
                                    </div>

                                </div>

                                <div className='fourth2bb'>
                                    <i class="fa-solid fa-phone-volume "></i>

                                    <div>
                                        <p style={{ color: "white", fontWeight: "600" }}>Phone</p>
                                        <p>+(91) 7847097951</p>
                                    </div>

                                </div>


                                <div className='fourth2bb'>
                                    <i class="fa-regular fa-paper-plane"></i>

                                    <div>
                                        <p style={{ color: "white", fontWeight: "600" }}>Location</p>
                                        <p>Bhubaneswar , Odisha</p>
                                    </div>

                                </div>
                            </div>

                            <div className='fourth2c'>
                                <p className='inhead' style={{ color: "white" }}>Social Links</p>

                                <div>
                                    <i onClick={() => window.location.href = 'https://github.com/Abi04nash'} class="fa-brands fa-square-github"></i>
                                    <i onClick={() => window.location.href = 'https://www.linkedin.com/in/abinash-mishra-880a5b291/'} class="fa-brands fa-linkedin"></i>
                                    {/* <i onClick={() => window.location.href = 'https://codeforces.com/profile/Avi1401'} class='fas fa-bread-slice icon'></i> */}




                                    <svg onClick={() => window.location.href = 'https://leetcode.com/u/abinashmishra1401/'} className="new bi bi-caret-down" xmlns="http://www.w3.org/2000/svg" width="38" height="40" fill="currentColor" viewBox="0 0 32 32">
                                        <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z" />
                                    </svg>

                                    <img onClick={() => window.location.href = 'https://codeforces.com/profile/Avi1401'} width="38" height="40" src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/FFFFFF/external-codeforces-programming-competitions-and-contests-programming-community-logo-bold-tal-revivo.png" alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-bold-tal-revivo" />

                                </div>
                            </div>

                        </div>

                    </motion.div>





                    <motion.div variants={itemVariants} className="approach-box" style={{
                        // marginTop: '20px',
                        padding: '25px 20px',
                        backgroundColor: '#0b0b0b',
                        border: '0.0001rem solid rgb(64, 64, 64)',
                        borderRadius: '10px',
                        textAlign: 'center',
                        width: '55%',
                        margin: '0 auto',
                        boxSizing: 'border-box'
                    }}>
                        <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '15px', fontWeight: '500' }}>Prefer a different approach? </h2>
                        <p style={{ color: '#a1a1aa', fontSize: '1rem', marginBottom: '15px', maxWidth: '600px', margin: '0 auto 15px auto', lineHeight: '1.5rem' }}>
                            Feel free to reach out through any of these platforms or schedule a call at your convenience.
                        </p>



                        <div className='approach-box1' >

                            <a href="tel:+917847097951" className='tele' style={{
                                padding: '10px 10px',
                                // width:'97%',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                fontWeight: '500',
                                display: 'flex',
                                fontSize: "0.9rem",
                                alignItems: 'center',
                                gap: '5px',
                                transition: 'all 0.2s ease',
                                // margin:'10px'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = '#8646ee';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.0)';
                                    e.currentTarget.style.boxShadow = '0 0 50px 10px rgba(150, 39, 234, 0.4)';
                                    e.currentTarget.style.transform = 'scale(1.0)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                Schedule a Call
                            </a>


                            <a href="https://wa.me/917847097951?text=Hi%20Abinash,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noreferrer" className='tele' style={{
                                padding: '10px 18px',
                                // width:'97%',
                                background: 'transparent',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                borderRadius: '5px',
                                textDecoration: 'none',
                                fontWeight: '500',
                                display: 'flex',
                                fontSize: "0.9rem",
                                alignItems: 'center',
                                gap: '5px',
                                transition: 'all 0.2s ease'
                            }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = '#8646ee';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.0)';
                                    e.currentTarget.style.boxShadow = '0 0 50px 10px rgba(150, 39, 234, 0.4)';
                                    e.currentTarget.style.transform = 'scale(1.0)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                }}
                            >
                                Send WhatsApp
                            </a>

                        </div>

                    </motion.div>





                </motion.div>
            </main>
            <Foot />
        </>
    )
}

export default Fourth