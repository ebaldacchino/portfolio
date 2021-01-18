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
            <p>I'm a self taught developer based in Melbourne, Australia.</p>
            <p>
              An exercise science graduate and fitness professional, I decided
              on a change of career during the coronavirus lockdowns. My mind
              spent a while dwelling on the idea of coding. Eventually, I
              decided to dabble in javascript. After a few months, I was hooked.
              The thrill of overcoming obstacles and broadening my knowledge
              quickly became an obsession. It has since been the basis of my
              day.
            </p>
            <p>
              I'm seeking professional opportunities to continue growing and be
              the best I can be.
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
