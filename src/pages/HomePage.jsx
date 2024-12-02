import React from 'react'
import Hero from '../components/hero';
import HomeCards from '../components/homeCards';
import JobListings from '../components/jobListings';
import ViewAllJobs from '../components/viewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={ true } />
      <ViewAllJobs />
   </>
  )
}

export default HomePage