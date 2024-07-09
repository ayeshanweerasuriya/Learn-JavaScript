import styles from "./styles.module.css";
import { useRef, useState } from "react";

export function LoginForm() {
  const clicked = useRef(true);
  const textRef = useRef(null);

  const handleClick = function () {
    clicked.current = !clicked.current;

    if (clicked.current) {
      textRef.current.className = styles.redText;
    } else {
      textRef.current.className = styles.greenText;
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="username">Username: </label>
      <input
        className="james huta"
        id="username"
        onChange={(e) => console.log(e.target.value)}
        type="text"
      />
      <br />
      <label ref={textRef} className={styles.redText} htmlFor="password">
        Password:
      </label>
      <input id="password" type="password" />
      <br />
      <button onClick={handleClick}>Login</button>
      <button>Submit</button>
    </form>
  );
}
