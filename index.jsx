/* Add JavaScript code here! */
console.log("Hello World! You did! Welcome to Snowpack :D");
5;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([
    { done: true, text: "Hey", id: 1 },
    { done: false, text: "There", id: 2 },
    { done: false, text: "Dima", id: 3 },
  ]);
  const [id, setId] = useState(4);

  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        done: id === todo.id ? !todo.done : todo.done,
      }))
    );
  };

  const updateTodo = (id, e) => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        text: id === todo.id ? e.target.value : todo.text,
      }))
    );
  };

  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateNewTodo = (e) => {
    setNewTodo(e.target.value);
  };
  const onAdd = () => {
    setTodos([
      ...todos,
      {
        text: newTodo,
        done: false,
        id,
      },
    ]);
    setId(id + 1);
    setNewTodo("");
  };

  let filteredComplited = todos.filter(function (e) {
    return e.done === true;
  });
  console.log("filteredComplited", filteredComplited);

  let filteredActive = todos.filter(function (e) {
    return e.done === false;
  });

  console.log("filteredActive", filteredActive);

  let filteredAll = todos;

  console.log("filteredAll", filteredAll);

  return (
    <div className="todos">
      Todo List
      {todos.map((todo) => (
        <div key={todo.id} className="todo">
          <input
            type="checkbox"
            value={todo.done}
            onChange={() => toggleDone(todo.id)}
          />
          <input
            type="text"
            value={todo.text}
            onChange={(evt) => updateTodo(todo.id, evt)}
          />
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      ))}
      <div className="todo">
        <input type="text" value={newTodo} onChange={updateNewTodo} />
        <button onClick={() => onAdd()}>Add</button>
      </div>
      <button
        on
        click={() =>
          todos.map((t) => `${t.done ? "x" : ""} ${t.text}`).join("\n")
        }
      >
        Save
      </button>
      <button onClick={() => filteredComplited}>Complited</button>
      <button onClick={() => filteredActive}>Active</button>
      <button onClick={() => filteredAll}>All</button>
    </div>
  );
};

ReactDOM.render(<TodoList />, document.getElementById("todos"));
