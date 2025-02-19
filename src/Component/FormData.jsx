import React, { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const FormData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdata = localStorage.getItem("formData");
    if (getdata) {
      setData(JSON.parse(getdata)); 
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px", 
        borderRadius: "8px", 
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
      }}
    >
      <TableContainer component={Paper} sx={{ maxWidth: "100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Full Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length > 0 ? (
              data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phoneNo}</TableCell>
                  <TableCell>{item.address}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} align="center">
                  <Typography>No data available</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FormData;
