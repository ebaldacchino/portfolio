import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import projects from "../constants/projects"

const Projects = ({ title, showLink }) => {
  const featuredProjects = showLink ? projects.slice(0, 3) : projects
  return (
    <section className="projects-page">
      <section className="section projects">
        <Title title={title} />
        <div className="section-center projects-center">
          {featuredProjects.map((project, index) => (
            <Project {...project} index={index} key={index} />
          ))}
        </div>
        {showLink && (
          <Link className="btn center-btn" to="/projects">
            projects
          </Link>
        )}
      </section>
    </section>
  )
}

export default Projects
