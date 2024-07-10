import { useState } from "react";
import { UserDetails } from "./components/UserDetails";
import { AddUser } from "./components/AddUser";
import { v4 as uuidv4 } from "uuid";

export default function RenderUsers() {
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      name: "Ayeshan",
      email: "ayeshanweera@gmail.com",
    },
    {
      id: uuidv4(),
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
