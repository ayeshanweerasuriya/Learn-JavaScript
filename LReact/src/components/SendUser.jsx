import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function SendUser() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
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
            body: JSON.stringify({
              userId: uuidv4(),
              title: title,
              body: body,
            }),
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
          onChange={(e) => setTitle(e.target.value)}
          id="title"
          name="title"
          required
        />
        <br />
        <label htmlFor="body">Body: </label>
        <input
          type="text"
          onChange={(e) => setBody(e.target.value)}
          id="body"
          name="body"
          required
        />
        <br />
        {title && body !== "" ? <button>SUBMIT</button> : null}
      </form>
      {isSubmit ? <div>Submit Success</div> : null}
    </>
  );
}
