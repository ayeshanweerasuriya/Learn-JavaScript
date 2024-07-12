import { useContext } from "react";
import { UserContext } from "../../utils/hooks/userContext";

export function CusMail() {
  const userData = useContext(UserContext);
  return <div>{userData.email}</div>;
}
