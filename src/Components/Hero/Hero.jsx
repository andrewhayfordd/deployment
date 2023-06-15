import React, { useState } from "react";
import "./Hero.css";
import svg from "./img1/svg.mp4";
import susan from "./img1/susan.png";

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

    const details1 = [{id: 1, name1: "PRODUCTS COMPLETED", val1: 200}]
    const details2 = [{id: 2, name2: "AWARD WINNING", val2: 12}]
    const details3 = [{id: 3, name3: "YEARS EXPERIENCE", val3: 10}]
    const details4 = [{id: 4, name4: "HAPPY CLIENTS", val4: 72}]
    const dates = [
        {date1: "26 FEB 2019", date2: "27 FEB 2019", date3: "28 FEB 2019"}
    ]

   const Works =[
    require("./img1/susan.png"),
    require("./img1/benshop.png"),
    require("./img1/baccon.png"),
    require("./img1/kovid.png"),
   ]
    
    return(
        <div className="a">
        <div className="Hero">
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
            <video src={svg} loop muted autoPlay></video>
        </div>
        </div>




        <div className="About">
            <div className="container">
          <div className="achievement">
            
            <div className="main">{details1.map((detail)=> (
                    <div key={detail.id}>
                        <div className="val">{detail.val1}</div>
                            <div className="name">{detail.name1}</div>
                    </div>))}
            </div>
            <div className="main">{details2.map((detail)=> (
                    <div key={detail.id}>
                        <div className="val">{detail.val2}</div>
                         <div className="name">{detail.name2}</div>
                    </div>))}
            </div>

            <div className="main">
                {details3.map((detail)=> (
                    <div key={detail.id}>
                        <div className="val">{detail.val3}+</div>
                            <div className="name">{detail.name3}</div>
                    </div>
                ))}
            </div>

            <div className="main">
                {details4.map((detail)=> (
                    <div key={detail.id}>
                        <div className="val">{detail.val4}+</div>
                            <div className="name">{detail.name4}</div>
                    </div>
                ))}
            </div>
          </div>

        <div className="AboutMe" id="aboutme">
            <div className="container">
                <div className="head">About Me</div>
                <div className="title">Who I Am And What I Do </div>
                <div className="text1">
                    <p>As a novice front end software developer,</p> 
                    <p>I am eager to expand my skills and create projects that will make a lasting impact </p>
                    <p>I am confident that my knowledge of React, JavaScript, and HTML/CSS</p>
                    <p>can help me become a successful and well-rounded developer.</p>
                </div>
                <div className="text1">
                    <p>With this in mind, I am actively searching for opportunities</p> 
                    <p>that will challenge me and allow me to grow as an individual</p>
                    <p>My passion for coding and problem solving will be an asset to any team</p>
                </div>
                
                <div className="btn">
                <button>Download CV</button>
                </div>
                
            </div>

            <div className="container2">
                <video src={svg} loop muted autoPlay></video>
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
                            <div>{skill.val}%</div>
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
                            <div>{skill.val}%</div>
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
                            <div>{skill.val}%</div>
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
                            <div>{skill.val}%</div>
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
                    <p>I have the capacity to stay up-to-date with the changes in technology</p>
                    <p>and develop my skills to stay competitive in the field,</p>
                    <p>I also have the necessary ability to become a valuable asset.</p>
                </div>
                <div className="text2">
                    <p>I have the ability to make a positive contribution to any team.</p>
                    <p>My passion for technology and problem-solving</p>
                    <p>makes me an ideal candidate for any software development role</p>
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