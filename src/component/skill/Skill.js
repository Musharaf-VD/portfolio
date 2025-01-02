import React from 'react';
import { Element } from 'react-scroll'
import './Skill.css'
import html from '../asset/html.png'
import css from '../asset/css.png'
import javascript from '../asset/javascript.png'
import react from '../asset/react.png'
import bootstrap from '../asset/bootstrap.png'
import { GiBarbedStar } from "react-icons/gi";



const Skill = () => {


    const skills = {
        skill: [
            {
                fname: "HTML",
                img: html,
                para: "HTML (HyperText Markup Language) is the standard language used to create and structure the content of web pages",
                color: "#e44d26",
                answer: true,
                animation: "left-right"
            },
            {
                fname: "CSS",
                img: css,
                para: "CSS (Cascading Style Sheets) is a styling language used to define the visual appearance and layout of HTML elements on a webpage.",
                color: "#3747d6",
                clsname: "cssedit",
                answer: true,
                animation: "left-right"
            },
            {
                fname: "Bootstrap",
                img: bootstrap,
                para: "Bootstrap is a popular, open-source CSS framework designed to create responsive and mobile-first websites quickly",
                color: "#563d7c",
                answer: false,
                animation: "none"
            },
            {
                fname: "JavaScript",
                img: javascript,
                para: "JavaScript is a versatile programming language that enables interactivity and dynamic behavior on web pages.",
                color: "#ffcf2d",
                answer: false,
                animation: "right-left"
            },
            {
                fname: "React",
                img: react,
                para: "React.js is a JavaScript library for building user interfaces, especially single-page applications.",
                color: "#00d8ff",
                answer: false,
                animation: "right-left"
            },
        ]
    }

    return (
        <Element id='skill'>
            <div className='skill-container'>
                <div className="skillheading-container">
                    <h2>SKILL</h2>
                </div>
                <div className='language-container'>
                    {skills.skill.map((skillsep, index) => (
                        <div
                            key={index}
                            className={`skilldetail-container ${skillsep.animation}`} style={{
                                boxShadow: ` 0 0 20px ${skillsep.color}, 0 0 25px ${skillsep.color}`
       
                            }}
                        >
                            <h2 style={{ color: skillsep.color }}>{skillsep.fname}</h2>
                            <img src={skillsep.img} className='mx-4' alt={skillsep.fname} />
                            <p style={{ color: skillsep.color }}><GiBarbedStar className='icon' style={{ boxShadow: `0 0 20px ${skillsep.color}, 0 0 25px${skillsep.color}` }} />&nbsp;{skillsep.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default Skill
