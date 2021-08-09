import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import "../css/hero.css"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm eddy</h1>
            <h4>full stack developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage
          className="hero-img"
          src="../assets/hero.svg"
          alt="Hero Image"
          placeholder="blurred"
        />
      </section>
    </header>
  )
}

export default Hero
