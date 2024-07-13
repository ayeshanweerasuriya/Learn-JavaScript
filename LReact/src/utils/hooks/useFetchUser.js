import { useEffect, useState } from "react";

const uri = "https://jsonplaceholder.typicode.com/users";

export const useFetchUser = (userId) => {
  const [userData, setUserData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(`${uri}/${userId}`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        if (error.name != "AbortError") {
          console.log(error);
          setError(error);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      controller.abort();
      setLoading(false);
    };
  }, [userId]);

  return { user: userData, loading, error };
};
