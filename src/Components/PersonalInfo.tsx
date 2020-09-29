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
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));


interface Props {
    handleNext: () => void
}


const PersonalInfo: React.FC<Props> = ({ handleNext }) => {
    const classes = useStyles();

    const initialValues = {
        firstName: "",
        lastName: "",
        fatherName: "",
        dateOfBirth: "",
        phoneNumber: "",
        address: "",
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        fatherName: Yup.string().required('Required'),
        dateOfBirth: Yup.date().required('Required').nullable(),
        phoneNumber: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(11, 'eg: 01233456789').required('Required'),
        address: Yup.string().required('Required')

    });

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
                <Typography component="h1" variant="h5">
                    Personal Information
               </Typography>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ errors, handleChange, touched }) => (
                        <Form className={classes.form}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="firstName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        helperText={errors.firstName && touched.firstName ? errors.firstName : null}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        name="lastName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="lastName"
                                        label="Last Name"
                                        autoFocus
                                        helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="fatherName"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="fatherName"
                                        label="Father Name"
                                        autoFocus
                                        helperText={errors.fatherName && touched.fatherName ? errors.fatherName : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <form className={classes.container} noValidate>
                                        <TextField
                                            id="date"
                                            label="Date of Birth"
                                            type="date"
                                            defaultValue="2020-07-28"
                                            className={classes.textField}
                                            InputLabelProps={{ shrink: true, }}
                                        />
                                    </form>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="phoneNumber"
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="phoneNumber"
                                        label="Phone Number"
                                        autoFocus
                                        helperText={errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : null}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        fullWidth
                                        onChange={handleChange}
                                        id="Address"
                                        label="Home Address"
                                        name="Address"
                                        autoComplete="Address"
                                        helperText={errors.address && touched.address ? errors.address : null}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="outlined"
                                color="secondary"
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
export default PersonalInfo;