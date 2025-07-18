import React from 'react'
import Swal from 'sweetalert2'


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
            <div className='fourth'>
                <div className='fourth1'>
                    <h1 className='H'>Let's Connect</h1>
                    <p className='pp'>Have a project in mind or just want to chat? I'd love to hear from you. Let's build something amazing together.</p>
                </div>

                <div className='fourth2'>

                    <form className='fourth2a' onSubmit={onSubmit}>
                        <h2 style={{ color: "white" }}>Send a Message</h2>

                        <div className='input-box'>
                            <label style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>Full Name</label>
                            <input type="text" className='field' placeholder='Enter your name' name='name' required />
                        </div>
                        <div className='input-box'>
                            <label style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>Email Address</label>
                            <input type="email" className='field' placeholder='Enter your email' name='email' required />
                        </div>

                        <div className='input-box'>
                            <label style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>Your Message</label>
                            <textarea name="message" id="" className='field mess' placeholder='Enter your message' required></textarea>
                        </div>
                        <button type='submit'><i class="fa-solid fa-paper-plane"></i> Send Message</button>
                    </form>






                    <div className='fourth22b'>
                        <div className='fourth2b'>
                            <h2 style={{ color: "white" }}>Contact Information</h2>
                            <div className='fourth2bb'>
                                <i class="fa-solid fa-envelope fa-2x"></i>

                                <div>
                                    <p style={{ color: "white", fontWeight: "600" }}>Email</p>
                                    <p>avimishra1401@gmail.com</p>
                                </div>

                            </div>

                            <div className='fourth2bb'>
                                <i class="fa-solid fa-phone-volume fa-2x"></i>

                                <div>
                                    <p style={{ color: "white", fontWeight: "600" }}>Phone</p>
                                    <p>+(91) 7847097951</p>
                                </div>

                            </div>


                            <div className='fourth2bb'>
                                <i class="fa-solid fa-location-dot fa-2x"></i>

                                <div>
                                    <p style={{ color: "white", fontWeight: "600" }}>Address</p>
                                    <p>Bhubaneswar , Odisha</p>
                                </div>

                            </div>
                        </div>

                        <div className='fourth2c'>
                            <h2 style={{ color: "white" }}>Social Links</h2>

                            <div>
                                <i onClick={() => window.location.href = 'https://github.com/Abi04nash'} class="fa-brands fa-square-github fa-2x"></i>
                                <i onClick={() => window.location.href = 'https://www.linkedin.com/in/abinash-mishra-880a5b291/'} class="fa-brands fa-linkedin fa-2x"></i>
                                <i onClick={() => window.location.href = 'https://www.codechef.com/users/abinash0404'} class='fas fa-bread-slice icon fa-2x'></i>
                                
  <svg onClick={() => window.location.href = 'https://leetcode.com/u/abinashmishra1401/'} className="new bi bi-caret-down" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 32 32">
    <path d="M21.469 23.907l-3.595 3.473c-0.624 0.625-1.484 0.885-2.432 0.885s-1.807-0.26-2.432-0.885l-5.776-5.812c-0.62-0.625-0.937-1.537-0.937-2.485 0-0.952 0.317-1.812 0.937-2.432l5.76-5.844c0.62-0.619 1.5-0.859 2.448-0.859s1.808 0.26 2.432 0.885l3.595 3.473c0.687 0.688 1.823 0.663 2.536-0.052 0.708-0.713 0.735-1.848 0.047-2.536l-3.473-3.511c-0.901-0.891-2.032-1.505-3.261-1.787l3.287-3.333c0.688-0.687 0.667-1.823-0.047-2.536s-1.849-0.735-2.536-0.052l-13.469 13.469c-1.307 1.312-1.989 3.113-1.989 5.113 0 1.996 0.683 3.86 1.989 5.168l5.797 5.812c1.307 1.307 3.115 1.937 5.115 1.937 1.995 0 3.801-0.683 5.109-1.989l3.479-3.521c0.688-0.683 0.661-1.817-0.052-2.531s-1.849-0.74-2.531-0.052zM27.749 17.349h-13.531c-0.932 0-1.692 0.801-1.692 1.791 0 0.991 0.76 1.797 1.692 1.797h13.531c0.933 0 1.693-0.807 1.693-1.797 0-0.989-0.76-1.791-1.693-1.791z"/>
  </svg>

                            </div>
                        </div>

                    </div>

                </div>






            </div>
        </>
    )
}

export default Fourth
