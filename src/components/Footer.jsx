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
          height: { xs: "auto", md: "40vh" },
          padding: "2rem" /* 
          display:'flex', */,
        }}
      >
        <Grid container>
          <Grid item sm={12} md={3}>
            <Logo />
            <Box>
              <InstagramIcon color="#fff" />
              <FacebookIcon color="#fff" />
              <TwitterIcon color="#fff" />
              <LinkedInIcon color="#fff" />
            </Box>
          </Grid>
          <Grid item sm={12} md={3}>
            <Typography variant="h5" component="h1">
              Company & Team
            </Typography>
            <ul>
              <li>About</li>
              <li>News & Blog</li>
              <li>Press about us</li>
              <li>Our partners</li>
            </ul>
          </Grid>
          <Grid item sm={12} md={3}>
            <Typography variant="h5" component="h1">
              Help & Support
            </Typography>
            <ul>
              <li>Support</li>
              <li>FAQ</li>
              <li>Supported Exchange</li>
            </ul>
          </Grid>
          <Grid item sm={12} md={3}>
            <Typography variant="h5" component="h1">
              Tool
            </Typography>
            <ul>
              <li>Exchange Widgit</li>
              <li>Paymet Button</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
