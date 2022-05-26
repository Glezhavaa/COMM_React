import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [gitUsers, setGitUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [perPage, setPerPage] = useState(20);
  const GIT_USER_API = `https://api.github.com/search/users?q=followers:%3E=1000&per_page=${perPage}`;
  const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN;

  useEffect(() => {
    setLoading(true);
    fetch(GIT_USER_API, {
      headers: {
        "Authorization": `token ${GIT_TOKEN}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => setGitUsers(data.items))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [perPage]);

  return (
    <UserContext.Provider
      value={{ gitUsers, loading, error, perPage, setPerPage }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
