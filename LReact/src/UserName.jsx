import { PropTypes } from "prop-types";
import { ReactFragment } from "./ReactFragment";

export function UserName(props) {
  console.log(props);
  props.callme();
  return (
    <div>
      <ReactFragment />
      <b>UserName: {props.name}</b>
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
