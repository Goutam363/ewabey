import { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import EwabeyIcon from "../../logos/EwabeyWithout.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DrawerComp from "./Drawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { deleteTokenCookie, setLoginStateCookie } from "../cookieUtils";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Navbar() {
  const { loggedin, setLoggedin, setUsername, setProfile, setTokenContext, setProjectsContext } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const getPathIndex = () => {
    switch (location.pathname) {
      case "/":
        return 0;
      case "/projects":
        return 1;
      case "/build":
        if (loggedin) {
          return 2;
        } else {
          return 1;
        }
      case "/services":
        if (loggedin) {
          return 3;
        } else {
          return 2;
        }
      case "/policies":
        if (loggedin) {
          return 4;
        } else {
          return 3;
        }
      case "/contact-us":
        if (loggedin) {
          return 5;
        } else {
          return 4;
        }
      default:
        return -1; // Default to no tab selected
    }
  };
  const [value, setValue] = useState(getPathIndex());
  useEffect(() => {
    setValue(getPathIndex());
  }, [location.pathname]);

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
    <div>
      <AppBar sx={{ background: "#202731" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img
              src={EwabeyIcon}
              alt="Ewabey Icon"
              style={{ height: "2.8rem", width: "2.8rem", borderRadius: "50%" }}
            />
          </Link>
          {isMatch ? (
            <>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Ewabey
                </Typography>
              </Link>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" component={Link} to="/" />
                {loggedin && (
                  <Tab label="My Projects" component={Link} to="/projects" />
                )}
                <Tab label="Let's build" component={Link} to="/build" />
                <Tab label="Services" component={Link} to="/services" />
                <Tab label="Policies" component={Link} to="/policies" />
                <Tab label="Contact Us" component={Link} to="/contact-us" />
              </Tabs>
              {loggedin ? (
                <Button
                  sx={{ marginLeft: "auto", backgroundColor: "#202731" }}
                  variant="contained"
                  onClick={handleLogout}
                >
                  <AccountCircleIcon sx={{ mr: "2px" }} />
                  Logout
                </Button>
              ) : (
                <Button
                  sx={{ marginLeft: "auto", backgroundColor: "#202731" }}
                  variant="contained"
                  component={Link}
                  to="/login"
                >
                  <AccountCircleIcon sx={{ mr: "2px" }} />
                  Login
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <ToastContainer />
    </div>
  );
}
