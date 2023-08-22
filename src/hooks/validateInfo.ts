interface IValidateInfo {
  name: string;
  email: string;
  phone: number;
  message: string;
}

export const validateInfo = ({ name, email, phone, message }: IValidateInfo) => {
  let errors: Partial<IValidateInfo> = {}

  if (!name.trim()) {
    errors.name = "Name required"
  } else if (
    !/^[a-z\u00C0-\u00ff]+(([',. -][a-z\u00C0-\u00ff ])?[a-z\u00C0-\u00ff]*)*$/i.test(
      name.trim()
    )
  ) {
    errors.name = "Valid name required"
  }

  if (!email.trim()) {
    errors.email = "Email required"
  } else if (
    !/^((".{0,62}")|([^. ]{1,64}))(\.((".+")|([^. ]+))){0,32}@[^. ]+(\.[^. ]{1,253}){0,127}$/i.test(
      email
    )
  ) {
    errors.email = "Email invalid"
  }

  if (!message.trim()) {
    errors.message = "Message required"
  } else if (message.trim().length < 3) {
    errors.message = "Valid message required"
  }
  return errors
}
