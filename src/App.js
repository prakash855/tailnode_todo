import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TodosList from "./components/TodoList";
import { GrPowerReset } from "react-icons/gr";
import "./App.css";
import { BsCodeSlash, BsHeartFill } from "react-icons/bs";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const resetHandler = () => {
    setTodos([]);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
      <button onClick={resetHandler} id="btn">
        <GrPowerReset />
      </button>
      <p id="footer">
        <BsCodeSlash color="maroon" /> &nbsp; with &nbsp;
        <BsHeartFill color="maroon" /> &nbsp; by &nbsp;
        <a id="profile" href="https://github.com/prakash855" target="#">
          Prakash
        </a>
      </p>
    </div>
  );
};

export default App;
