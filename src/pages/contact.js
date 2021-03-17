import React from "react" 
import FormSubmitted from "../components/FormSubmitted"
import Layout from "../components/Layout"
import useForm from "../hooks/useForm"
import { validateInfo } from "../hooks/validateInfo"
import "../css/contact.css" 
const Contact = () => {
  const {
    serverState,
    setServerState,
    values,
    errors,
    handleSubmit,
    handleChange,
  } = useForm(validateInfo)
  return (
    <Layout title="Contact" description="Get in touch today">
      <main className="contact-page">
        <section className="contact-form">
          <h3>get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              {serverState.submitting && errors.name && (
                <small>{errors.name}</small>
              )}
              <input
                type="text"
                name="name"
                placeholder="name"
                className={`form-control ${
                  !serverState.submitting
                    ? ""
                    : errors.name
                    ? "error"
                    : "success"
                }`}
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
              {serverState.submitting && errors.email && (
                <small>{errors.email}</small>
              )}
              <input
                type="email"
                name="email"
                placeholder="email"
                className={`form-control ${
                  !serverState.submitting
                    ? ""
                    : errors.email
                    ? "error"
                    : "success"
                }`}
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              {serverState.submitting && errors.message && (
                <small>{errors.message}</small>
              )}
              <textarea
                name="message"
                placeholder="message"
                rows="5"
                className={`form-control ${
                  !serverState.submitting
                    ? ""
                    : errors.message
                    ? "error"
                    : "success"
                }`}
                value={values.message}
                onChange={handleChange}
                error={errors.message}
              />
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </section>
      </main>
      {serverState.submitted && (
        <FormSubmitted
          serverState={serverState}
          setServerState={setServerState}
        />
      )}
    </Layout>
  )
}

export default Contact
