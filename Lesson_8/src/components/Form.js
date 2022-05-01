import { useState } from "react";
import UserInput from "./UserInput";


function Form({setUsers}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  function addUser() {
    setUsers((prevState) => {
      return [...prevState, {firstName, lastName, email, city}]
    })
  }

  return (
    <div className="inputs">
       <UserInput
        name="firstName"
        type="text"
        label="სახელი"
        state={firstName}
        setState={setFirstName}
      />
      <UserInput
        name="lastName"
        type="text"
        label="გვარი"
        state={lastName}
        setState={setLastName}
      />
      <UserInput
        name="firstName"
        type="email"
        label="ელ.ფოსტა"
        state={email}
        setState={setEmail}
      />
      <UserInput
        name="firstName"
        type="text"
        label="ქალაქი"
        state={city}
        setState={setCity}
      />
      <button className="button" onClick={addUser}>დამატება</button>
    </div>
  );
}

export default Form;
