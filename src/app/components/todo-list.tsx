"use client";
import React from "react";
import {  useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import TodoForm from "@/components/form";

export const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todos);


  return (
    <div>
      <TodoForm />
      <div>
        {todos?.map((item, i) => (
          <h2 key={i}>{item.fName}</h2>
        ))}
      </div>
    </div>
  );
};
