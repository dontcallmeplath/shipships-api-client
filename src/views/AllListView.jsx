import { AllShipList } from "./ShipView";
import { AllHaulerList } from "./HaulerView";
import { AllDockList } from "./DockView";

export const AllListView = () => {
  const shipList = AllShipList();
  const haulerList = AllHaulerList();
  const dockList = AllDockList();

  return (
    <>
      <div>{shipList}</div>
      <div>{haulerList}</div>
      <div>{dockList}</div>
    </>
  );
};
