import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Page2 from './Page2';
import Page1 from './Page1';
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Success from "./Success";
import {Dialog, DialogTitle} from "@mui/material";
import instance from "../request";
import { Link } from 'react-router-dom';
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="./">
                AutoJob.com
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const steps = ['Keyword Selection', 'Email'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Page1/>;
        case 1:
            return <Page2/>;
        case 10:
            return <Success/>
        default:
            throw new Error('Unknown step');
    }
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#EC645F",
        },
        secondary: {
            main: "#811923",
        },
    }
});



export default function Page_Submit() {
    const [openDialog1, setOpen] = React.useState(false)
    const [openDialog2, setOpen2] = React.useState(false)

    const handleClose = () => {
        setOpen(false);
        setOpen2(false);
    };

    const [agree, setAgree] = React.useState(false);
    const handleClickAgree = key => {
        setAgree(key.target.checked)
    };
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {

        let form;


        if (activeStep === 2) {
            const notify = ''//document.forms[0].notify.value;
            const data = JSON.stringify({
                ...JSON.parse(sessionStorage.getItem('0')),
                ...JSON.parse(sessionStorage.getItem('1'))

            })
            /*axios.post("/register", data, {
                headers: {"Content-Type": "application/json; charset=UTF-8"}
            })*/
            instance("post", "/register", data);


            setActiveStep(10);
        }

        switch (activeStep) {
            case 0:
                form = {
                    jobname: document.forms[0].jobname.value,
                    worktype: document.forms[0].worktype.value,
                    jobtype: document.forms[0].jobtype.value,
                    directorate: document.forms[0].directorate.value,
                    identification: document.forms[0].identification.value,
                    salarydown: document.forms[0].salarydown.value,
                    salaryup: document.forms[0].salaryup.value,
                    notificationpreference: document.forms[0].notificationpreference.value
                }
                break;
            case 1:
                form = {
                    email: document.forms[0].email.value,
                    username: document.forms[0].username.value,
                    code: document.forms[0].code.value
                }
                break;

        }
        sessionStorage.setItem(activeStep, JSON.stringify(form))

        if (activeStep === 0 && document.forms[0].worktype.value === '' && document.forms[0].jobtype.value === '') {
            setOpen(true);
        } else if (activeStep === 1 && document.forms[0].email.value === '') {
            setOpen2(true);
        } else {
            if (activeStep !== 2) {
                setActiveStep(activeStep + 1);
            }
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Auto Job
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="lg" sx={{mb: 4}}>
                <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
                    <Box
                        component="img"
                        sx={{
                            height: 100,
                            width: "auto",
                        }}
                        src="/logo-color.png"
                    />

                    <Stepper activeStep={activeStep} sx={{pt: 3, pb: 5}}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Click Submit Button To Complete Subscribe
                            </Typography>

                            <Grid item xs={12} sx={{marginTop: "50px"}}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" name="agree" value="yes"/>}
                                    label="Agree on our term of service"
                                    sx={{fontStyle: 'italic', textDecoration: 'underline'}}
                                    required={true}
                                    onChange={handleClickAgree}
                                />
                            </Grid>
                            {agree === true ? <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{mt: 2, ml: 1}}
                            >
                                Submit
                            </Button> : ''
                            }
                            <Grid>
                                <Button onClick={handleBack} sx={{mt: 2, ml: 1}}>
                                    Back
                                </Button>
                            </Grid>
                        </React.Fragment>
                    ) : (

                        <Container maxWidth="sm">
                            {getStepContent(activeStep)}
                            {activeStep <= steps.length ?
                                <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Link to="/">
                                        <Button variant="contained" sx={{ mt: 2, ml: 1 }}>Introduction Page</Button>
                                    </Link>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{mt: 2, ml: 1}}>
                                            Back
                                        </Button>
                                    )}
                                    {/* 添加以下代码来创建跳转到HomePage的按钮 */}
                
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{mt: 2, ml: 1}}
                                    >
                                        Next
                                    </Button>
                                    <Dialog
                                        open={openDialog1}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Please input Work Type and Job Type"}
                                        </DialogTitle>
                                    </Dialog>
                                    <Dialog
                                        open={openDialog2}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            {"Please input an email"}
                                        </DialogTitle>
                                    </Dialog>


                                </Box> : ''
                            }
                        </Container>
                    )}
                </Paper>
                <Copyright/>
            </Container>
        </ThemeProvider>
    );
}
