import axios from "axios";
import { useState } from "react";
import UserCard from "../userCard/userCard";
import styles from "./Search.module.css";

function SearchComponent() {
  const [value, setValue] = useState("");
  const [users, setUsers] = useState([]);

  function inputHandler(e) {
    const value = e.target.value;
    setValue(value);
  }

  async function fetchUsers() {
    const { data } = await axios.get(
      "https://api.github.com/search/users?q=" + value
    );
    return data.items;
  }

  async function searchHandler(e) {
    e.preventDefault();
    if (value) {
      const items = await fetchUsers();
      setUsers(items);
    } else {
      console.log("Value empty");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <input
          type="text"
          name="search"
          value={value}
          placeholder="Enter User ID For Search"
          onChange={inputHandler}
        ></input>
        <button type="button" onClick={searchHandler} className={styles.btn}>
          Search
        </button>
      </div>
      <div className={styles.container}>
        {users.map((user) => {
          return <UserCard gitUser={user} key={user.id} />;
        })}
      </div>
    </div>
  );
}

export default SearchComponent;
