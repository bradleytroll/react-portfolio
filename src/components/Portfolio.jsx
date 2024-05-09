import React from 'react';
import funCastImage from '../assets/funcast.png'
import buffyImage from '../assets/buffy.png'
import fiveDayForecasterImage from '../assets/five-day-forecaster.png'
import workDayScheduler from '../assets/work-day-scheduler.png'
import passwordGenerator from '../assets/password-generator.png'
import shelfLife from '../assets/shelflife.png'

const Portfolio = () => {
    const projects = [
        { title: "FunCast: Theme Park Wait Times & Weather", imageUrl: funCastImage, liveUrl: "https://bradleytroll.github.io/FunCast/", repoUrl: "https://github.com/bradleytroll/FunCast" },
        { title: "Buffy Trivia Challenge", imageUrl: buffyImage, liveUrl: "https://bradleytroll.github.io/buffy-trivia-challenge/", repoUrl: "https://github.com/bradleytroll/buffy-trivia-challenge" },
        { title: "Five-Day Weather Forecaster", imageUrl: fiveDayForecasterImage, liveUrl: "https://bradleytroll.github.io/five-day-forecaster/", repoUrl: "https://github.com/bradleytroll/five-day-forecaster" },
        { title: "Simple Work Day Scheduler", imageUrl: workDayScheduler, liveUrl: "https://bradleytroll.github.io/five-day-forecaster/", repoUrl: "https://github.com/bradleytroll/work-day-scheduler" },
        { title: "ShelfLife: Book Social Media", imageUrl: shelfLife, liveUrl: "https://shelflife-91f231d5543b.herokuapp.com/", repoUrl: "https://github.com/bradleytroll/round2" },
        { title: "Password Generator", imageUrl: passwordGenerator, liveUrl: "https://bradleytroll.github.io/password-generator/", repoUrl: "https://github.com/bradleytroll/password-generator" },

    ];

    return (
        <section>
            <h1>Portfolio</h1>
            <hr></hr>
            <div className="projects">
                {projects.map((project, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h3>{project.title}</h3>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <img src={project.imageUrl} alt={project.title} style={{ width: "400px", height: "auto", borderRadius: "20px" }} />
                        </a>
                        <br />
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Application</a>
                        <span style={{ margin: '0 10px' }}></span>
                        <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                        <hr></hr>
                    </div>
                    
                ))}
            </div>
            <br />
        </section>
    )
}

export default Portfolio

