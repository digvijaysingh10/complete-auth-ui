import { Box, Typography, Button, Stack } from "@mui/material";

const LandingPage = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          background: "#0f212ebe",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexWrap:'wrap',
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "3rem",
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "700", fontSize:{xs: "3rem", md: "7rem"}, color: "#fff" }}>
            <span className="aio">All-in-one</span> platfrom for running{" "}
            <span className="bussiness">business</span>
          </Typography>
          <Button
            sx={{
              color: "#fff",
              height: "2.5rem",
              width: "8rem",
              mt: "5rem",
              borderRadius: "2rem",
              border: "none",
              background: "#E59446",
            }}
          >
            Start Now
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default LandingPage;
