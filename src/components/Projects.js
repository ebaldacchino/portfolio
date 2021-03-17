import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "../css/projects.css"

const query = graphql`
  {
    allContentfulProject {
      projects: nodes {
        url: siteUrl
        stack
        title
        description {
          raw
        }
        github: githubUrl
        image {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
        }
        featured
      }
    }
  }
`

const Projects = ({ title, showLink }) => {
  const {
    allContentfulProject: { projects },
  } = useStaticQuery(query)

  const displayedProjects = showLink
    ? projects.filter(project => project.featured).slice(0, 3)
    : projects

  return (
    <section className="projects-page">
      <section className="section projects">
        <Title title={title} />
        <div className="section-center projects-center">
          {displayedProjects.map((project, index) => (
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
