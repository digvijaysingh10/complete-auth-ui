import { Box, Grid, Typography, Link } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "./common/Button";
import FormImg from "./../assets/FormImg.png";
import TextError from "./common/TextError";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";

const useStyles = () => ({
  signInForm: {
    height: "100vh",
    width: "100%",
    maxWidth: "100vw",
    background: "#0f212ebe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      height: "auto",
    },
  },
  formBody: {
    height: "100vh",
    width: "100%",
    maxWidth: "60vw",
    background: "#0f212ebe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 600px)": {
      height: "auto",
    },
  },
  formImgContainer: {
    background: `url(${FormImg}) center`,
    height: "60vh",
    width: "100%",
    borderRadius: "2rem 0 0 2rem",
    "@media (max-width: 600px)": {
      height: "40vh",
      borderRadius: "2rem 2rem 0 0",
    },
  },
  mainForm: {
    height: "60vh",
    background: "#fff",
    borderRadius: "0 2rem 2rem 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    textAlign: "center",
    "@media (max-width: 600px)": {
      height: "auto",
      borderRadius: "2rem 2rem 0 0",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
});

const BottomLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const Signin = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const onSubmit = (values, { setSubmitting }) => {
    // make an API call to login the user
    setSubmitting(false);
  };

  return (
    <>
      <Box className={classes.signInForm}>
        <Grid container style={classes.formBody}>
          <Grid item xs={12} md={6} style={classes.formImgContainer} />
          <Grid item xs={12} md={6} style={classes.mainForm}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, errors, touched }) => (
                <Form>
                  <Typography
                    variant="h4"
                    component="h1"
                    color="#23235e"
                    gutterBottom
                  >
                    Sign In
                  </Typography>
                  <div className="form-control">
                    <label htmlFor="email">
                      Email address<span className="req">*</span>
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      className={
                        errors.email && touched.email ? "fieldError" : null
                      }
                    />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className="form-control">
                    <label htmlFor="password">
                      Password<span className="req">*</span>
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className={
                        errors.password && touched.password
                          ? "fieldError"
                          : null
                      }
                    />
                    <ErrorMessage name="password" component={TextError} />
                  </div>
                  <SubmitButton disabled={isSubmitting} type="submit">
                    Sign In
                  </SubmitButton>
                  <BottomLinks>
                    <LinkGroup>
                      <Link href="#" underline="none" p={1} color="#8d8d8da4">
                        Forgot Password?
                      </Link>
                    </LinkGroup>
                    <LinkGroup>
                      <Link href="#" underline="none" p={1} color="#8d8d8da4">
                        Contact Us
                      </Link>
                      <Link href="#" underline="none" p={1} color="#8d8d8da4">
                        Terms
                      </Link>
                      <Link href="#" underline="none" p={1} color="#8d8d8da4">
                        Policy
                      </Link>
                    </LinkGroup>
                  </BottomLinks>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Signin;
