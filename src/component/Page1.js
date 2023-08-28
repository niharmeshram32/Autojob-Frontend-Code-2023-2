import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import instance from "../request";
import {useEffect, useState} from "react";
import Slider from "@mui/material/Slider";

function getDirectorateDict(){
    return instance("get",'/directorateDict').then(res => res.data)
}

function getJobTypeDict(){
    return instance("get", '/jobTypeDict').then(res => res.data)
}

function getWorkTypeDict() {
    return instance("get", '/workTypeDict').then(res=>res.data)
}

function getIdentificationDict() {
    return instance("get", '/identificationDict').then(res => res.data)
}

export default function Page1() {
    const [directorate, setDirectorate] = useState([])
    const [identification, setIdentification] = useState([])
    const [worktype, setWorkType] = useState([])
    const [jobtype, setJobType] = useState([])
    useEffect(()=> {
        getDirectorateDict().then(setDirectorate);
    }, [])
    useEffect(()=> {
        getIdentificationDict().then(setIdentification);
    }, [])
    useEffect(()=> {
        getWorkTypeDict().then(setWorkType);
    }, [])
    useEffect(()=> {
        getJobTypeDict().then(setJobType);
    }, [])

    return (
        <form>
            <Typography variant="h6" gutterBottom>
                Your Job Preferences
            </Typography>
            <br />
            <Grid container spacing={3} sx={{ height: "540px", paddingTop: "10px" }}>
                <Grid item xs={12}>
                    <TextField
                        id="jobname"
                        name="jobname"
                        label="Keyword of Job / Position"
                        fullWidth
                        variant="standard"
                        helperText="This is the job name your prefered"
                    >
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        select
                        id="worktype"
                        label="Work Type"
                        name="worktype"
                        fullWidth
                        variant="standard"
                        helperText=""
                    >
                        {worktype.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.workType}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        select
                        id="jobtype"
                        label="Job Type"
                        name = "jobtype"
                        fullWidth
                        variant="standard"
                        helperText=""
                    >
                        {jobtype.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.jobType}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        select
                        id="directorate"
                        label="Directorate"
                        name="directorate"
                        fullWidth
                        variant="standard"
                        helperText="Category of the employment"
                    >
                        {directorate.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.directorate}
                            </MenuItem>
                        ))}

                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        select
                        id="identification"
                        label="Identification"
                        name = "identification"
                        fullWidth
                        variant="standard"
                        helperText="ACT Identification"
                    >
                        {identification.map((option) => (
                            <MenuItem key={option.id} value={option.id}>
                                {option.identification}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id="salarydown"
                        name = "salarydown"
                        label="$ Salary From"
                        fullWidth
                        variant="standard"
                        helperText="Upper-bound of the salary ($AUD)"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        id="salaryup"
                        label="$ Salary To"
                        name="salaryup"
                        fullWidth
                        variant="standard"
                        helperText="Upper-bound of the salary ($AUD)"
                    />
                </Grid>


                <Grid item xs={12} md={12}>
                    <item>Email Notification Frequency</item>
                </Grid>

                <Grid item xs={12} md={12}>
                    <Slider
                        aria-label="Days"
                        defaultValue={4}
                        getAriaValueText={function (value) {
                            return `${value} Days`;
                        }}
                        valueLabelDisplay="on"
                        name = "notificationpreference"
                        step={1}
                        marks={true}
                        min={1}
                        max={7}
                    />
                    <Typography variant="caption" color="gray">Mail Every n Days</Typography>
                </Grid>



            </Grid>
        </form>
    );
}
