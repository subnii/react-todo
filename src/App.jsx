import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import TodoList from "./components/todoList/TodoList";
import { DarkModeProvider } from "./context/darkMode";

function App() {
  const [filter, setFilter] = useState("All");

  return (
    <DarkModeProvider>
      <Header filter={filter} changeFilter={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
