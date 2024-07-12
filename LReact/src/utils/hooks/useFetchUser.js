import { useEffect, useState } from "react";

const uri = "https://jsonplaceholder.typicode.com/users";

export const useFetchUser = (userId) => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const controller = new AbortController();

    fetch(`${uri}/${userId}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));

    return () => {
      controller.abort();
    };
  }, [userId]);

  return user;
};
