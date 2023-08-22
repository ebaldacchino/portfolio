import React from "react"
import { Link } from "gatsby"
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "contact",
    url: "/contact/",
  },
]

interface LinksProps {
  styleClass: string;
}

const Links = ({ styleClass }: LinksProps) => {
  return (
    <nav>
      <ul className={`page-links ${styleClass ? styleClass : ""}`}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Links
