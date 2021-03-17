import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Project = ({
  description,
  github,
  image: { gatsbyImageData },
  stack,
  title,
  url,
  index,
}) => {
  const img = getImage(gatsbyImageData)
  return (
    <article className="project">
      {gatsbyImageData && (
        <GatsbyImage
          className="project-img"
          image={img}
          alt={`${title} banner image`}
        />
      )}
      <div className="project-info">
        <span className="project-number">
          {index < 9 ? `0${index + 1}` : index + 1}.
        </span>
        <h3>{title}</h3>
        {renderRichText(description, options)}
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

export default Project
