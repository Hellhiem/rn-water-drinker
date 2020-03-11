import { SetWaterDrunkData, ResetWaterDrunkData, UserData } from "types/UserData";
import { SET_WATER_DRUNK_DATA, RESET_WATER_DRUNK_DATA } from "./constants";

const setWaterDrunkData = (payload: UserData): SetWaterDrunkData => {
  return {
    type: SET_WATER_DRUNK_DATA,
    payload
  };
};

const resetWaterDrunkData = (): ResetWaterDrunkData => {
  return {
    type: RESET_WATER_DRUNK_DATA
  };
};

export { setWaterDrunkData, resetWaterDrunkData };
