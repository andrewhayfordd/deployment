import React from "react";
import "./Contact.css";

const Contact=()=>{
    return(
        <div className="Contact">
            <div className="container">
                <div className="head">
                <h1 className="h1">Let's chat.<br/> Tell me how I can<br/> help you.</h1>
                <p className="p">Let's create something together</p>
                </div>

                <div className="flex">
                <div className="head2">
                    <div><i className="far fa-envelope"></i></div>
                    <div className="info">Mail me at <span>andrewhayfordd@gmail.com</span></div>
                </div>
                <div className="head3">
                    <div><i className="fas fa-phone"></i></div>
                    <div className="info">Call me on <br/><span>(+233) 501 880 091</span></div>
                </div>
                </div>
            </div>


            <div className="container2" id="contact_form">
                <div className="head"><h2>Send us a message</h2></div>
                <form action="https://formsubmit.co/aaryeetey12@gmail.com"  method="POST">
                    <input className="inp" type="text" name="Full Name" placeholder="Full Name*" required/>
                    <input className="inp" type="email" name="Email" placeholder="Email Address*" required/>
                    <input className="inp" type="text" name="Subject" placeholder="Subject"/>
                    <h4>Tell us more*</h4>
                    <textarea className="txtar" name="" id="" cols="30" rows="10" required></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button className="button" type="submit">Send Messge</button>
                </form>
            </div>
        </div>
    );
};
export default Contact;