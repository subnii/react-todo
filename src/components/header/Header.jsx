import React from "react";
import styles from "./Header.module.css";
import { BsSun, BsMoon } from "react-icons/bs";
import { useDarkMode } from "../../context/darkMode";

const filterList = ["All", "Active", "Completed"];

function Header({ filter, changeFilter }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {darkMode ? <BsSun /> : <BsMoon />}
      </button>
      <ul className={styles.filters}>
        {filterList.map((filterItem) => (
          <li
            key={filterItem}
            className={`${styles.filter} ${filter === filterItem && styles.selected}`}
            onClick={changeFilter.bind(null, filterItem)}
          >
            {filterItem}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
