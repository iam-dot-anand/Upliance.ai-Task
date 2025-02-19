import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import { Box, Paper } from "@mui/material";
import { useSelector } from "react-redux";

const TextEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const allFormData = useSelector((state) => state.form.forms);

  const lastData = allFormData[allFormData.length - 1];

  const formDataContent = lastData
    ? `Name: ${lastData.name}  Email: ${lastData.email}  Phone: ${lastData.phoneNo}  Address: ${lastData.address}`
    : "";

  return (
    <Box>
      <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
        <JoditEditor
          ref={editor}
          value={formDataContent ? formDataContent : content}  
          onChange={(newContent) => setContent(newContent)}
        />
      </Paper>
    </Box>
  );
};

export default TextEditor;
