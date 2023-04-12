import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function AppliedJobs() {
  const [filteredData, setFilteredData] = useState(null);
  let data;
    const jsonData=localStorage.getItem('object')
    data=JSON.parse(jsonData);

    const handleFilter = (location) => {
      const filteredJobs = data.filter(job => job.remoteOrOnsite === location);
      setFilteredData(filteredJobs);
    }

  return (
    <div>
      <h1 className='text-3xl font-bold text-center py-20 bg-gray-100 mb-20'>{data?'Applied Jobs':'You did not apply yet'}</h1>
      <button onClick={()=>handleFilter('Onsite')} className='font-semibold bg-gray-100 rounded-md p-3 text-center mb-5 me-5 border'>On-site</button>
      <button onClick={()=>handleFilter('Remote')} className='font-semibold bg-gray-100 rounded-md p-3 text-center mb-5 border'>Remote</button>
      {
         (filteredData || data) && (filteredData || data).map(x=>
          <div>
           <div key={x.id} className='bg-gray-100 my-5 p-5 flex justify-between rounded-md'>
            <div className='flex'>
              <div className=' self-center pe-5'><img src={x.companyLogo} style={{width:"100px"}} /></div>
              <div>
                <h1 className=' font-bold'>{x.jobTitle}</h1>
                <h1>{x.companyName}</h1>
                <div className='flex gap-2 py-2'>
                  <button className='rounded border border-purple-500 p-2 text-purple-500'>{x.remoteOrOnsite}</button>
                  <button className='rounded border border-purple-500 p-2 text-purple-500'>{x.fulltimeOrParttime}</button>
                </div>
                <div>
                  <p>Location : {x.location}</p>
                  <p>Salary : {x.salary}</p>
                </div>
              </div>
            </div>
            <div className='self-center'>
              <button className='text-white font-semibold bg-purple-500 rounded-md p-2 text-center'><Link to={`/details/${x.id}`}>View Details</Link></button>
            </div>
          </div>           
          </div>

        )
      }
    </div>
  )
}

export default AppliedJobs;