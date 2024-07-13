import { CusId } from "./components/context components/CusId";
import { CusName } from "./components/context components/CusName";
import { CusMail } from "./components/context components/CusMail";
import { UserContext } from "./utils/hooks/userContext";
import { useState, useEffect } from "react";
import { useFetchUser } from "./utils/hooks/useFetchUser";
//
import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function App() {
  const [userData, setUserData] = useState();

  const { user, error, loading } = useFetchUser(2);
  useEffect(() => {
    !error && !loading && user ? setUserData(user) : null;
  }, [user, error, loading]);

  return (
    <UserContext.Provider value={{ ...userData, setUserData }}>
      <div>
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          <div>
            <CusId />
            <CusName />
            <CusMail />
          </div>
        )}
      </div>
    </UserContext.Provider>
  );
}
