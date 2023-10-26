import {
  getResourceList,
  getSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";

export const AllDockList = () => {
  const resource = "docks";
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getResourceList(resource).then((docksArr) => {
      setDocks(docksArr);
    });
  }, []);

  return (
    <>
      <section>
        <h1>DOCKS:</h1>
        <ul>
          {docks.map((dock) => {
            return <li key={dock.id}>{dock.name}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
