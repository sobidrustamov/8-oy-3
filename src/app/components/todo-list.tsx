"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "@/redux/todo-reduser/todoReduser";
import { RootState } from "@/redux/store";

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const [add, setAdd] = React.useState("");
  // useEffect(() => {}, [add]);

  const dispatch = useDispatch();
  console.log(todos);

  return (
    <div>
      <input
        defaultValue={add}
        onChange={(e) => setAdd(e.target.value)}
        type="text"
        placeholder="..."
      />
      <button
        onClick={() =>dispatch(addTodo({ newTodo: add }))}
      >
        Add
      </button>
      <div>
        {todos?.map((item, i) => (
          <h2 key={i}>{item}</h2>
        ))}
      </div>
    </div>
  );
};
