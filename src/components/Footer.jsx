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
          height: { xs: "auto", md: "30vh" },
          padding: "2rem",
          color: "#fff",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Grid container spacing={1}>
          <Grid item sm={12} md={3}>
            <Logo />
            <Box sx={{ color: "#fff", mt: 2 }}>
              <InstagramIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <FacebookIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <TwitterIcon sx={{ fontSize: "2rem", mr: 1 }} />
              <LinkedInIcon sx={{ fontSize: "2rem" }} />
            </Box>
          </Grid>
          <Grid item sm={12} md={3}>
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
            <ul>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>About</li>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>
                News & Blog
              </li>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>
                Press about us
              </li>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>
                Our partners
              </li>
            </ul>
          </Grid>
          <Grid item sm={12} md={3}>
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
            <ul>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>Support</li>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>FAQ</li>
              <li
                style={{ fontSize: "1rem", fontWeight: "500" }}
              >
                Supported Exchange
              </li>
            </ul>
          </Grid>
          <Grid item sm={12} md={3}>
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
            <ul>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>
                Exchange Widget
              </li>
              <li style={{ fontSize: "1rem", fontWeight: "500" }}>
                Payment Button
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
