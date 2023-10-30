import {
  getSpecificResource,
  getResourceList,
  editResource,
} from "../services/AllServices.jsx";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Views.css";

export const EditHauler = () => {
  const resource = "haulers";
  const navigate = useNavigate();
  const { haulerId } = useParams();
  const [hauler, setHauler] = useState({});
  const [docks, setDocks] = useState([]);

  useEffect(() => {
    getSpecificResource(resource, haulerId).then((haulerObj) => {
      setHauler(haulerObj);
    });
  }, [haulerId]);

  useEffect(() => {
    getResourceList("docks").then((dockArr) => {
      setDocks(dockArr);
    });
  }, []);

  const handleSave = (event) => {
    event.preventDefault();

    const updatedItem = {
      id: hauler.id,
      name: hauler.name,
      dock_id: hauler.dock_id,
    };

    editResource("haulers", updatedItem, haulerId).then(() => {
      navigate(`/haulers`);
    });
  };

  return (
    <>
      <section className="edit-container">
        <h1>Edit Hauler</h1>
        <div className="edit-element">
          <label htmlFor="hauler-name">Name: </label>
          <input
            name="hauler name"
            id="hauler-name"
            value={hauler.name ? hauler.name : ""}
            type="text"
            className="form-control"
            placeholder={hauler.name}
            onChange={(event) => {
              const haulerCopy = { ...hauler };
              haulerCopy.name = event.target.value;
              setHauler(haulerCopy);
            }}
          />
        </div>
        <div className="edit-element">
          <select name="dock-drop-down" className="dock-select">
            <option>Select a dock:</option>;
            {docks.map((dock) => {
              return <option key="dock.id">{dock.location}</option>;
            })}
          </select>
        </div>
        <div className="edit-element">
          <button className="update-btn" onClick={handleSave}>
            UPDATE
          </button>
        </div>
      </section>
    </>
  );
};
