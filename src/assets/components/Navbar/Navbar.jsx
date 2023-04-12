import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container mx-auto'>
        <div className='container mx-auto flex justify-between items-center py-5'>
            <div className=' font-bold text-2xl'>InsufficientJobs</div>
            <div>
                <ul className='flex gap-5'>
                    <li><Link to="/">Home</Link></li>
                    <li>Statistics</li>
                    <li><Link to="/appliedjobs">Applied Jobs</Link></li>
                    <li>Blog</li>
                </ul>
            </div>
            <div>
                <button className='text-white font-semibold bg-purple-500 rounded py-2 px-4'>Start Applying</button>
            </div>
        </div>
        <Outlet></Outlet>
    </div>
  )
}

export default Navbar;