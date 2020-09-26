import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@material-ui/core";


let PersonalSchema = yup.object().shape({
    firstName: yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    LastName: yup.string().max(15, 'Must be 15 characters or less')
        .required('Required'),
});

const useStyles = makeStyles(theme => ({
    "@global": {
        body: {
            backgroundColor: theme.palette.common.white
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));


interface Props {
    handleNext: () => void
}


const PersonalInfo: React.FC<Props> = ({ handleNext }) => {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Personal Information 
               </Typography>
                <Formik
                    initialValues={{
                        FirstName: "",
                        LastName: "",
                        Address: "",
                        Streat: ""
                    }}
                    validationSchema={PersonalSchema}
                    onSubmit={(values) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            handleNext();
                        }, 400);
                    }}

                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        autoComplete="fname"
                                        name="firstName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        helperText={
                                            errors.FirstName && touched.FirstName
                                                ? errors.FirstName
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField

                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="LastName"
                                        label="Last Name"
                                        name="LastName"
                                        autoComplete="lname"
                                        helperText={
                                            errors.LastName && touched.LastName
                                                ? errors.LastName
                                                : null
                                        }
                                    />
                                </Grid>
                                <Grid xs={12} sm={4}>
                                    <FormControl>
                                        <label style={{ color: 'blue' }}><h3>Gender</h3></label>
                                        <RadioGroup aria-label="gender" name="gender1" onChange={handleChange}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl></Grid>
                                <Grid item xs={12}>
                                    <TextField

                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="Address"
                                        label="Home Address"
                                        name="Address"
                                        autoComplete="Address"
                                        helperText={
                                            errors.Address && touched.Address ? errors.Address : null
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField

                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="Streat"
                                        label="Streat No:"
                                        type="Atreat"
                                        id="Streat"
                                        autoComplete="current-password"
                                        helperText={
                                            errors.Streat && touched.Streat
                                                ? errors.Streat
                                                : null
                                        }
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                style={{ backgroundColor: "gold" }}
                                className={classes.submit}
                            >
                                Proceed
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};
export default PersonalInfo;