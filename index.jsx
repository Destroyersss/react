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
  const FilterApp = () => {
    let filterMap = {
      all: "Все",
      active: "Активные",
      completed: "Завершенные",
    };

  let [filterState, setFilterSTate] = useState("all");

  let filteredUser = todos.filter((е) => {
    if (filterState === "active") {
      return !е.done;
    }
    if (filterState === "completed") {
      return е.done;
    }
    return true;
  });

  // let filteredComplited = todos.filter(function (e) {
  //   return e.done === true;
  // });
  // console.log("filteredComplited", filteredComplited);

  // let filteredActive = todos.filter(function (e) {
  //   return e.done === false;
  // });

  // console.log("filteredActive", filteredActive);

  // let filteredAll = todos;

  // console.log("filteredAll", filteredAll);

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
      <button onClick={() => setFilterSTate("Выполненые")}>Complited</button>
      <button onClick={() => setFilterSTate("Активные")}>Active</button>
      <button onClick={() => setFilterSTate("Все")}>All</button>
      {/* <pre>filterState: {JSON.stringify(filterState, null, 2)}</pre>
      <br />
      <pre>{JSON.stringify(filteredUser, null, 2)}</pre> */}
    </div>
  );
};

ReactDOM.render(<TodoList />, document.getElementById("todos"));
