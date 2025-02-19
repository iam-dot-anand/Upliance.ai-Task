import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { SignUp } from "../Login_Signup/SignUp";
import { Login } from "../Login_Signup/Login";
import { useState } from "react";

export default function Navbar({ showLogin }) {
  const [hide, show] = useState(false);
  const [hideSignUp, showSignUp] = useState(false);

  const toggleLogin = () => {
    show(!hide);
    showSignUp(false);
    showLogin(); 
  };

  const toggleSignup = () => {
    show(!hide);
    showSignUp(!hideSignUp);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Upliance.ai
          </Typography>
          <Button color="inherit" onClick={toggleLogin}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <div style={{ position: "fixed", left: "38%", top: "15%", zIndex: "1" }}>
        {hide ? <Login showSignup={toggleSignup} toggleLogin={toggleLogin}/> : null}
        {hideSignUp ? <SignUp showSignup={toggleSignup}/> : null}
      </div>
    </Box>
  );
}
