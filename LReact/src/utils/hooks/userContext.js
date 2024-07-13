import { createContext } from "react";

export const UserContext = createContext({
  id: 0,
  name: "",
  phone: "",
  setUserData: () => {},
});
