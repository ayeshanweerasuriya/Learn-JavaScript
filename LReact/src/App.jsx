import { useState } from "react";
import { UserDetails } from "./components/UserDetails";
import { AddUser } from "./components/AddUser";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ayeshan",
      email: "ayeshanweera@gmail.com",
    },
    {
      id: 2,
      name: "Jason",
      email: "jasonmamoa@icloud.com",
    },
  ]);
  return (
    <>
      <AddUser setUsers={setUsers} />

      <br />
      <br />
      {users.length > 0 ? (
        users.map((user) => (
          <UserDetails key={user.id} user={user} setUsers={setUsers} />
        ))
      ) : (
        <div>Records are empty</div>
      )}
      {}
    </>
  );
}
