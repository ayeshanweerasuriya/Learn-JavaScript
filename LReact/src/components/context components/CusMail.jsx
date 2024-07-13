import { useContext } from "react";
import { UserContext } from "../../utils/hooks/userContext";

export function CusMail() {
  const userData = useContext(UserContext);
  console.log(userData);
  return <div></div>;
}
