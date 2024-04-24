import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface todo {
  fName: string;
  id: number;
}
interface TodoState {
  todos: todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todo>) => {
      return { ...state, todos: [...state.todos, action.payload] };
    },
  },
});
console.log(initialState);

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
