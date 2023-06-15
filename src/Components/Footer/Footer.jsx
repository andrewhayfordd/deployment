import React from "react";
import "./Footer.css";

function Footer(){
    return(
        <div className="Footer" id="footer"> 
            <div className="container">

                <div className="content">
                    <div className="logo"><h2>LED<span>VUS</span></h2></div>

                    <div className="text">
                        <p>Feel free to link up with <br/>me on social media. <br/>You will find more of my work there</p>
                        
                    </div>

                    <div className="socialmedia">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </div>
                </div>

                <div className="content2">
                    <div className="head">Quick Links</div>

                    <div className="links">
                        <li><a href="">Home</a></li>
                        <li><a href="">Websites</a></li>
                        <li><a href="">Web Apps</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">My Work</a></li>
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
                        <form action="" method="POST" data-email="aaryeetey12@gmail.com">
                    <input type="text" name="First Name" placeholder="First Name"/>
                    <input type="text" name="Last Name" placeholder="Last Name"/><br/>
                    <input type="text" name="Subject" placeholder="Subject" /><br/>
                    <textarea placeholder="Message" name="Message" id="" cols="30" rows="10"></textarea>
                    <button type="submit">Submit</button>
                    </form>
                    </div>
                </div>
              
            </div>

            <div className="end">
                <p>Copyright © 2022 Developed by IDEACO-All rights reserved.</p>
            </div>
        </div>
    );
}
export default Footer;