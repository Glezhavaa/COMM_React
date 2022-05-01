import User from "./User.js";

function UserList({users}) {
    return (
        <div className="results">
            {users.map((user) => (
               <User key={user.firstName} {...user} />
            ))}
        </div>
    )
}

export default UserList;