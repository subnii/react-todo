import React from "react";
import styles from "./Header.module.css";
import { BsSun } from "react-icons/bs";

const filterList = ["All", "Active", "Completed"];

function Header({ filter, changeFilter }) {
  return (
    <header className={styles.header}>
      <button className={styles.toggle}>
        <BsSun />
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
