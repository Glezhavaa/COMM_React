import { useState, useEffect } from "react";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  
  // const [page, setPage] = useState(1);

  // useEffect(() => {
  //   fetch(`https://randomuser.me/api?page=${page}`)
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data.results[0]))
  // },[page])

  // function LoadUserInfo() {
  //   setUsers((prevState) => {
  //     return (
  //       [...prevState, users],
  //       setPage(page +1)
  //     )
  //   })
  // }

  function LoadUserInfo() {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setUsers([...users, data.results[0]]));
  }

  return (
    <main className="container">
      <UserList users={users} />
      <button className="button" onClick={LoadUserInfo}>
        Next User
      </button>
    </main>
  );
}

export default App;
