import { useEffect, useState } from "react";
// import { stringify } from "uuid";

export function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            signal: controller.signal,
          }
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
    return () => {
      controller.abort();
    };
  }, []);

  console.log(data);

  return (
    <>
      {data.map((d, index) => (
        <div key={d.id}>
          <br />
          <div>No: {index + 1}</div>
          <br />
          <div>Name: {d.name}</div>
          <div>Username: {d.username}</div>
          <div>Email: {d.email}</div>
          <br />
          <div>
            Address:
            <ul>
              <li>City: {d.address.city}</li>
              <li>
                Geo: Lat: {d.address.geo.lat}, Lng: {d.address.geo.lng}
              </li>
              <li>Street: {d.address.street}</li>
              <li>Suite: {d.address.suite}</li>
              <li>ZipCode: {d.address.zipcode}</li>
            </ul>
          </div>
          <div>
            Company:
            <ul>
              <li>BS: {d.company.bs}</li>
              <li>Catch Phrase: {d.company.catchPhrase}</li>
              <li>Company Name: {d.company.name}</li>
            </ul>
          </div>
          <div>------------------------------------</div>
        </div>
      ))}
    </>
  );
}
