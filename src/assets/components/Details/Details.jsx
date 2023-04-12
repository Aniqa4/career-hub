import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import './Details.css';

function Details() {
    const parameter= useParams();
    const data=useLoaderData([]);

    const id=parameter.id;

    const jobData=data.find(x=>x.id==id);

    const applyNow=()=>{
        
        const dataString=JSON.stringify(jobData);
        localStorage.setItem('object',dataString)
    }
    
  return (
    <div className=''>
        <h1 className=' font-bold text-3xl text-center py-20 bg-gray-100'>Job Details</h1>
        <div className='details'>
            <div className='details-left'>
                <h1>Job Description :</h1>
                <p>{jobData.jobDescription}</p>
                <h1>Job Responsibility :</h1>
                <p>{jobData.jobResponsibility}</p>
                <h1>Educational Requirements :</h1>
                <p>{jobData.educationalRequirements}</p>
                <h1> Experiences :</h1>
                <p>{jobData.experiences}</p>
            </div>
            <div>
                <div className='style-span bg-purple-100 p-10 rounded-md mb-5'>
                      <h1 className=' text-xl font-bold mb-5'>Job Details </h1>
                      <hr />
                      <p><span> Salary : </span>{jobData.salary} $ (Per year)</p>
                      <p><span>Job Title : </span>{jobData.jobTitle}</p>
                      <h1 className=' text-xl font-bold py-5'>Contact Information</h1>
                      <hr />
                      <p><span>Phone : </span>{jobData.contactInformation.phone}</p>
                      <p><span>Email : </span>{jobData.contactInformation.email}</p>
                      <p><span>Address : </span>{jobData.location}</p>
                </div>
                <div>
                    <p onClick={()=>applyNow()} className='text-white font-semibold bg-purple-500 rounded-md py-4 text-center'> 
                    Apply Now</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details;