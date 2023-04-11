import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

function Details() {
    const parameter= useParams();
    const id=parameter.id;
  const data=useLoaderData();
  const jobData=data[id-1];
  return (
    <div>
        <h1 className=' text-3xl font-bold text-center py-20 bg-gray-100'>Job Details</h1>
        <div className='flex'>
            <div>
                <p>Job Description : 
                    <span>
                        {jobData.jobDescription}
                    </span>
                </p>
                <p>
                    Job Responsibility : <span>{jobData.jobResponsibility}</span></p>
                <p>
                    Educational Requirements :
                    <span><br />
                        {jobData.educationalRequirements}
                    </span>
                        </p>
                <p> Experiences : 
                    <span><br />
                        {jobData.experiences}
                        </span>
                        </p>
            </div>
            <div>
                <h1>Job Details</h1>
            </div>
        </div>
    </div>
  )
}

export default Details;