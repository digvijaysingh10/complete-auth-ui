import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "./common/Logo";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", bgcolor: "#0f212e" }}
    >
      <Logo />
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button sx={{ color: "#fff" }} component={Link} to="/">
          Home
        </Button>
        <Button sx={{ color: "#fff" }} component={Link} to="/about">
          About
        </Button>
        <Button sx={{ color: "#fff" }} component={Link} to="/pricing">
          Pricing
        </Button>
        <Button sx={{ color: "#fff" }} component={Link} to="/signin">
          Sign In
        </Button>
        <Button
          sx={{
            color: "#fff",
            height: "2.5rem",
            width: "8rem",
            borderRadius: "2rem",
            border: "none",
            background: "#E59446",
          }}
          component={Link}
          to="/signup"
        >
          Sign Up
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "#0f212e" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#0f212e" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Logo />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} component={Link} to="/">
              Home
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/about">
              About
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/pricing">
              Pricing
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/signin">
              Sign In
            </Button>
            <Button
              sx={{
                color: "#fff",
                height: "2.5rem",
                width: "8rem",
                borderRadius: "2rem",
                border: "none",
                background: "#E59446",
              }}
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#0f212e",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
