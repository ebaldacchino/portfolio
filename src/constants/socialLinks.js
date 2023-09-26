import React from "react"
import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaMailBulk,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon" />,
    url: "https://www.linkedin.com/in/edwardbaldacchino",
  },
  {
    id: 2,
    icon: <FaTwitterSquare className="social-icon" />,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaGithubSquare className="social-icon" />,
    url: "https://github.com/ebaldacchino/",
  },
  {
    id: 4,
    icon: <FaMailBulk className="social-icon" />,
    url: "mailto: edwardjbaldacchino@gmail.com",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a
        href={link.url}
        className="social-link"
        target="_blank"
        rel="noreferrer"
      >
        {link.icon}
      </a>
    </li>
  )
})

const SocialLinks = ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
export default SocialLinks
