import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <>
      <Header filter={filter} changeFilter={setFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
