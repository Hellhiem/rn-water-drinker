import { Action } from "redux";

type UserData = {
  waterDrunk: number;
  date: string;
};

interface SetWaterDrunkData extends Action {
  type: 'SET_WATER_DRUNK_DATA';
  payload: UserData;
}
type UserDataActions = SetWaterDrunkData;

export type { UserData, UserDataActions, SetWaterDrunkData };
