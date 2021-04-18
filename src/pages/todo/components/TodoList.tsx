import * as React from "react";
import TodoItem from './TodoItem'
import { useSelector } from "react-redux";
import { RootState } from "../../../app/rootReducer"
import { Todo } from "../../../features/todo/types";

export default function TodoList() {
  const todos: Todo[] = useSelector((state: RootState) =>
    state.todos
  );

  return (
    <ul>
      {(todos || []).map(todo => (
        <TodoItem {...todo} />
      ))}
    </ul>
  );
}