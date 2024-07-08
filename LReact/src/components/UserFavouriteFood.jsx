import { createElement } from "react";
import style from "./styles.module.css";

export function UserFavouriteFood() {
  return createElement(
    "section",
    null,
    <div className={style.redText}>FavouriteFood</div>,
    <ul>
      <li style={{ color: "yellow" }}>Pizza</li>
      <li className={style["greenText"]}>Ice cream</li>
      <li>Chocolate</li>
    </ul>
  );
}
