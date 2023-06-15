import React from "react";
import "./Header.css";
import "./fontawesome-free-5.15.4-web/css/all.min.css";

function Header(){

    window.addEventListener("scroll", function(){
        let Header = this.document.querySelector(".Header");
        Header.classList.toggle("active", this.window.scrollY > 200)
    })


    return(

        <div className="Header">
            <div className="container">

            <div className="logo">
                <h2><span>LED</span>VUS</h2>
            </div>

            <div className="links">
                <li className="home"><a href="">Home</a></li>
                <li className="dp"><a href="">Projects</a>
                <ul>
                    <li className="sub"><a href="">Websites</a></li>
                    <li><a href="">Wep Apps</a></li>
                </ul>
                </li>
                <li><a href="#skill" >Skill</a></li>
                <li><a href="#mywork">My Work</a></li>
                <li><a href="#footer" >Contact</a></li>
            </div>

            <div className="button">
                <i className="fas fa-moon"></i>
                <button type="button">Hire Me</button>
            </div>

           </div>


           <div className="container2">
            
           </div>
           </div>
           

    );
}
export default Header;