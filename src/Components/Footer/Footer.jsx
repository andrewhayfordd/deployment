import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer(){
    return(
        <div className="Footer" id="footer"> 
            <div className="container">

                <div className="content">
                    <div className="logo"><h2>LED<span>VUS</span></h2></div>

                    <div className="text">
                        <p>Feel free to link up with me on social media. You will find more of my work there</p>
                        
                    </div>

                    <div className="socialmedia">
                        <li><a href="https://wa.me/+233501880091"><i className="fab fa-whatsapp"/></a></li>
                        <li><a href="https://www.instagram.com/andrew_hayfordd"><i className="fab fa-instagram"/></a></li>
                        <li><a href="https://www.youtube.com"><i className="fab fa-youtube"/></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"/></a></li>
                    </div>
                </div>

                <div className="content2">
                    <div className="head">Quick Links</div>

                    <div className="links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Websites</a></li>
                        <li><a href="/">Web Apps</a></li>
                        <li><Link to={"/cont"}>Contact</Link></li>
                        <li><a href="/#mywork">My Work</a></li>
                    </div>
                </div>

                <div className="content4">
                    <div className="head">Get In Touch</div>

                    <div className="text">
                    <div className="contact">
                    <div><i className="fas fa-map-marker-alt"></i> Accra, Ghana GE-280-1966</div>
                    <div><i className="fas fa-phone"></i> Phone: +233 501880091</div>
                    <div><i className="fas fa-envelope"></i> Email: andrewhayford0@gmail.com</div>
                     </div>
                </div>
                </div>

                <div className="contact-footer">
                    <div className="head">Contact</div>
                    <div className="inputs">
                        <form action="https://formsubmit.co/8bc9c9738f2b49edb1a2915d54dc0883" method="POST">
                    <input type="text" name="First Name" placeholder="First Name"/>
                    <input type="text" name="Last Name" placeholder="Last Name"/><br/>
                    <input type="text" name="Subject" placeholder="Subject" /><br/>
                    <textarea placeholder="Message" name="Message" id="" cols="30" rows="10"></textarea>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
              
            </div>

            <div className="end">
                <p>Copyright © 2022 Developed by IDEACO-All rights reserved.</p>
                <div className="socialmedia">
                <li><a href="https://wa.me/+233501880091"><i className="fab fa-whatsapp"/></a></li>
                        <li><a href="https://www.instagram.com/andrew_hayfordd"><i className="fab fa-instagram"/></a></li>
                        <li><a href="https://www.youtube.com"><i className="fab fa-youtube"/></a></li>
                        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"/></a></li>
                    </div>
            </div>
        </div>
    );
}
export default Footer;