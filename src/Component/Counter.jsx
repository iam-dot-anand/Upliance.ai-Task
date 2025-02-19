import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const calculateBackgroundColor = (count) => {
    const maxCount = 100;
    if (count >= 0) {
      const progress = Math.min(count / maxCount, 1);
      const red = Math.min(100, progress * 100);
      const green = Math.min(100, (1 - progress) * 100);
      return `rgb(${red}, ${green}, 100)`;
    } else {
      const progress = Math.min(count / maxCount, 1);
      const red = Math.min(200, progress * 500);
      const green = Math.min(500, (1 - progress) * 100);

      return `rgb(${red}, ${green}, 200)`;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: calculateBackgroundColor(count),
        transition: "background-color 0.3s ease-in-out",
        padding: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 600 }}>
        Counter: {count}
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontSize: "12px",
            borderRadius: 2,
          }}
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontSize: "12px",
            borderRadius: 2,
          }}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          variant="contained"
          color="error"
          sx={{
            paddingX: 2,
            paddingY: 1,
            fontSize: "12px",
            borderRadius: 2,
          }}
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
