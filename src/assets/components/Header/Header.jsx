import React from 'react'

function Header() {
  return (
    <div className='flex items-center gap-10 bg-gray-100'>
        <div>
            <h1 className='text-6xl font-bold'>One Step Closer To Your <span className='text-purple-500'>Dream Job</span></h1>
            <p className='py-10'>asausdhashhsddidggggggggggggggggggggggggggggggggggggggggggggggg</p>
            <button className='text-white font-semibold bg-purple-500 rounded py-2 px-4'> Get Started</button>
        </div>
        <div>
            <img src="photo.png"/>
        </div>
    </div>
  )
}

export default Header;