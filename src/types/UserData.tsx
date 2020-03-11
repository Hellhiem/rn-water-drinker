import { Action } from "redux";

type UserData = {
  waterDrunk: number;
  date: string;
};

interface SetWaterDrunkData extends Action {
  type: 'SET_WATER_DRUNK_DATA';
  payload: UserData;
}
interface ResetWaterDrunkData extends Action {
  type: 'RESET_WATER_DRUNK_DATA';
}

type UserDataActions = SetWaterDrunkData | ResetWaterDrunkData;

export type { UserData, UserDataActions, SetWaterDrunkData, ResetWaterDrunkData };
