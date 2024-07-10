import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function SendUser() {
  const [userData, setUserData] = useState({
    userId: uuidv4(),
    title: "",
    body: "",
  });
  const [submit, setSubmit] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    if (!submit) return;
    async function sendUser() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        const json = await response.json();
        console.log(json);
        setSubmit(false);
        setIsSubmit(true);
      } catch (err) {
        console.erro(err);
      }
    }
    sendUser();
  }, [submit]);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmit(true);
        }}
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          onChange={(e) =>
            setUserData((currentUserData) => ({
              ...currentUserData,
              title: e.target.value,
            }))
          }
          id="title"
          name="title"
          value={userData.title}
          required
        />
        <br />
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          onChange={(e) =>
            setUserData((currentUserData) => ({
              ...currentUserData,
              body: e.target.value,
            }))
          }
          id="body"
          name="body"
          value={userData.body}
          required
        />
        <br />
        {userData.title && userData.body ? <button>SUBMIT</button> : null}
      </form>
      {isSubmit ? <div>Submit Success</div> : null}
    </>
  );
}
