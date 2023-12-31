import React from 'react'

function Header() {
  return (
    <div className='md:flex items-center gap-10 bg-gray-100'>
        <div>
            <h1 className='md:text-6xl sm:text-xl font-bold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
            <p className='md:py-10 sm:py-5'>Explore thousand of jobs.</p>
            <button className='text-white font-semibold bg-purple-500 rounded py-2 px-4'> Get Started</button>
        </div>
        <div>
            <img src="photo.png" style={{width:"100%"}}/>
        </div>
    </div>
  )
}

export default Header;