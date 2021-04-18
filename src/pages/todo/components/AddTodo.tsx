import React from "react";
import { useDispatch } from "react-redux"; // <-- 追記
import { addTodo } from "../../../features/todo/todoSlice"; // <-- 追記

export default function AddTodo(): JSX.Element {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch(); // <-- 追記
  function handleChange(e: { target: HTMLInputElement }) {
    setText(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!text.trim()) {
      return;
    }
    dispatch(addTodo(text)); // <-- 追記
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}