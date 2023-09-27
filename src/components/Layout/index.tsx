import React, { useState, useEffect } from "react"
import SEO from "./SEO"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import Main from "./Main"
import { FaArrowCircleUp } from "react-icons/fa"

interface LayoutProps {
  children: React.ReactNode
  title: string
  description?: string
  mainStyle?: string
}

const Layout = ({ children, title, description, mainStyle }: LayoutProps) => {
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
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <Main style={mainStyle}>{children}</Main>
      {offset > windowHeight / 2 && (
        <button className="scrollTop" onClick={scrollTop}>
          <FaArrowCircleUp />
        </button>
      )}
      <Footer />
    </>
  )
}

export default Layout
