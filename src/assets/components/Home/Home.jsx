import React from 'react'
import Header from '../Header/Header';
import JobCategoryList from '../JobCategoryList/JobCategoryList';
import Jobs from '../Jobs/Jobs';

function Home() {
  return (
    <div>
        <Header></Header>
        <JobCategoryList></JobCategoryList>
        <Jobs></Jobs>
    </div>
  )
}

export default Home;