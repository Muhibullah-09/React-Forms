import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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

const Signup: React.FC<Props> = ({ handleNext }) => {
    const classes = useStyles();

    const initiaValues = {
        cnic: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    const validationSchema = Yup.object({
        cnic: Yup.string().min( 13 , 'Must be 13 Characters').required('Must Required'),
        email: Yup.string().required('Required'),
        password: Yup.string().min(6, 'Too Short').required('Password is required'),
        confirmPassword: Yup.string().required().label('Confirm password').test('passwords-match', 'Password is not same', function(value) {return this.parent.password === value})
    })

    const onSubmit = (values: any) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            handleNext();
        }, 400);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">Sign up</Typography>
                <Formik
                    initialValues={initiaValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="cnic"
                                        name="cnic"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="cnic"
                                        label="CNIC Number"
                                        autoFocus
                                        helperText={errors.cnic && touched.cnic ? errors.cnic : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="username"
                                        label="Username"
                                        name="username"
                                        autoComplete="username"
                                        helperText={errors.userName && touched.userName ? errors.userName : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        helperText={errors.email && touched.email ? errors.email : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText={errors.password && touched.password ? errors.password : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="confirmPassword"
                                        helperText={errors.confirmPassword && touched.confirmPassword ? errors.confirmPassword : null}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth variant="contained"
                                // style={{ backgroundColor: "lightgrey" }}
                                className={classes.submit}
                                >  
                                Next
                            </Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    );
};
export default Signup;