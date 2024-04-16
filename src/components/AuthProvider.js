import { createContext, useState, useEffect } from "react";
import { getLoginStateCookie, getTokenFromCookie, getUsernameByToken } from "./cookieUtils";

// Create a new context
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [loggedin, setLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [tokenContext, setTokenContext] = useState("");
  const [projectsContext, setProjectsContext] = useState([]);

  useEffect(() => {
    // Check login state cookie on page load
    const loginState = getLoginStateCookie();
    setLoggedin(loginState === "true");
    if(loginState && tokenContext === "") {
      setTokenContext(getTokenFromCookie());
    }
    if(loginState && username === "") {
      if(tokenContext === "") {
        const token = getTokenFromCookie();
        setTokenContext(token);
        setUsername(getUsernameByToken(token));
      } else {
        setUsername(getUsernameByToken(tokenContext));
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedin,
        setLoggedin,
        username,
        setUsername,
        profile,
        setProfile,
        tokenContext,
        setTokenContext,
        projectsContext,
        setProjectsContext,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
