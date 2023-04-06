import { Box, Grid, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "./common/Button";
import FormImg from "./../assets/FormImg-removebg.png";
/* import { useNavigate } from "react-router-dom"; */
/* import styled from "styled-components";
import Swal from "sweetalert2"; */

const initialValues = {
  password: "",
  confirmPassword: "",
};

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/,
      "Password must contain min. 1 numeric, symbol, capital character."
    )
    .required("Password is required."),
  confirmPassword: Yup.string()
    .required("Confirm password is required.")
    .oneOf(
      [Yup.ref("password"), null],
      "Confirm password must match with password"
    ),
});

const ResetPassword = () => {
  /* const url = "http://localhost:8080"; */
  /*  const navigate = useNavigate(); */

  return (
    <Box>
      <Grid
        container
        sx={{
          maxWidth: { xs: "100vw", md: "100vw" },
          height: { xs: "auto", md: "100vh" },
          paddingTop: { xs: "2rem", sm: "2rem" },
          paddingBottom: { xs: "2rem", sm: "2rem" },
          background: "#0f212ebe",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            background: `#0f212e url(${FormImg}) center`,
            height: { xs: "70vh", md: "70vh" },
            maxWidth: { xs: "80vw", md: "70vh" },
            borderRadius: { xs: "1rem 1rem 0 0", md: "1rem 0 0 1rem" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "cover",
          }}
        />

        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          sx={{
            height: { xs: "70vh", md: "70vh" },
            maxWidth: { xs: "80vw", md: "70vh" },
            background: "#fff",
            borderRadius: { xs: "0 0 1rem 1rem", md: "0 1rem 1rem 0" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: { xs: "1rem", md: "2rem" },
            paddingRight: { xs: "2rem", md: "2rem" },
            textAlign: "center",
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            /*  onSubmit={async (formdata, { setSubmitting }) => {
              setSubmitting(false);
              const res = await fetch(url + "/user/add", {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              console.log(res.status);
              if (res.status === 201) {
                //success alert
                Swal.fire("Hurray!", "Signup Successful", "success");
                console.log("signup success");
                navigate("/signin");
              } else {
                // fail alert
                Swal.fire("Oops...", "Signup Unsuccessful", "error");
              }
            }} */
          >
            {({ isSubmitting }) => (
              <Form>
                <Typography
                  variant="h4"
                  component="h1"
                  color="#23235e"
                  gutterBottom
                  sx={{ mb: "2rem" }}
                >
                  Reset Password
                </Typography>
                <div className="form-control" sx={{ mb: "1rem" }}>
                  <label htmlFor="password">
                    New Password<span className="req">*</span>
                  </label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="password-field"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-control" sx={{ mb: "1rem" }}>
                  <label htmlFor="password">
                    Confirm Password<span className="req">*</span>
                  </label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    className="password-field"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="error"
                  />
                </div>

                <SubmitButton
                  disabled={isSubmitting}
                  sx={{ width: "100%", mt: "2rem" }}
                >
                  {isSubmitting ? "Reset..." : "Reset"}
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
