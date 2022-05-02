import User from "./User";
function UserList({ users }) {
  return (
    <div className="dashboard">
      {users.map((user) => (
        <User key={user.dob.date} user={user} />
      ))}
    </div>
  );
}

export default UserList;
