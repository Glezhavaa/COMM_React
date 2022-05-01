function UserInput({ type, name, label, state, setState }) {
  return (
    <label htmlFor={name}>
      {label}
      <input
        type={type}
        id={name}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </label>
  );
}

export default UserInput;
