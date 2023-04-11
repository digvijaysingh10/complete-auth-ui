import { Box, Grid, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "./common/Logo";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: "#0f212e",
          bottom: "0",
          height: { xs: "auto", md: "28vh" },
          padding: "2rem",
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Logo />
            <Box sx={{ color: "#fff", mt: 2 }}>
              <InstagramIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <FacebookIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <TwitterIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontSize: { xs: "1rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              Company & Team
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              About
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              News & Blog
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Press about us
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Our partners
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontSize: { xs: "1rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              Help & Support
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Support
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              FAQ
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Supported Exchange
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Typography
              variant="h5"
              component="h1"
              sx={{
                fontSize: { xs: "1rem", md: "2rem" },
                fontWeight: "bold",
              }}
            >
              Tool
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Exchange Widget
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1rem", fontWeight: "500" }}>
              Payment Button
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
