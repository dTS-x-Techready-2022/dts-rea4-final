import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
    <div className='w-full h-full'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/83b58a62-6624-4188-8119-8bdf395dae3f/ID-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600ox] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='w-full flex flex-col'>
              <input onChange={(e) => setEmail(e.target.value)} className='p-3 bg-gray-600 rounded my-2' type='email' placeholder='Email'></input>
              <input onChange={(e) => setPassword(e.target.value)} className='p-3 bg-gray-600 rounded my-2' type='password' placeholder='Password'></input>
              <button className='bg-purple-800 py-3 my-6 rounded font-bold'>Sign Up</button>
              <p><span className='text-gray-500'>Already have an account?</span> <Link to='/login'>Sign In</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default SignUp