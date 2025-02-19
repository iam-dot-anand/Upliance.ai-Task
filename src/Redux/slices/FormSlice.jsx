import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  forms: [],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addForm: (state, action) => {
      const newForm = { ...action.payload, id: uuidv4() };
      state.forms.push(newForm);
    }
  }
});

export const { addForm } = formSlice.actions;
export default formSlice.reducer;
