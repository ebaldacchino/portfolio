import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Title from "../components/Title"
import "../css/about.css"
const About = () => {
  return (
    <Layout title="About" description="About me" mainStyle="about-page">
      <section className="section-center about-center">
        <StaticImage
          className="about-img"
          src="../assets/hero-img.svg"
          alt="Hero image"
          placeholder="blurred"
        />
        <article className="about-text">
          <Title title="about me" />
          <p>
            I'm a self taught developer based in Melbourne, Australia. Currently
            employed by Clear21 as a .NET/React developer. At a high level, my
            current task is building the company's React component library
            complete with integration testing using <code>Storybook</code>,
            combined with integrating React into a pre-existing Knockout JS
            frontend solution. Native in TypeScript, PHP is like that second
            language I had to learn in high school. When I'm giving my eyes a
            break from a computer screen, you'll most likely find me at the gym.
          </p>
          <p>
            More proficient with front end, but open to using whatever tool that
            can complete the task. The main objective is to find a way to do it
            well.
          </p>
          <p>
            Currently seeking professional opportunities to continue growing and
            be the best I can be.
          </p>
          <div className="about-stack">
            {[
              "typescript",
              "react",
              "next js",
              "gatsby",
              "c#",
              "storybook",
              "tailwind",
              "styled components",
              "material ui",
              "javascript",
              "node",
              "mongodb",
              "contentful",
              "webpack",
              "wordpress",
              "php",
              "html",
              "css",
            ].map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </article>
      </section>
    </Layout>
  )
}

export default About
