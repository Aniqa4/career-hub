import React from 'react'
import ShowAppliedJobs from '../ShowAppliedJobs/ShowAppliedJobs';

function AppliedJobs() {
    const jsonData=localStorage.getItem('object');
    const data=JSON.parse(jsonData)
    console.log(data);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center py-20 bg-gray-100 mb-20'>Applied Jobs</h1>
      <button className='font-semibold bg-gray-100 rounded-md p-3 text-center mb-5'>Filter By</button>
      <ShowAppliedJobs data={data}></ShowAppliedJobs>
    </div>
  )
}

export default AppliedJobs;