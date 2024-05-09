import React from 'react';
import funCastImage from '../assets/funcast.png'
import buffyImage from '../assets/buffy.png'

const Portfolio = () => {
    const projects = [
        { title: "FunCast", imageUrl: funCastImage, liveUrl: "https://bradleytroll.github.io/FunCast/", repoUrl: "https://github.com/bradleytroll/FunCast" },
        { title: "Buffy Trivia Challenge", imageUrl: buffyImage, liveUrl: "https://bradleytroll.github.io/buffy-trivia-challenge/", repoUrl: "https://github.com/bradleytroll/buffy-trivia-challenge" },
        { title: "Placeholder 3", imageUrl: "", liveUrl: "#", repoUrl: "#" },
        { title: "Placeholder 4", imageUrl: "", liveUrl: "#", repoUrl: "#" },
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <img src={project.imageUrl} alt={project.title} style={{ width: "400px", height: "auto" }} />
                        <br></br>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                        <span style={{ margin: '0 10px' }}></span>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio