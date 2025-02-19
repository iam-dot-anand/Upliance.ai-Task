import React, { useState } from "react";
import { Container, Grid, Box } from "@mui/material";
import TextEditor from "./Component/TextEditor";
import Counter from "./Component/Counter";
import Form from "./Component/Form";
import FormData from "./Component/FormData";
import Navbar from "./Navbar/navbar";

function App() {
  const [bg, setbg] = useState(false);  

  const showLogin = () => {
    setbg(!bg);  
  };

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Navbar showLogin={showLogin} />
      <Container sx={{ opacity: bg ? "0.1" : "1", transition: "opacity 0.5s ease" }}>
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} sm={4}>
            <Counter />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextEditor />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} sm={6}>
            <FormData />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
