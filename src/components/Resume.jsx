import React from 'react';

const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <a href='/bradleytroll.pdf' download="Bradley_Troll_Resume">Click Here to Download Resume</a>
            
            <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', textAlign: 'center', marginTop: '20px' }}>Front End</h3>
            <ul className="centered-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3 style={{ fontWeight: 'bold', fontSize: '1.2em', textAlign: 'center', marginTop: '20px' }}>Back End</h3>
            <ul className="centered-list">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
            </ul>
            <br></br>
        </section>
    );
}

export default Resume;
