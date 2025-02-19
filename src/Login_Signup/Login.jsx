import { Box, TextField, Button, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

export const Login = ({ showSignup, toggleLogin }) => {
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
      sx={{ marginBottom: 4, position:"relative" }}
    >
      <form>
        <Typography
          variant="h5"
          gutterBottom
          display={"flex"}
          justifyContent={"space-between"}
        >
          Log in
          <span
            onClick={() => toggleLogin()}
            style={{
              cursor: "pointer",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            X
          </span>
        </Typography>
        

        <Box marginBottom={2} width="100%">
          <label htmlFor="email">Email</label>
          <TextField
            id="email"
            variant="outlined"
            fullWidth
            placeholder="name@gmail.com"
            margin="normal"
            type="email"
          />
        </Box>

        <Box marginBottom={2} width="100%">
          <label htmlFor="password">Password</label>
          <TextField
            id="password"
            variant="outlined"
            fullWidth
            placeholder="password"
            margin="normal"
            type="password"
          />
        </Box>

        <Button variant="contained" color="primary" fullWidth type="submit">
          Log in
        </Button>

        <Typography
          variant="body2"
          color="primary"
          align="center"
          sx={{ marginTop: 1, cursor: "pointer" }}
          onClick={showSignup}
        >
          Create an account
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: 2 }}
        >
          <hr style={{ width: "40%", border: "1px solid #ccc" }} />
          <Box sx={{ color: "#000", margin: "0 10px" }}>or</Box>
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
          Log in with Google
        </Button>
      </form>
    </Box>
  );
};
