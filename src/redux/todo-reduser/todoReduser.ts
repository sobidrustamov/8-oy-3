import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  todos: [];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ newTodo: string }>) => {
      return { ...state, todos: [...state.todos, action.payload.newTodo] };
    },
  },
});
console.log(initialState);

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
