import { AllShipList } from "./ShipView";
import { AllHaulerList } from "./HaulerView";
import { AllDockList } from "./DockView";

export const AllListView = () => {
  const shipList = AllShipList();
  const haulerList = AllHaulerList();
  const dockList = AllDockList();

  return (
    <>
      <div className="list-container">
        <div className="ships">{shipList}</div>
        <div className="haulers">{haulerList}</div>
        <div className="docks">{dockList}</div>
      </div>
    </>
  );
};
