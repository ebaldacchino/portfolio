import React from "react"
import { FaCode, FaServer, FaGlobe } from "react-icons/fa"
const Services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "frontend development",
    text: "I like the idea of using code to solve problems and build something",
    lists: [
      {
        title: "Languages I speak",
        items: ["JS", "PHP"],
      },
      {
        title: "I can style with",
        items: [
          "CSS",
          "CSS Modules",
          "Tailwind",
          "Styled Components",
          "Bootstrap",
        ],
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
      "Most of my backend skills are currently MERN stack related, but I've played around with some extras not listed",
    lists: [
      {
        title: "I can program my backend with",
        items: ["NodeJS", "ExpressJS", "WordPress"],
      },
      {
        title: "For CMS, I typically use",
        items: ["WordPress", "Contentful"],
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
        title: "Can deploy on",
        items: [
          "Netlify",
          "Heroku",
          "Firebase",
          "Any environment with WordPress or NodeJS support",
        ],
      },
      {
        title: "Other general technologies I use include",
        items: ["Webpack", "GitHub"],
      },
    ],
  },
]
export default Services
