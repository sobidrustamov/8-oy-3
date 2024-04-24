import ReduxProvider from "@/provider/redux-provider";
import Image from "next/image";
import { TodoList } from "./components/todo-list";

export default function Home() {
  return (
    <ReduxProvider>
      <TodoList />
    </ReduxProvider>
  );
}
