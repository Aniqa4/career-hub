import React, { useEffect, useState } from 'react'

function JobCategoryList() {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
    fetch('json/JobCategory.json')
    .then(res => res.json())
    .then(data => setCategory(data))
    },[]);


  return (
    <div className='text-center'>
        <h1 className=' text-2xl font-bold mb-5 mt-20'>Job Category List</h1>
        <p>dsfaiuuuuuuuuuuuuhiuaussjjjjjjjjjjjjjj</p>
        <div className='flex justify-between mt-10'>
            {
                category.map((item,index) => 
                <div key={index} className='bg-gray-100 p-10'>
                    <img src={item.category_logo} style={{width:'200px'}} className='rounded-md'/>
                    <h1>
                        {item.category_name}
                    </h1>
                    <p>
                        {item.jobs_available}
                        + jobs available
                     </p>
                </div>
            )
            }
        </div>
    </div>
  )
}

export default JobCategoryList;