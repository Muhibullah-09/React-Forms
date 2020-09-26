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
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  }));
  interface Props {
    handleNext: () => void
  }
 const Registration:React.FC<Props> = ({ handleNext }) => {
    const classes=useStyles();
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Payment Method
            </Typography>
            <Formik
              initialValues={{
                FirstName: "",
                CardNumber: "",
                valid: "",
                Security: "",
                ZipCode: ""
              }}
              validationSchema={yup.object({
                firstName: yup.string()
                  .max(15, 'Must be 15 characters or less')
                  .required('Required'),
                CardNumber:yup.string().max(16, 'Must be 16 characters or less')
                .required('Required'),
                valid: yup.string()
                .max(6,"Write in 'MM/YY' format")
                .required('Required'),
                security: yup.string().max(3,"Security Code should be 3 digits")
                .required('Required'),
                Zip: yup.string().min(5).max(5,"ZipCode should be 5 digits.")
                .required('Required')
              })}
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
                    <Grid item xs={12} >
                      <TextField
                       
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="firstName"
                        label="Name on Card"
                        autoFocus
                        helperText={
                          errors.FirstName && touched.FirstName
                            ? errors.FirstName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} >
                      <TextField
                       
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="CardNumber"
                        label="Card Number"
                        name="CardNumber"
                        type="Number"
                        autoComplete="lname"
                        helperText={
                          errors.CardNumber && touched.CardNumber
                            ? errors.CardNumber
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        id="valid"
                        label="Valid Till"
                        name="valid"
                        type="Number"
                        placeholder="MM/YY"
                        autoComplete="valid"
                        helperText={
                          errors.valid && touched.valid ? errors.valid : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                       
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        name="security"
                        label="Security Code"
                        id="security"
                        type="Number"
                        autoComplete="curren-Code"
                        helperText={
                          errors.Security && touched.Security
                            ? errors.Security
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        onChange={handleChange}
                        name="Zip"
                        label="Zip/Postal Code"
                        id="Zip"
                        type="Number"
                        autoComplete="curren-Code"
                        helperText={
                          errors.ZipCode && touched.ZipCode
                            ? errors.ZipCode
                            : null
                        }
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{backgroundColor:"gold"}}
                    className={classes.submit}
                    >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      );
    };
    export default Registration;