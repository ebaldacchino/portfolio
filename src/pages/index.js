import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects" 
export default () => {
  return (
    <Layout title="Home">
      <Hero />
      <Services />
      <Projects title="featured projects" showLink />
    </Layout>
  )
}
