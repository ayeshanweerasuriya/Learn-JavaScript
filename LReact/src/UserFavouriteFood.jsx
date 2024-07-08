import { createElement } from "react";

export function UserFavouriteFood() {
  return createElement(
    "section",
    null,
    <div>FavouriteFood</div>,
    <ul>
      <li>Pizza</li>
      <li>Ice cream</li>
      <li>Chocolate</li>
    </ul>
  );
}
