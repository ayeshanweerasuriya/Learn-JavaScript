import { UserFavouriteFood } from "./UserFavouriteFood";
import { UserName } from "./UserName";

export default function App() {
  return (
    <>
      <UserName
        name={"Ayeshan"}
        age={25}
        callme={function callme() {
          console.log("Hello World");
        }}
        isLoggedIn={false}
        oneUser={[{ name: "Jason Moma", age: 45 }]}
      />
      <p>Lorem ipsum dolor sit amet.</p>
      <UserFavouriteFood />
    </>
  );
}
