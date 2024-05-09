import React from 'react';

const Portfolio = () => {
    const projects = [
        { title: "Placeholder 1", imageUrl: "", liveUrl: "#", repoUrl: "#" },
        { title: "Placeholder 2", imageUrl: "", liveUrl: "#", repoUrl: "#" },
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
                        <img src={project.imageUrl} alt={project.title} />
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live</a>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Repo</a>
                    </div>
                ))}
            </div>
        </section>
    )
}