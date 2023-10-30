import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import { AllListView } from "./views/AllListView";
import { AllShipList } from "./views/ShipView";
import { AllHaulerList } from "./views/HaulerView";
import { AllDockList } from "./views/DockView";
import { EditHauler } from "./views/HaulerEditView";
import "./App.css";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllListView />} />
        <Route path="/ships" element={<AllShipList />} />
        <Route path="/haulers" element={<AllHaulerList />} />
        <Route path="/haulers/:haulerId/edit" element={<EditHauler />} />
        <Route path="/docks" element={<AllDockList />} />
      </Route>
    </Routes>
  );
};

export default App;
