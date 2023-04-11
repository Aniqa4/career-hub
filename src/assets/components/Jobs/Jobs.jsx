import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Jobs() {
    const [jobs,setJobs]=useState([]);
    useEffect( () =>
    {
        fetch('json/jobs.json')
        .then(res => res.json())
        .then(data => showFew(data))
    },[]);

    const showFew=(x)=>{
        setJobs(x.slice(0,4));
    }
    
    
    const showAll= ()=>
    {
        console.log('clicked');
    }

  return (
    <div>
        <h1 className='pt-20 text-center text-3xl font-bold'>Featured Jobs</h1>
        <p className=' text-center pb-5'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
        <div className='grid grid-cols-2 gap-5'>
            {  
                jobs.map( job => 
                    
                        <div key={job.id} className='border rounded-md p-5'>
                            <img src={job.companyLogo} style={{width:'100px'}} />
                            <h1 className=' font-bold'>
                                {job.jobTitle}
                            </h1>
                            <h1>
                                {job.companyName}
                            </h1>
                            <div className=' flex gap-5 py-2'>
                                <button className='rounded border border-purple-500 p-2 text-purple-500'>
                                    {job.remoteOrOnsite}
                                </button>
                                <button className='rounded border border-purple-500 p-2 text-purple-500'>
                                    {job.fulltimeOrParttime}
                                </button>
                            </div>
                            <div className='flex gap-5'>
                                <p>
                                    {job.location}
                                </p>
                                <p>
                                   Salary : {job.salary}
                                </p>
                            </div>
                            <button className='text-white font-semibold bg-purple-500 rounded py-2 px-4 my-2'>
                                <Link to={`/details/${job.id}`} > View Details</Link></button>
                        </div>
                    )
            }
        </div>
        <div className=' text-center p-5'>
           <button onClick={() => showAll()} className='text-white font-semibold bg-purple-500 rounded py-2 px-4 my-2'>See All Jobs</button>
        </div>
    </div>
  )
}

export default Jobs;