import {
  getResourceList,
  getSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";
import "./Views.css";

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
        <ul className="haulers-list">
          <h1>HAULERS:</h1>
          {haulers.map((hauler) => {
            return <li key={hauler.id}>{hauler.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
