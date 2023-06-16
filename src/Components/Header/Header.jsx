import React from "react";
import "./Header.css";
import "./fontawesome-free-5.15.4-web/css/all.min.css";

function Header(){

    window.addEventListener("scroll", function(){
        let Header = this.document.querySelector(".Header");
        Header.classList.toggle("active", this.window.scrollY > 200)
    })

    
    const body = document.querySelector("body");
    const mood =()=>{
        body.classList.toggle("dark");
    }

    

    return(

        <div className="Header">
            <div className="container">

            <div className="logo">
                <h2><span>LED</span>VUS</h2>
            </div>

            <div className="links">
                <li className="home"><a href="#home">Home</a></li>
                <li className="dp"><a href="#home">Projects</a>
                <ul>
                    <li className="sub"><a href="#home">Websites</a></li>
                    <li><a href="#home">Wep Apps</a></li>
                </ul>
                </li>
                <li><a href="#skill" >Skill</a></li>
                <li><a href="#mywork">My Work</a></li>
                <li><a href="#footer" >Contact</a></li>
            </div>

            <div className="button">
                <div className="mood">
                <i className="fas fa-moon" onClick={mood}></i>
                <i className="fas fa-sun" onClick={mood}></i>
                </div>
                <button type="button">Hire Me</button>
            </div>

           </div>

           </div>
           

    );
}
export default Header;