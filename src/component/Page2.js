import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from "axios";
import Button from "@mui/material/Button";
import instance from "../request";

export default function Page2() {
    const handleVerifyCode = () => {
        let form;

        const data = JSON.stringify({
            email: document.forms[0].email.value
        })

        return instance("post", '/sendVerifyCode', data);
    }
    return (
        <form>
            <Grid container spacing={3} sx={{ height: "300px", marginTop: "0px" }}>
                <Grid item xs={12}>
                    <TextField
                        id="username"
                        name="username"
                        label="Preferred Name"
                        fullWidth
                        variant="standard"
                    />
                </Grid>


                <Grid item xs={12}>
                    <TextField
                        id="email"
                        required
                        name="email"
                        label="EmailAddress@example.com"
                        fullWidth
                        variant="standard"
                        helperText="This will be your unique identifier you our system."
                    />
                </Grid>
                <Grid item xs={12} md={7}>
                    <TextField
                        id="code"
                        required
                        name="code"
                        label="Verify Code"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} md={5}>
                    <Button
                        variant="contained"
                        onClick={handleVerifyCode}
                        sx={{mt: 2, ml: 1}}
                    >
                        Acquire Verify Code
                    </Button>
                </Grid>

            </Grid>

        </form>
    );
}
