import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import "../css/form-submitted.css"
const FormSubmitted = ({ serverState, setServerState}) => {
  return (
    <section className="form-submitted-bg">
      <article className="contact-form form-submitted-container">
        <h2>success</h2>
        <FaCheckCircle className="icon" />
        <p>Thank you for reaching out. We'll be in touch soon!</p>
        <button
          className="submit-btn btn"
          onClick={() => setServerState({ ...serverState, submitted: false })}
        >
          ok
        </button>
      </article>
    </section>
  )
}

export default FormSubmitted
