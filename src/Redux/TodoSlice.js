import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({ text: action.payload, completed: false });
    },
    remove: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    toggleCompleted: (state, action) => {
      state.todos[action.payload].completed = !state.todos[action.payload].completed;
    },
  },
});

export const { add, remove, toggleCompleted } = todoSlice.actions;
export default todoSlice.reducer;
