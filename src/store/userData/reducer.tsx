import { UserData, UserDataActions } from "types/UserData";
import { SET_WATER_DRUNK_DATA, RESET_WATER_DRUNK_DATA } from "./constants";

const initialState: UserData = {
  waterDrunk: 0,
  date: ""
};

function userData(state = initialState, action: UserDataActions): UserData {
  switch (action.type) {
    case SET_WATER_DRUNK_DATA:
      return {
        waterDrunk: action.payload.waterDrunk,
        date: action.payload.date
      };
    case RESET_WATER_DRUNK_DATA:
      return initialState;
    default:
      return state;
  }
}

export { userData, initialState };
