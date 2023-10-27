import {
  getResourceList,
  getSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";

export const AllShipList = () => {
  const resource = "ships";
  const [ships, setShips] = useState([]);

  useEffect(() => {
    getResourceList(resource).then((shipsArr) => {
      setShips(shipsArr);
    });
  }, []);

  return (
    <>
      <section>
        <h1>SHIPS:</h1>
        <ul>
          {ships.map((ship) => {
            return (
              <>
                <li key={ship.id}>
                  <button className="dlt-btn">Delete</button>
                  {ship.name}
                </li>
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
};
