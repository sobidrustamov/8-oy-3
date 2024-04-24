import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/todo-reduser/todoReduser";

interface InputData {
  fName: string;
}

const TodoForm = () => {
  const dispatch = useDispatch();

  const { register, reset, handleSubmit } = useForm<InputData>();
  const submit = (data: InputData) => {
    dispatch(addTodo({ fName: data.fName, id: Date.now() }));
    reset();
  };
  return (
    <div className="w-1/3 m-auto py-8">
      <h1 className="text-3xl font-bold text-center">Create Todo</h1>
      <form onSubmit={handleSubmit(submit)} className="flex gap-3">
        <input
          className="border p-2 rounded-lg w-full"
          type="text"
          placeholder="Name"
          {...register("fName")}
        />
        <button className="bg-blue-500 py2 px-6 rounded-lg text-white">Send</button>
      </form>
    </div>
  );
};

export default TodoForm;
