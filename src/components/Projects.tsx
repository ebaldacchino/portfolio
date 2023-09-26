import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "../css/projects.css"
import { ImageDataLike } from "gatsby-plugin-image";
import { ContentfulRichTextGatsbyReference, RenderRichTextData } from "gatsby-source-contentful/rich-text";

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

interface ProjectsProps {
  title: string
  showLink?: boolean
}

export interface IProject {
  description: RenderRichTextData<ContentfulRichTextGatsbyReference>
  github: string
  image: {
    gatsbyImageData: ImageDataLike
  }
  stack: string[]
  title: string
  url: string
  index: number
  featured: boolean
}

const Projects = ({ title, showLink }: ProjectsProps) => {
  const {
    allContentfulProject: { projects },
  }: { allContentfulProject: { projects: IProject[] } } = useStaticQuery(query)

  const displayedProjects: IProject[] = showLink
    ? projects.filter(project => project.featured).slice(0, 3)
    : projects

  return (
    <section className="projects-page">
      <section className="projects">
        <Title title={title} />
        <div className="section-center projects-center">
          {displayedProjects.map((project, index: number) => (
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
