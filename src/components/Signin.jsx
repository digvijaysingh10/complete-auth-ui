import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "./common/Button";
import FormImg from "./../assets/FormImg-removebg.png";
import styled from "styled-components";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const BottomLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.5rem;
  @media (max-width: 480px) {
    font-size: 10px;
    text-align: left;
  }
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
    .email()
    .matches(
      /^([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+@(?!(?:[A-Za-z0-9_]+\.)?([A-Za-z]{1,3})\.)([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+\.([A-Za-z]{2,4})$/,
      "Enter vailid mail."
    )
    .required("Email address is required."),
  password: Yup.string()
    .min(8)
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*\W).{8,}$/,
      "Password must contain min. 1 numeric, symbol, capital character."
    )
    .required("Password is required."),
});

const Signin = () => {
  const url = "http://localhost:8080";
  const navigate = useNavigate();
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
            onSubmit={async (formdata, { setSubmitting }) => {
              setSubmitting(false);
              const res = await fetch(url + "/users/signin", {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              if (res.status === 200) {
                const token = res.headers.get("auth-token");
                localStorage.setItem("auth-token", token);
                navigate("/"); 
              } else {
                const errorMessage = await res.text();
                Swal.fire("Oops!", errorMessage, "error");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <Typography
                  variant="h4"
                  component="h1"
                  color="#23235e"
                  gutterBottom
                  sx={{
                    marginBottom: "1rem",
                  }}
                >
                  Sign In
                </Typography>
                <div className="form-control" sx={{ mb: "1rem" }}>
                  <label htmlFor="email">
                    Email address<span className="req">*</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="email-field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="form-control" sx={{ mb: "1rem" }}>
                  <label htmlFor="password">
                    Password<span className="req">*</span>
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

                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  sx={{ width: "100%", marginTop: "2rem" }}
                >
                  {isSubmitting ? "Signing in..." : "Sign in"}
                </SubmitButton>
              </Form>
            )}
          </Formik>
          <BottomLinks sx={{ maxWidth: { xs: "80vw", md: "70vh" } }}>
            <Button
              sx={{
                color: "#8d8d8da4",
                textTransform: "none",
              }}
              component={Link}
              to="/forget"
            >
              Forget password?
            </Button>
            <LinkGroup>
              <Button
                sx={{
                  color: "#8d8d8da4",
                  textTransform: "none",
                }}
                component={Link}
                to="/reset"
              >
                Reset password?
              </Button>
            </LinkGroup>
          </BottomLinks>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signin;
