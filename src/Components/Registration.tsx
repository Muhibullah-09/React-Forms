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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
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
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));


interface Props {
  handleNext: () => void
};



const Registration: React.FC<Props> = ({ handleNext }) => {

  const classes = useStyles();
  const initialValues = {
    fullName: "",
    rollNumber: "",
    department: "",
    year: "",
    semester: "",
    examination: ""
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Required'),
    rollNumber: Yup.string().required('Required'),
    department: Yup.string().required('Required'),
    year: Yup.string().required('Required'),
    semester: Yup.string().required('Required'),
    examination: Yup.string().required('Required')
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
          Exam Registration
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="fname"
                    name="fullName"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="firstName"
                    label="Full Name"
                    autoFocus
                    helperText={errors.fullName && touched.fullName ? errors.fullName : null}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="department"
                    label="Department"
                    name="department"
                    helperText={errors.department && touched.department ? errors.department : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    id="rollNumber"
                    label="Roll Number"
                    name="rollNumber"
                    placeholder='D-19-CSE-27'
                    helperText={errors.rollNumber && touched.rollNumber ? errors.rollNumber : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="year"
                    label="Year"
                    id="year"
                    helperText={errors.year && touched.year ? errors.year : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="semester"
                    label="Semester"
                    id="semester"
                    placeholder='First/Second'
                    helperText={errors.semester && touched.semester ? errors.semester : null}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <form className={classes.container} noValidate>
                    <TextField
                      id="date"
                      label="Date"
                      type="date"
                      defaultValue="2020-07-28"
                      className={classes.textField}
                      InputLabelProps={{ shrink: true, }}
                    />
                  </form>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    name="examination"
                    label="Examination"
                    id="examination"
                    placeholder='Midterm/Final/Repeat'
                    helperText={errors.semester && touched.semester ? errors.semester : null}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{ backgroundColor: "lightblue" }}
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