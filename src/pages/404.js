import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout title="Error" description="There appears to be an error">
      <main className="error-page">
        <article className="error-container">
          <h1>oops it's a dead end</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </article>
      </main>
    </Layout>
  )
}

export default Error
