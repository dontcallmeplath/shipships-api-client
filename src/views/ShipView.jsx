import {
  getResourceList,
  deleteSpecificResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";
import "./Views.css";

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
        <ul className="ships-list">
          <h1>SHIPS:</h1>
          {ships.map((ship) => {
            return (
              <li key={ship.id}>
                <button
                  className="dlt-btn"
                  onClick={() => {
                    deleteSpecificResource("ships", ship.id).then(() => {
                      getResourceList(resource).then((shipsArr) => {
                        setShips(shipsArr);
                      });
                    });
                  }}
                >
                  Delete
                </button>
                {ship.name}
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
