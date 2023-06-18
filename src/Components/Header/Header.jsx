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

    const menulist = document.querySelector(".menulist");
    const links = document.querySelector(".linkss")
    const menubtn =()=>{
       menulist.classList.toggle("activemenu");
       links.classList.toggle("activemenulist")
    }
    

    return(

        <div className="Header" id="header">
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

            <div className="menu" onClick={menubtn}>
            <i className="fas fa-bars"></i>
           </div>

           </div>

            
           <div className="menulist">
            <div className="linkss">
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
            </div>
            
           </div>
           

    );
}
export default Header;