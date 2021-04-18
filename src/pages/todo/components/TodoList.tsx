import * as React from "react";
import TodoItem from './TodoItem'
import { useSelector } from "react-redux"; // <-- 追記
import { RootState } from "../../../app/rootReducer" // <-- 追記
import { Todo } from "../../../features/todo/types"; // <-- 追記

// export default function TodoList() {
//   const text: any = ""
export default function TodoList() { // <-- 追記
  const todos: Todo[] = useSelector((state: RootState) => // <-- 追記
    state.todos // <-- 追記
  ); // <-- 追記

  return (
    <ul>
      {/* <TodoItem {...text} /> */}
      {/* --- 追記 ---  */}
      {(todos || []).map(todo => (
        <TodoItem {...todo} />
      ))}
      {/* --- ここまで --- */}
    </ul>
  );
}