import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

const ProjectsPage = () => {
  return (
    <Layout title="Projects" description="View my portfolio">
      <Projects title="all projects" />
    </Layout>
  )
}
export default ProjectsPage
