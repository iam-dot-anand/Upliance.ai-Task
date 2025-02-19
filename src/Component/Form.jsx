import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addForm } from "../Redux/slices/FormSlice";  
import { TextField, Button, Box, Typography, Container, Paper } from "@mui/material";

const Form = () => {
  const dispatch = useDispatch();
  const allFormData = useSelector((state) => state.form.forms);

  useEffect(()=>{
    if(allFormData.length > 0){
      localStorage.setItem("formData",JSON.stringify(allFormData));
    }
  },[allFormData])

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phoneNo, address } = formData;

    if (!name || !email || !phoneNo || !address) {
      alert("All fields are required!");
      return;
    }

    dispatch(addForm(formData)); 

    setFormData({
      name: "",
      address: "",
      email: "",
      phoneNo: "",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h5" sx={{ marginBottom: 3, fontWeight: 600 }}>
          Form Submission
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              name="name"
              value={formData.name}
              onChange={handleInput}
              label="Full Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="email"
              value={formData.email}
              onChange={handleInput}
              label="Email"
              variant="outlined"
              fullWidth
            />
            <TextField
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleInput}
              label="Phone Number"
              variant="outlined"
              fullWidth
              type="tel"
            />
            <TextField
              name="address"
              value={formData.address}
              onChange={handleInput}
              label="Full Address"
              variant="outlined"
              fullWidth
            />
            <Button
              sx={{ marginTop: 2 }}
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>

      {/* <Box sx={{ marginTop: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Submitted Data:
        </Typography>
        <div>
          {allFormData.map((data) => (
            <Typography key={data.id} sx={{ marginBottom: 1 }}>
              {data.name}
            </Typography>
          ))}
        </div>
      </Box> */}
    </Container>
  );
};

export default Form;
