import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import "../css/about.css"
const About = () => {
  return (
    <Layout title="About" description="About me">
      <main className="about-page">
        <section className="section-center about-center">
          <StaticImage
            className="about-img"
            src="../assets/hero-img.png"
            alt="Hero image"
          />
          <article className="about-text">
            <Title title="about me" />
            <p>
              I'm a self taught developer based in Melbourne, Australia. Native
              in Javascript, PHP is like that second language I had to learn in
              high school. When I'm giving my eyes a break from a computer
              screen, you'll most likely find me at the gym.
            </p>
            <p>
              More comfortable with front end, but open to using whatever tool
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
                "contentful",
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
