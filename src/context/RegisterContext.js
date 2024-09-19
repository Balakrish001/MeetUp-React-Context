import React from 'react'

const RegisterContext = React.createContext({
  isRegiterered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default RegisterContext
