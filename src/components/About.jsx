import React from 'react';
import trollImage from '../assets/troll.jpeg'; 

const About = () => {
    return (
        <section>
            <h1>About Me</h1>
            <img 
                src={trollImage} 
                alt="Bradley Troll" 
                style={{
                    width: "200px",
                    height: "auto",
                    borderRadius: "20px"  
                }}
            />
            <h1>Bio</h1>
            <p style={{
                marginLeft: '40px',  // Adds space to the left
                marginRight: '40px'  // Adds space to the right
            }}>
                After 15 years of enriching the minds of high school and college students as an English teacher, I am embarking on a new journey into the realm of full-stack web development. My decision to transition stems from a desire to explore new opportunities and challenges in the rapidly evolving tech industry. Throughout my teaching career, I honed key skills such as organization, communication, collaboration, and problem-solving, which are just as essential in the world of web development. As I pivot to this exciting new field, I am eager to blend my educational expertise with my growing technical skills to contribute to innovative projects and solutions.
            </p>
        </section>
    )
}

export default About;