import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Wake Up", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let markAllDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };
  let markAsDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <hr />
      <h4>Todo tasks to be..</h4>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ol>
      <hr />
      <button onClick={markAllDone}>Mark All as Done</button>
    </div>
  );
}
