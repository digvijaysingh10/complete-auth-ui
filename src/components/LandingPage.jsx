import { useState, useEffect } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import screenImg from "./../assets/screen.png";

const LandingPage = () => {

  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    setAuth(token ? true : false);
  }, []);

  return (
    <>
      <Box
        sx={{
          height: "auto",
          width: "100vw",
          background: "#0f212ebe",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "3rem",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "3rem", md: "7rem" },
              color: "#fff",
            }}
          >
            <span className="aio">All-in-one</span> platfrom for running{" "}
            <span className="bussiness">business</span>
          </Typography>

          {auth ? (
            <></>
          ) : (
            <>
              <Button
                component={Link}
                to="/signup"
                sx={{
                  color: "#fff",
                  height: "2.5rem",
                  width: "8rem",
                  mt: { xs: "1.5rem", sm: "3rem", md: "5rem" },
                  borderRadius: "2rem",
                  border: "none",
                  background: "#E59446",
                }}
              >
                Start Now
              </Button>
            </>
          )}

          <Stack
            sx={{
              background: `url(${screenImg}) center`,
              backgroundSize: "cover",
              marginTop: { xs: "1.5rem", sm: "3rem", md: "5rem" },
              height: { xs: "10rem", sm: "20rem", md: "30rem" },
              width: { xs: "15rem", sm: "27rem", md: "45rem" },
            }}
          ></Stack>
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;
