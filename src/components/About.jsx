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
            <p>Bio</p>
        </section>
    )
}

export default About;