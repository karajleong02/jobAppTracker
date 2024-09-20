import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import JobCard from './JobCard';

function Home() {
  return (
      <div>
          <JobCard/>
          <Link to='/newjobform'><Button>Add New Job</Button></Link>
          
    </div>
  )
}

export default Home