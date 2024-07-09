import PropTypes from "prop-types";
import { useState } from "react";

export function UserDetails({ user, setUsers }) {
  const [editing, isEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  return (
    <>
      <button onClick={() => isEditing((currentState) => !currentState)}>
        Edit
      </button>
      <button
        onClick={() => {
          setUsers((currentStateUsers) =>
            currentStateUsers.filter(
              (currentUser) => currentUser.id !== user.id
            )
          );
        }}
      >
        Delete
      </button>
      {editing && (
        <button
          onClick={() => {
            setUsers((currentStateUsers) =>
              currentStateUsers.map((currentUser) =>
                currentUser.id === user.id
                  ? { ...currentUser, name, email }
                  : currentUser
              )
            );
            isEditing(false);
          }}
        >
          Save
        </button>
      )}

      <br />
      <b>Username: </b>
      {editing ? (
        <input
          type="text"
          name="user"
          id="user"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      ) : (
        <span>{user.name}</span>
      )}
      <br />
      <b>Email: </b>
      {editing ? (
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <span>{user.email}</span>
      )}
      <br />
    </>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
