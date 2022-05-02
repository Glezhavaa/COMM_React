function User({ user }) {
  return (
    <div className="card">
      <img src={user.picture.medium}></img>
      <p>{user.email}</p>
      <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <p>{user.location.city}</p>
      <p>{user.dob.age}</p>
      <p>{user.dob.date}</p>
    </div>
  );
}

export default User;
