import { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Task } from "./Task.js";

export function TodoWrapper() {
  // const local_storage_key = "todos-list";
  const [todos, setTodos] = useState([]);

  const handleStatus = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { name: todo, id: new Date().getTime(), completed: false },
    ]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="TodoWrapper">
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return (
          <Task
            todo={todo}
            index={index}
            handleStatus={handleStatus}
            removeTodo={removeTodo}
          />
        );
      })}
    </div>
  );
}
