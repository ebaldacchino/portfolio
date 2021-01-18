import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "frontend development",
    text: `Learned technologies include HTML, CSS, vanilla JS, React, Gatsby`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "backend development",
    text: `Learned technologies include NodeJS, ExpressJS, MongoDB`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "Deployment",
    text: `Have deployed to Firebase, Netlify and Heroku`,
  },
]
