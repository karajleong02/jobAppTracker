import { React } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Button, TextField, InputAdornment, IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import './validation'

import Stack from '@mui/material/Stack';


import { Close } from '@mui/icons-material';


import './form.css';

export default function NewJobForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
    };
    return (
        <div>
            <Link to='/'><IconButton aria-label='close'><Close /></IconButton></Link>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* is validation working?? hard to tell */}
                <Stack spacing={2} sx={{mx:80}} alignItems='center'>
                    <TextField
                        id="outlined-size-small"
                        label="Job Title"
                        variant="outlined"
                        fullWidth = 'true'
                        {...register('jobTitle', { required: 'This is required' })}
                    /> 
                    <TextField
                        id="outlined-size-small"
                        label="Company"
                        variant="outlined"
                        fullWidth = 'true'
                        {...register('company', { required: 'This is required.' })}
                    />
                    <TextField
                        id="outlined-size-small-start-adornment"
                        label="Pay"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        variant="outlined"
                        fullWidth = 'true'
                        {...register('pay')}
                    />
                    <TextField
                        id="outlined-size-small"
                        label="Location"
                        variant="outlined"
                        fullWidth = 'true'
                        {...register('location')}
                    />
                     {/* <DatePicker
                        id="outlined-size-small"
                        label="Date Applied"
                        variant="outlined"
                        fullWidth='true'
                        {...register('dateApplied')}
                    /> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>                       
                        <DesktopDatePicker
                            label="Date Applied"
                        slotProps={{ textField: { fullWidth: true } }}
                            {...register('dateApplied')} />
                    </LocalizationProvider>
                    {/* <Link to='/'> */}
                        <Button variant='contained' type='submit' style={{maxWidth: '10em'}}>Add Job</Button>
                    {/* </Link> */}
                </Stack>       
                
            </form>
            
        </div>
            
    )
    
};
