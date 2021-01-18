import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FaTimes } from "react-icons/fa"
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
      <button onClick={toggleSidebar} className="close-btn">
        <FaTimes />
      </button>
      <div className="side-container">
        <Links
          styleClass={`sidebar-links-style ${isOpen ? "sidebar-links" : ""}`}
        />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`} />
      </div>
    </aside>
  )
}

export default Sidebar
