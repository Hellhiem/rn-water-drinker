import { SetWaterDrunkData, ResetWaterDrunkData } from "types/UserData";
import { initialState, userData } from "../reducer";
import { SET_WATER_DRUNK_DATA, RESET_WATER_DRUNK_DATA } from "../constants";

describe("Reducers: userData", () => {
  describe("reducer: userData", () => {
    it("should handle SET_WATER_DRUNK_DATA", () => {
      const action: SetWaterDrunkData = {
        type: SET_WATER_DRUNK_DATA,
        payload: {
          waterDrunk: 200,
          date: "05/02/2020"
        }
      };

      const expectedState = {
        waterDrunk: 200,
        date: "05/02/2020"
      };

      expect(userData(initialState, action)).toEqual(expectedState);
    });

    it("should handle RESET_WATER_DRUNK_DATA", () => {
      const action: ResetWaterDrunkData = {
        type: RESET_WATER_DRUNK_DATA
      };

      expect(userData(initialState, action)).toEqual(initialState);
    });
  });
});
