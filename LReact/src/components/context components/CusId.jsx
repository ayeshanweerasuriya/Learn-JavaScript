import { useContext, useState } from "react";
import { UserContext } from "../../utils/hooks/userContext";

export function CusId() {
  const [pressed, setPressed] = useState(true);

  const UseContext = useContext(UserContext);

  const handleTextChange = () => {
    setPressed((currentState) => !currentState);

    pressed
      ? UseContext.setUserData((currentUserData) => ({
          ...currentUserData,
          name: "James",
          email: "jasonmomoa@gmail.com",
        }))
      : UseContext.setUserData((currentUserData) => ({
          ...currentUserData,
          name: "Ayeshan",
          email: "ayeshanweerasuriya@gmail.com",
        }));
  };
  return (
    <div>
      {UseContext.id}
      <button onClick={handleTextChange}>Press</button>
    </div>
  );
}
