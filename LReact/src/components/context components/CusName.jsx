import { useContext, useState } from "react";
import { UserContext } from "../../utils/hooks/userContext";

export function CusName() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <div>{name}</div>
    </div>
  );
}
