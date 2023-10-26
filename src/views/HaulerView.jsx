import {
  getResourceList,
  getSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";

export const AllHaulerList = () => {
  const resource = "haulers";
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getResourceList(resource).then((haulersArr) => {
      setHaulers(haulersArr);
    });
  }, []);

  return (
    <>
      <section>
        <h1>HAULERS:</h1>
        <ul>
          {haulers.map((hauler) => {
            return <li key={hauler.id}>{hauler.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
