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

  if (location.pathname == "/ships") {
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
                    DELETE
                  </button>
                  {ship.name}
                </li>
              );
            })}
          </ul>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <ul>
            <h1>SHIPS:</h1>
            {ships.map((ship) => {
              return <li key={ship.id}>{ship.name}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
};
