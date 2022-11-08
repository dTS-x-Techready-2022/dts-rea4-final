import React from 'react'
import SavedShow from '../components/SavedShow'

const Account = () => {
  return (
    <>
      <div className='w-full text-white'>
        <img className='sm:block w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/83b58a62-6624-4188-8119-8bdf395dae3f/ID-en-20221017-popsignuptwoweeks-perspective_alpha_website_small.jpg' />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Favorite</h1>
        </div>
      </div>
      <SavedShow />
    </>
  )
}

export default Account