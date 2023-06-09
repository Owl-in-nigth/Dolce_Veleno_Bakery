import { useState } from 'react'
import { useAuth } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from '../components/_partials/Alert'

export function Signup () {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { signup } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/dashboard')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='img_bk2'>
      <div className='w-full max-w-xs m-auto'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {error && <Alert message={error} />}
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700 text-sm font-bold my-2'>Email</label>
            <input type='email' name='email' placeholder='youremail@company.ltd' className='shadow appearance-none border rounder w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
          </div>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-gray-700 text-sm font-bold my-2'>Password</label>
            <input type='password' name='password' id='password' placeholder='******' className='shadow appearance-none border rounder w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={handleChange} />
          </div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Sign Up</button>
          <p className='my-4 text-sm flex justify-between px-3 text-black'> Do you have account? <Link to='/signin'>Sign in</Link></p>
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}
