import { useState, useEffect } from "react"
import axios from "axios"

const useForm = validate => {
  const startValues = {
    name: "",
    email: "",
    message: "",
  }

  const [values, setValues] = useState(startValues)
  const [errors, setErrors] = useState({})
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
    submitted: false,
  })
  const handleChange = e => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    ok && setValues(startValues)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setServerState({
      ...serverState,
      submitting: true,
    })
    if (Object.keys(errors).length === 0) {
      const form = e.target

      axios({
        method: "POST",
        url: "https://formspree.io/f/mdopyaob",
        data: new FormData(form),
      })
        .then(r => {
          handleResponse(true, "Thanks!")
          setServerState({
            ...serverState,
            submitting: false,
            submitted: true,
          })
        })
        .catch(r => {
          handleResponse(false, r.response.data.error)
        })
    }
  }
  const updateErrors = () => setErrors(validate(values))
  useEffect(updateErrors, [values, validate])

  return {
    serverState,
    setServerState,
    values,
    errors,
    handleSubmit,
    handleChange,
  }
}

export default useForm
