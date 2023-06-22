import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/userContext'

const Login = () => {
  const { logemail, logpassword, loginPassword, loginEmail, email, password, getLogValue} = useContext(userContext)
  return (
    <div>
       
    </div>
  )
}

export default Login