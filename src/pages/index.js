import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
const Home = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Services />
      <Projects title="featured projects" showLink />
    </Layout>
  )
}
export default Home
