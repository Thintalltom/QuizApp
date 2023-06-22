import React from 'react'
import { useContext } from 'react'
import { userContext } from '../Context/userContext'
const Signup = () => {
  const { getValue, getEmail, getPassword, email, password, info} = useContext(userContext)
 
  return (
    <div className='text-slate-500 text-center items-center justify-items-center'>
        <form className='flex flex-col  items-center justify-items-center'>
            <label>UserName</label>
            <input onChange={getEmail} value={email} type='text' placeholder="input here "  />
            <label>Password</label>
            <input onChange={getPassword} value={password} type='text' placeholder="input here " className='b-4 b-slate-500' />
        <button onClick={getValue}>Sign up</button>
      
        </form>
    
    </div>
  )
}

export default Signup