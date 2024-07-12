import { CusId } from "./components/context components/CusId";
import { CusName } from "./components/context components/CusName";
import { CusMail } from "./components/context components/CusMail";
import { UserContext } from "./utils/hooks/userContext";
import { useState } from "react";
import { useFetchUser } from "./utils/hooks/useFetchUser";

export default function App() {
  const [userData, setUserData] = useState({
    id: 1,
    name: "Ayeshan",
    email: "ayeshanweerasuriya@gmail.com",
  });

  const data = useFetchUser(6);
  console.log(data);

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      <div>
        <CusId />
        <CusName />
        <CusMail />
      </div>
    </UserContext.Provider>
  );
}
