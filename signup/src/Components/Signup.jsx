import React from 'react'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/userContext'
const Signup = () => {
  const { signUp, info} = useContext(userContext)
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({})
   const navigate = useNavigate()
  async function handleSignup (e) {
    try {
      e.preventDefault(),
      await signUp(email, password)
      navigate('/login')
      
    } catch (error) {
      setError(error)
      
    }
  }


 
  return (
    <div className='w-[100vw] h-[100vh] flex-col flex  items-center justify-center bg-slate-500'>
      <p className='text-4xl font-extrabold mb-4'>QUIZ APP</p>
      <p className='text-slate-200 mb-4 font-bold'>Register Account</p>
    <div className='text-slate-200 flex  items-center justify-center'>
      
        <form className='flex flex-col gap-9'>
            <label>Gmail</label>
            <input onChange={((e) => setEmail(e.target.value))} value={email} type='text' placeholder="input here " className=' text-slate-900 border-black border-2 p-[5px] rounded '  />
            <label>Password</label>
            <input onChange={((e) => setPassword(e.target.value))}  value={password} type='text' placeholder="input here " className=' text-slate-900  border-black border-2 p-[5px] rounded' />
        <button disabled={!password && !email} onClick={handleSignup} className=' text-white bg-slate-900 rounded p-[10px]'>Sign up</button>
        <p>already registered?  <Link to='/login' className='text-blue-900 cursor-pointer'>Log in</Link></p>
        </form>
        
    
    </div>
    </div>
  )
}

export default Signup