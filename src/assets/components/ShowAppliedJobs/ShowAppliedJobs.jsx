import React, { useEffect, useState } from 'react'

function ShowAppliedJobs(props) {
    const{companyName}=props.data;
  return (
    <div>{companyName}</div>
  )
}

export default ShowAppliedJobs;