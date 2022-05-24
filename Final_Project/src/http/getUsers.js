import { useState, useEffect } from "react";

const GIT_USER_API =
  "https://api.github.com/search/users?q=followers:%3E=1000&per_page=20";


function getGitUsers() {
  const [gitUsers, setGitUsers] = useState([]);

  useEffect(() => {
      fetch(GIT_USER_API)
      .then((response) => response.json())
      .then((data) => setGitUsers(data.items));
      console.log(gitUsers);
  }, []);
}
export default getGitUsers;
