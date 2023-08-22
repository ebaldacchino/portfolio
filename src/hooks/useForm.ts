import { useState, useEffect } from "react"
import axios from "axios"

interface IServerStateStatus {
  ok: boolean
  msg: string
}

export interface IServerState {
  submitting: boolean
  status: null | IServerStateStatus
  submitted?: boolean
}

export interface IValues {
  name: string
  email: string
  message: string
}

interface IUseForm {
  serverState: IServerState
  setServerState: React.Dispatch<React.SetStateAction<IServerState>>
  values: IValues
  errors: Partial<IValues>
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const useForm = (validate: Function): IUseForm => {
  const startValues = {
    name: "",
    email: "",
    message: "",
  }

  const [values, setValues] = useState(startValues)
  const [errors, setErrors] = useState({})
  const [serverState, setServerState] = useState<IServerState>({
    submitting: false,
    status: null,
    submitted: false,
  })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value,
    })
  }
  const handleResponse = (ok: boolean, msg: string) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    ok && setValues(startValues)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setServerState({
      ...serverState,
      submitting: true,
    })
    if (Object.keys(errors).length === 0) {
      const form = e.currentTarget

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
