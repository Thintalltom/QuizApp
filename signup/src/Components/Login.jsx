import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/userContext'

const Login = () => {
  const { logemail, logpassword, login, setLogPassword, setLogEmail } = useContext(userContext)
  const navigate = useNavigate()

  async function handleLogin (e) {
    try {
      e.preventDefault(),
      await login(logemail, logpassword)
      if(login) 
      {
        navigate('/quiz')
      
      }
      
    } catch (error) {
      alert(error)
      
    }
  }
  return (
    <div>
      <div className='w-[100vw] h-[100vh] flex-col flex  items-center justify-center bg-slate-500'>
      <p className='text-4xl font-extrabold mb-4'>QUIZ APP</p>
      <p className='text-slate-200 mb-4 font-bold'>Register Account</p>
    <div className='text-slate-200 flex  items-center justify-center'>
        <form className='flex flex-col gap-9'>
            <label>Gmail</label>
            <input  onChange={((e) => setLogEmail(e.target.value))} value={logemail}  type='text' placeholder="input here " className=' text-slate-900 border-black border-2 p-[5px] rounded '  />
            <label>Password</label>
            <input onChange={((e) => setLogPassword(e.target.value))} value={logpassword} type='text' placeholder="input here " className=' text-slate-900  border-black border-2 p-[5px] rounded' />
        <button  onClick={handleLogin}  className=' text-white bg-slate-900 rounded p-[10px]'>Login</button>
        <p>Dont have an account? <Link to='/' className='text-blue-900 cursor-pointer'>Sign up</Link></p>
        </form>
        
    
    </div>
    </div>
    </div>
  )
}

export default Login