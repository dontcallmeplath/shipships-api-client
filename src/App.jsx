import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "./navbar/NavBar";
import { AllListView } from "./views/AllListView";
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
        {/* <Route path="shippingships" element={<ShipList />} />
        <Route path="haulingships" element={<HaulerList />}>
          <Route path="edit" />
        </Route>
        <Route path="docks" element={<DockList />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
