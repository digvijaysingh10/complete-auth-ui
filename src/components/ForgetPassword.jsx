import { Box, Grid, Typography} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SubmitButton } from "./common/Button";
import FormImg from "./../assets/FormImg-removebg.png";
import Swal from "sweetalert2";

const initialValues = {
  email: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+@(?!(?:[A-Za-z0-9_]+\.)?([A-Za-z]{1,3})\.)([A-Za-z0-9_]+[-.]?[A-Za-z0-9_]+)+\.([A-Za-z]{2,4})$/,
      "Enter vailid mail."
    )
    .required("Email address is required."),
});

const ForgetPassword = () => {
  const url = "http://localhost:8080";
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
              const res = await fetch(url + "/users/reset", {
                method: "POST",
                body: JSON.stringify(formdata),
                headers: {
                  "Content-Type": "application/json",
                },
              });

              console.log(res.status);
              if (res.status === 201) {
                const userdata = (await res.json()).result;
                //success alert
                Swal.fire("Hurray!", "OTP sent", "success");
                console.log(userdata);
              } else {
                // fail alert
                Swal.fire("Oops...", "Email not registered", "error");
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
                  Forget Password
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
                <SubmitButton
                  disabled={isSubmitting}
                  sx={{ width: "100%", marginTop: "2rem" }}
                >
                  {isSubmitting ? "Sending OTP..." : "Send OTP"}
                </SubmitButton>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgetPassword;
