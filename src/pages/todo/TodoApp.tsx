import React from 'react';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

function TodoApp() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <p>
        Edit <code>src/pages/todo/TodoApp.tsx</code> and save to reload.
      </p>
    </div>
  );
};

export default TodoApp;