import {
  getResourceList,
  getSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";
import "./Views.css";

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
        <ul className="docks-list">
          <h1>DOCKS:</h1>
          {docks.map((dock) => {
            return <li key={dock.id}>{dock.location}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
