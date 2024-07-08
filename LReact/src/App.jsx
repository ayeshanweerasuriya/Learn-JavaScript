import { UserFavouriteFood } from "./components/UserFavouriteFood";
import { UserName } from "./components/UserName";

import style from "./components/styles.module.css";

export default function App() {
  const mockUsers = [
    {
      id: 1,
      name: "Ayeshan",
    },
    {
      id: 2,
      name: "Byeshan",
    },
    {
      id: 3,
      name: "Cyeshan",
    },
    {
      id: 4,
      name: "Dyeshan",
    },
    {
      id: 5,
      name: "Eyeshan",
    },
    {
      id: 6,
      name: "Fyeshan",
    },
    {
      id: 7,
      name: "Gyeshan",
    },
    {
      id: 8,
      name: "Hyeshan",
    },
  ];
  return (
    <>
      {mockUsers.map((item) => (
        <div
          className={item.id % 2 == 0 ? style.redText : style.greenText}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
    </>
  );
}
