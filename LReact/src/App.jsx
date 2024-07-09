import { useState } from "react";
import { UserDetails } from "./components/UserDetails";

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
      {users.map((user) => (
        <UserDetails key={user.id} user={user} setUsers={setUsers} />
      ))}
    </>
  );
}
