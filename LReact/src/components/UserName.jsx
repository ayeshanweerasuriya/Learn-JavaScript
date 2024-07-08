import { useState, useRef } from "react";
import { PropTypes } from "prop-types";
import { ReactFragment } from "./ReactFragment";
import style from "./styles.module.css";

export function UserName(props) {
  //   const [pressed, setPressed] = useState(0);

  //   console.log(props);
  //   props.callme();

  const pressed = useRef(true);
  const textRef = useRef(null);

  const handlePress = () => {
    pressed.current = !pressed.current;

    if (textRef.current) {
      textRef.current.className = pressed.current
        ? style.redText
        : style.greenText;
    }

    console.log(pressed.current);
  };

  return (
    <div>
      <ReactFragment />
      <button className={style.button} onClick={handlePress}>
        press
      </button>
      <br />
      <b ref={textRef} className={style.redText}>
        UserName: {props.name}
      </b>
      <br />
      <span>age: {props.age}</span>
      <p>Is user logged in: {String(props.isLoggedIn)}</p>
    </div>
  );
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  callme: PropTypes.func.isRequired,
  oneUser: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
    })
  ),
};
