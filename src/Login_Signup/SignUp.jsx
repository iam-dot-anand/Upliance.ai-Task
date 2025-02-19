import { Box, TextField, Button, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";

export const SignUp = ({showSignup}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="65vh"
      justifyContent="center"
      border="4px solid #ccc"
      borderRadius="8px"
      padding="20px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      width="300px"
      margin="auto"
      sx={{ marginBottom: 4, position: 'relative' }}
    >
      
      
      <form>
        <Typography variant="h5" gutterBottom display={"flex"} justifyContent={"space-between"} >Sign up
        <span
        onClick={() => showSignup()}
        style={{
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        X
      </span>
        </Typography>
        <Box marginBottom={2}>
          <label>Email</label>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="name@gmail.com"
            margin="normal"
            type="email"
            required
          />
        </Box>

        <Box marginBottom={2}>
          <label>Password</label>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="password"
            margin="normal"
            type="password"
            required
          />
        </Box>

        <Button variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          <hr style={{ width: "40%", border: "1px solid #ccc " }} />
          <Box sx={{ color: "#000" }}>or</Box>
          <hr style={{ width: "40%", border: "1px solid #ccc" }} />
        </Box>

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GoogleIcon sx={{ marginRight: 1 }} />
          Sign up with Google
        </Button>
      </form>
    </Box>
  );
};
