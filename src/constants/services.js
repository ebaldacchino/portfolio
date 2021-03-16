import React from "react"
import { FaCode, FaServer, FaGlobe } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "frontend development",
    text:
      "Currently my strength. I like the idea of using code to solve problems and build something",
    lists: [
      {
        title: "Languages I speak",
        items: ["HTML", "CSS", "JS"],
      },
      {
        title: "Libraries / frameworks that I use",
        items: ["React", "Gatsby"],
      },
    ],
  },
  {
    id: 2,
    icon: <FaServer className="service-icon" />,
    title: "backend development",
    text:
      "Most of my backend skills are MERN stack related, as I've been learning so much on the frontend, and don't want to be a jack of all trades, master of none",
    lists: [
      {
        title: "I can program my backend with",
        items: ["NodeJS", "ExpressJS", "PHP (with WordPress)"],
      },
      {
        title: "Databases I use",
        items: ["MongoDB"],
      },
    ],
  },
  {
    id: 3,
    icon: <FaGlobe className="service-icon" />,
    title: "Deployment",
    text: "Have experimented with a few deployment environments",
    lists: [
      {
        title: "Deployment environments I use",
        items: ["Netlify", "Heroku", "Firebase"],
      },
    ],
  },
]
