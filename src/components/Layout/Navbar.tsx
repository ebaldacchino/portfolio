import React from "react"
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../../constants/links"

interface NavbarProps {
  toggleSidebar: () => void
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>
              <span>Edward</span> Baldacchino
            </h3>
          </Link>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
