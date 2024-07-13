import { useContext, useState } from "react";
import { UserContext } from "../../utils/hooks/userContext";

export function CusId() {
  const { id, name, username, email, phone, website } = useContext(UserContext);
  return (
    <div>
      <div>Id:{id}</div>
      <div>Name: {name}</div>
      <div>Username: {username}</div>
      <div>Email:{email}</div>
      <div>Phone:{phone}</div>
      <div>Webisite:{website}</div>
    </div>
  );
}
