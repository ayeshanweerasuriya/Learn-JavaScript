import PropTypes from "prop-types";
import { useState } from "react";

export function AddUser({ setUsers }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setUsers((currentUserState) => [
          ...currentUserState,
          { id: currentUserState.length + 1, name: name, email: email },
        ]);
        setName("");
        setEmail("");
      }}
    >
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        id="username"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <br />
      <button disabled={name && email !== "" ? false : true}>Save</button>
    </form>
  );
}

AddUser.propTypes = {
  setUsers: PropTypes.func.isRequired,
};
