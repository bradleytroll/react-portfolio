import React from 'react';
import funCastImage from '../assets/funcast.png'
import buffyImage from '../assets/buffy.png'
import fiveDayForecasterImage from '../assets/five-day-forecaster.png'
import workDayScheduler from '../assets/work-day-scheduler.png'
import passwordGenerator from '../assets/password-generator.png'
import shelfLife from '../assets/shelflife.png'

const Portfolio = () => {
    const projects = [
        { title: "FunCast", imageUrl: funCastImage, liveUrl: "https://bradleytroll.github.io/FunCast/", repoUrl: "https://github.com/bradleytroll/FunCast" },
        { title: "Buffy Trivia Challenge", imageUrl: buffyImage, liveUrl: "https://bradleytroll.github.io/buffy-trivia-challenge/", repoUrl: "https://github.com/bradleytroll/buffy-trivia-challenge" },
        { title: "Five-Day Forecaster", imageUrl: fiveDayForecasterImage, liveUrl: "https://bradleytroll.github.io/five-day-forecaster/", repoUrl: "https://github.com/bradleytroll/five-day-forecaster" },
        { title: "Work Day Scheduler", imageUrl: workDayScheduler, liveUrl: "https://bradleytroll.github.io/five-day-forecaster/", repoUrl: "https://github.com/bradleytroll/work-day-scheduler" },
        { title: "ShelfLife", imageUrl: shelfLife, liveUrl: "https://shelflife-91f231d5543b.herokuapp.com/", repoUrl: "https://github.com/bradleytroll/round2" },
        { title: "Password Generator", imageUrl: passwordGenerator, liveUrl: "https://bradleytroll.github.io/password-generator/", repoUrl: "https://github.com/bradleytroll/password-generator" },

    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{project.title}</h3>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.imageUrl} alt={project.title} style={{ width: "400px", height: "auto" }} />
                        </a>
                        <br />
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Application</a>
                        <span style={{ margin: '0 10px' }}></span>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                    </div>
                ))}
            </div>
            <br />
        </section>
    )
}

export default Portfolio

