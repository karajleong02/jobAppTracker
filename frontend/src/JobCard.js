import React from 'react'
import {Card, CardContent, Typography} from '@mui/material'

class JobCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "JobTitle",
    };
  }
  render() {
    return(
      <Card sx={{maxWidth:'25em'}}>
            <CardContent>
                <Typography variant='h4'>
                    {this.state.title}
                </Typography>
                <Typography variant='subtitle2'>
                    Company Name
                </Typography>
                <Typography variant='body1'>
                    Location
                </Typography>
                <Typography variant='body1'>
                    Date
                </Typography>
          </CardContent>
      </Card>
    )
  }
  
}

export default JobCard