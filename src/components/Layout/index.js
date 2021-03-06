import React, { useState, useEffect } from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Main from "./Main"
import { FaArrowCircleUp } from "react-icons/fa"
const Layout = ({ children, title, description, mainStyle }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => setIsOpen(!isOpen)
  const [offset, setOffset] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const checkOffset = () => {
    setWindowHeight(window.innerHeight)
    setOffset(window.pageYOffset)
  }
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  useEffect(() => {
    window.addEventListener("scroll", checkOffset)
    return () => window.removeEventListener("scroll", checkOffset)
  }, [])

  return (
    <>
      <SEO title={title} description={description} />
      <Navbar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <Main style={mainStyle}>{children}</Main>
      {offset > windowHeight / 2 && (
        <FaArrowCircleUp className="scrollTop" onClick={scrollTop} />
      )}
      <Footer />
    </>
  )
}

export default Layout
