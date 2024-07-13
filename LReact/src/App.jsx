import { CusId } from "./components/context components/CusId";
import { CusName } from "./components/context components/CusName";
import { CusMail } from "./components/context components/CusMail";
import { UserContext } from "./utils/hooks/userContext";
import { useState } from "react";
import { useFetchUser } from "./utils/hooks/useFetchUser";

export default function App() {
  const { user } = useFetchUser(5);

  const [userData, setUserData] = useState({
    id: 1,
    name: "Ayeshan",
    email: "ayeshanweerasuriya@gmail.com",
  });

  return (
    <UserContext.Provider value={{ ...userData, setUserData, data: user }}>
      <div>
        <CusId />
        <CusName />
        <CusMail />
      </div>
    </UserContext.Provider>
  );
}
