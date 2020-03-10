import { SetWaterDrunkData, UserData } from "types/UserData";
import { SET_WATER_DRUNK_DATA } from "./constants";

const setWaterDrunkData = (payload: UserData): SetWaterDrunkData => {
  return {
    type: SET_WATER_DRUNK_DATA,
    payload
  };
};

export { setWaterDrunkData };
