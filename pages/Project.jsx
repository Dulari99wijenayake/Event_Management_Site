import React from 'react'
import './Project.css'

const Project = () => {
    const projects = [
        {
            title: "SkillHive Learning Platform",
            description: "An interactive e-learning platform with courses, quizzes, and community features.",
            tech: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "AI Chat Assistant",
            description: "A conversational AI tool that helps users with instant answers and productivity tasks.",
            tech: ["Python", "Flask", "OpenAI API"],
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive personal portfolio website to showcase skills, projects, and contact details.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "#"
        }
    ]

    return (
        <div className="project-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Our Projects</h1>
                    <p className="hero-subtitle">
                        Showcasing the innovative projects we’ve built to empower learners and creators.
                    </p>
                </div>
            </section>

            {/* Project Grid */}
            <section className="project-section">
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>
                    <div className="project-grid">
                        {projects.map((project, index) => (
                            <div className="project-card" key={index}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                                <a href={project.link} className="project-link">View Project →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Want to Collaborate?</h2>
                        <p>We’re always open to new ideas, partnerships, and projects. Let’s build something amazing together!</p>
                        <button className="cta-button">Contact Us</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
