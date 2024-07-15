import "./styles.css";
function Card({ name, isTrue }) {
  return (
    <div>
      Name: {name} {isTrue && "❌"}
    </div>
  );
}

const Learn = () => {
  return (
    <>
      <Card name="Ayeshan" isTrue={true} />
      <Card name="Joseph" isTrue={false} />
      <Card name="Kapolla" isTrue={false} />
      <Card name="Valkim" isTrue={true} />
      <Card name="Samson" isTrue={true} />
    </>
  );
};

export default Learn;
