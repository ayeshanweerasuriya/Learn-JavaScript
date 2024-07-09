import style from "./styles.module.css";

export function ObjectMap() {
  const isAuthenticated = true;
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
  console.log(mockUsers);

  return isAuthenticated ? (
    <>
      {mockUsers && mockUsers.length > 0 ? (
        mockUsers.map((item, index) => (
          <div
            className={item.id % 2 === 0 ? style.redText : style.greenText}
            key={index + 1}
          >
            {item.name}
          </div>
        ))
      ) : (
        <div>mock users are empty</div>
      )}
    </>
  ) : (
    <div>No records to show</div>
  );
}
