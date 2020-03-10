import { UserData, UserDataActions } from "types/UserData";
import { SET_WATER_DRUNK_DATA } from "./constants";

const initialState: UserData = {
  waterDrunk: 500,
  date: "date"
};

function userData(state = initialState, action: UserDataActions): UserData {
  switch (action.type) {
    case SET_WATER_DRUNK_DATA:
      return {
        waterDrunk: action.payload.waterDrunk,
        date: action.payload.date
      };
    default:
      return state;
  }
}

export { userData };
