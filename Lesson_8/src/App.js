import { useState } from "react";
import Form from "./components/Form.js";
import UserList from "./components/UserList.js";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <main className="container">
      <Form setUsers={setUsers}/>
      <UserList users={users}/>
    </main>
  );
}

export default App;
