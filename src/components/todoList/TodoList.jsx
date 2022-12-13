import React, { useState } from "react";
import styles from "./TodoList.module.css";
import { BiTrashAlt } from "react-icons/bi";

function Todo({ todo, statusHandler, removeHandler }) {
  const { id, text, status } = todo;

  const checkboxHandler = (e) => {
    statusHandler(id, e.target.checked ? "Completed" : "Active");
  };

  const buttonHandler = () => {
    removeHandler(id);
  };

  return (
    <li className="todo">
      <input
        className={styles.checkbox}
        type="checkbox"
        id="checkbox"
        checked={status === "Completed"}
        onChange={checkboxHandler}
      />
      <label htmlFor="checkbox" className={styles.text}>
        {text}
      </label>
      <button className={styles.del} onClick={buttonHandler}>
        <BiTrashAlt />
      </button>
    </li>
  );
}

function AddTodo({ addHandler }) {
  const [inputText, setInputText] = useState("");

  const inputHandler = (e) => {
    setInputText(e.target.value);
  };

  const buttonHandler = () => {
    if (inputText.trim().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }

    addHandler(inputText);
    setInputText("");
  };

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="text" placeholder="Add Todo" value={inputText} onChange={inputHandler} />
      <button className={styles.button} onClick={buttonHandler}>
        Add
      </button>
    </div>
  );
}

const filterList = (todoList, filter) => {
  if (filter === "All") {
    return todoList;
  } else {
    return todoList.filter((todo) => todo.status === filter);
  }
};

function TodoList({ filter }) {
  const [todoList, setTodoList] = useState([]);

  const addHandler = (inputText) => {
    setTodoList([...todoList, { id: todoList.length, text: inputText, status: "Active" }]);
  };

  const statusHandler = (id, status) => {
    setTodoList(todoList.map((todo) => (todo.id === id ? { ...todo, status } : todo)));
  };

  const removeHandler = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterList(todoList, filter).map((todo) => (
          <Todo key={todo.id} todo={todo} statusHandler={statusHandler} removeHandler={removeHandler} />
        ))}
      </ul>
      <AddTodo addHandler={addHandler} />
    </section>
  );
}

export default TodoList;
