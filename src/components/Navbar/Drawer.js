import { useState, useContext } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { AuthContext } from "../AuthProvider";
import { deleteTokenCookie, setLoginStateCookie } from "../cookieUtils";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircleRounded } from "@mui/icons-material";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    loggedin,
    setLoggedin,
    setUsername,
    setProfile,
    setTokenContext,
    setProjectsContext,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    setLoginStateCookie(false); // Set login state cookie to false
    await setLoggedin(false); // Set loggedin context state to false
    await setUsername(""); // Reset username in context
    await setTokenContext("");
    await setProjectsContext([]);
    await setProfile(null); // Reset profile in context
    deleteTokenCookie();
    toast.success("Logged Out Successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      onClose: () => {
        navigate("/");
      },
    });
  };

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItemButton
            key="home"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#202731" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/"
          >
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          {loggedin && (
            <ListItemButton
              key="projects"
              component={NavLink}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#202731" : "inherit",
                  color: isActive ? "white" : "inherit",
                };
              }}
              to="/projects"
            >
              <ListItemText>My Projects</ListItemText>
            </ListItemButton>
          )}
          <ListItemButton
            key="build"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#202731" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/build"
          >
            <ListItemText>Let's build</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="services"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#202731" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/services"
          >
            <ListItemText>Services</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="policies"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#202731" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/policies"
          >
            <ListItemText>Policies</ListItemText>
          </ListItemButton>
          <ListItemButton
            key="contactUs"
            component={NavLink}
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#202731" : "inherit",
                color: isActive ? "white" : "inherit",
              };
            }}
            to="/contact-us"
          >
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          {loggedin ? (
            <ListItemButton key="logout" onClick={handleLogout}>
              <AccountCircleRounded />
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          ) : (
            <ListItemButton
              key="login"
              component={NavLink}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#202731" : "inherit",
                  color: isActive ? "white" : "inherit",
                };
              }}
              to="/login"
            >
              <AccountCircleRounded />
              <ListItemText>Login</ListItemText>
            </ListItemButton>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "#f0f0f0", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="#f0f0f0" />
      </IconButton>
      <ToastContainer />
    </>
  );
};

export default DrawerComp;
