import { getResourceList } from "../services/AllServices.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Views.css";

export const AllHaulerList = () => {
  const resource = "haulers";
  const navigate = useNavigate();
  const [haulers, setHaulers] = useState([]);

  useEffect(() => {
    getResourceList(resource).then((haulersArr) => {
      setHaulers(haulersArr);
    });
  }, []);

  if (location.pathname == "/haulers") {
    return (
      <>
        <section>
          <ul className="haulers-list">
            <h1>HAULERS:</h1>
            {haulers.map((hauler) => {
              return (
                <>
                  <li key={hauler.id}>
                    <button
                      className="edit-btn"
                      onClick={() => {
                        navigate(`/haulers/${hauler.id}/edit`);
                      }}
                    >
                      EDIT
                    </button>
                    {hauler.name}
                  </li>
                </>
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
            <h1>HAULERS:</h1>
            {haulers.map((hauler) => {
              return <li key={hauler.id}>{hauler.name}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
};
