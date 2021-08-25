import React from "react";
import { BsCheckAll, BsTrash } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) =>
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          console.log(item)
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  const handleDelete = ({ id }) =>
    setTodos(todos.filter((todo) => todo.id !== id));
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={"list " + (todo.completed ? "complete" : "")}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <BsCheckAll />
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <FaUserEdit />
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <BsTrash />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
