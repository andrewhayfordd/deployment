import React from "react";
import "./Hero.css";
import portfolio from "../Hero/img1/portfolio2.png";

function Hero(){
    const skillLevel1 = [
        {id:1, name: "JAVASCRIPT", val: 70},
    ]
    const skillLevel2 = [
        {id:2, name: "CSS", val: 80}
    ]
    const skillLevel3 = [
        {id:3, name: "HTML", val: 90}
    ]
    const skillLevel4 = [
        {id:4, name: "REACT JS", val: 70}
    ]

    const achievements = [
        {id: 1, name: "PRODUCTS COMPLETED", val: 200},
        {id: 2, name: "AWARD WINNING", val: 12},
        {id: 3, name: "YEARS EXPERIENCE", val: 10},
        {id: 4, name: "HAPPY CLIENTS", val: 72}
    ]
    

   const Works =[
    require("./img1/susan.png"),
    require("./img1/benshop.png"),
    require("./img1/baccon.png"),
    require("./img1/kovid.png"),
   ]
    
    return(
        <div className="a">
        <div className="Hero" id="#home">
            <div className="container">
            <div className="mainhero">
                <div className="head">
                <p><span>Hi</span> I'm <span>Andrew</span></p><p>A Software Developer</p>
                </div>

                <div className="main">
                    <p>I develope great Softwares with amazing user interface.</p> 
                    Join me down below and let's get cracking!
                </div>

                <div className="socialmedia">
                        <li><i className="fab fa-facebook-f"></i></li>
                        <li><i className="fab fa-instagram"></i></li>
                        <li><i className="fab fa-youtube"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                    </div>

                    <div className="btn">
                        <button>Download CV</button>
                    </div>

            </div>
        </div>

        <div className="container2">
            <div className="shape"><img src={portfolio} alt="" /></div>
        </div>
        </div>




        <div className="About">
            <div className="container">
          <div className="achievement">
            
            {achievements.map((details, index)=> (
                <div className="main">
                    <div key={details.id}>
                        <div className="val">{details.val}+</div>
                        <div className="name">{details.name}</div>
                    </div>
                </div>
            ))}
           
          </div>

        <div className="AboutMe" id="aboutme">
        <div className="container2">
                <div className="shape"><img src={portfolio} alt="" /></div>
            </div>

            <div className="container">
                <div className="head">About Me</div>
                <div className="title">Who I Am And What I Do </div>
                <div className="text1">
                    <p>As a novice front end software developer,
                    I am eager to expand my skills and create projects that will make a lasting impact
                    I am confident that my knowledge of React, JavaScript, and HTML/CSS
                    can help me become a successful and well-rounded developer.</p>
                </div>
                <div className="text1">
                    <p>With this in mind, I am actively searching for opportunities 
                    that will challenge me and allow me to grow as an individual
                    My passion for coding and problem solving will be an asset to any team</p>
                </div>
                
                <div className="btn">
                <button>Download CV</button>
                </div>
                
            </div>

            </div>

        </div>
        </div>


        <div className="Skill" id="skill">
            <div className="container">

                <div className="header">
                    <div className="head">WHY CHOOSE US</div>
                    <div className="title">Some Of My Skills</div>
                </div>

            <div className="container2">
            <div className="progress">
                <div className="progress_head">
                    {skillLevel1.map((skill)=> (
                        <div className="progress-head" key={skill.id}>
                            <div className="title">{skill.name}</div>
                            <div className="val">{skill.val}%</div>
                        </div>
                    ))}
                    <div className="progress_bar">
                        <div className="outer"><div className="inner"></div></div>
                    </div>
                </div>

                <div className="progress_head2">
                    {skillLevel2.map((skill)=> (
                        <div className="progress-head" key={skill.id}>
                            <div className="title">{skill.name}</div>
                            <div className="val">{skill.val}%</div>
                        </div>
                    ))}
                    <div className="progress_bar">
                        <div className="outer"><div className="inner"></div></div>
                    </div>
                </div>

                <div className="progress_head3">
                    {skillLevel3.map((skill)=> (
                        <div className="progress-head" key={skill.id}>
                            <div className="title">{skill.name}</div>
                            <div className="val">{skill.val}%</div>
                        </div>
                    ))}
                    <div className="progress_bar">
                        <div className="outer"><div className="inner"></div></div>
                    </div>
                </div>

                <div className="progress_head4">
                    {skillLevel4.map((skill)=> (
                        <div className="progress-head" key={skill.id}>
                            <div className="title">{skill.name}</div>
                            <div className="val">{skill.val}%</div>
                        </div>
                    ))}
                    <div className="progress_bar">
                        <div className="outer"><div className="inner"></div></div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="title">Every Day Is A New Challenge</div>

                <div className="text">
                    <p>I have the capacity to stay up-to-date with the changes in technology
                    and develop my skills to stay competitive in the field,
                    I also have the necessary ability to become a valuable asset.</p>
                </div>
                <div className="text">
                    <p>I have the ability to make a positive contribution to any team.
                    My passion for technology and problem-solving
                    makes me an ideal candidate for any software development role</p>
                </div>

                <div className="btn">
                    <button>Hire Me</button>
                </div>
            </div>

            </div>
            </div>
        </div>

       <div className="Mywork" id="mywork">
            <div className="header">
                <div className="head">My Works</div>
                <div className="title">Check out my works</div>
            </div>

            <div className="content">
                <div className="work">
                    {Works.map((work)=> (
                        <img src={work} alt="" />
                    ))}
                </div>
            </div>
       </div>
        
    

        </div>
    );
}
export default Hero;