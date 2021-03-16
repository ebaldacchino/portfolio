import React from "react"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout title="About" description="About me">
      <main className="about-page">
        <section className="section-center about-center">
          <Image className="about-img" fluid={fluid} />
          <article className="about-text">
            <Title title="about me" />
            <p>
              I'm a self taught developer based in Melbourne, Australia. Native
              in Javascript, PHP is like my second language. When I'm giving my
              eyes a break from a computer screen, you'll most likely find me at
              the gym.
            </p>
            <p>
              More comfortable with front end, but that's because I've spent
              most of my early learning there. I'm open to using whatever tool
              that can complete the task. The main objective is to find a way to
              do it well.
            </p>
            <p>
              Currently seeking professional opportunities to continue growing
              and be the best I can be.
            </p>
            <div className="about-stack">
              {[
                "html",
                "css",
                "javascript",
                "react",
                "gatsby",
                "node",
                "mongodb",
                "wordpress",
                "php",
              ].map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default About
