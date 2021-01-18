import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const query = graphql`
  query ProjectImgs {
    allImageSharp {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Project = ({ description, github, image, stack, title, url, index }) => {
  const images = useStaticQuery(query).allImageSharp.nodes
  const filteredImg = images.find(img => img.fluid.src.includes(`${image}`))
    .fluid
  return (
    <article className="project">
      {image && (
        <Image
          style={{ objectFit: "contain !important" }}
          className="project-img"
          fluid={filteredImg}
        />
      )}
      <div className="project-info">
        <span className="project-number">
          {index < 9 ? `0${index + 1}` : index + 1}.
        </span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((title, index) => (
            <span key={index}>{title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Project
