import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./fontawesome-free-6.4.0-web/css/all.min.css";

function Header(){
    const listElement = useRef(null)
    const listElement2 = useRef(null);

    window.addEventListener("scroll", function(){
        let Header = this.document.querySelector(".Header");
        Header.classList.toggle("active", this.window.scrollY > 200)
    })
    const body = document.querySelector("body");
    const mood =()=>{
        body.classList.toggle("dark");
    }


    const toggleBtn =()=>{
        listElement.current.classList.toggle("open")
        const isOpen = listElement.current.classList.contains("open")

        listElement2.current.classList = isOpen
        ? "fas fa-close" : "fas fa-bars"
    }
    

    return(

        <div className="Header" id="header">
            <div className="container">

            <div className="logo">
                <h2><span>LED</span>VUS</h2>
            </div>

            <div className="links">
                <li className="home"><a href="/">Home</a></li>
                <li className="dp"><a href="/">Projects</a>
                <ul>
                    <li className="sub"><a href="/">Websites</a></li>
                    <li><a href="/">Wep Apps</a></li>
                </ul>
                </li>
                <li><a href="/#skill" >Skill</a></li>
                <li><a href="/#mywork">My Work</a></li>
                <li><a href="/contact">Contact</a></li>
            </div>

            <div className="button">
                <div className="mood">
                <i className="fas fa-moon" onClick={mood}></i>
                <i className="fas fa-sun" onClick={mood}></i>
                </div>
                <button type="button">Hire Me</button>
            </div>

            <div className="toggle_btn" onClick={toggleBtn}>
            <i ref={listElement2} className="fas fa-bars"></i>
           </div>

           </div>

            
           <div className="dropdown_menu" ref={listElement}>
                <li className="home"><Link to={"/"}>Home</Link></li>
                <li className="dp"><a href="#home">Projects</a>
                <ul>
                    <li className="sub"><a href="#home">Websites</a></li>
                    <li><a href="#home">Wep Apps</a></li>
                </ul>
                </li>
                <li><a href="#skill" >Skill</a></li>
                <li><a href="#mywork">My Work</a></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            
            </div>
            
           </div>
           

    );
}
export default Header;