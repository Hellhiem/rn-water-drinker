import configureMockStore from "redux-mock-store";
import { SET_WATER_DRUNK_DATA, RESET_WATER_DRUNK_DATA } from "../constants";
import { initialState } from "../reducer";
import { setWaterDrunkData, resetWaterDrunkData } from "../actions";

const mockStore = configureMockStore();

describe("Actions: userData", () => {
  describe("action: setWaterDrunkData", () => {
    const store = mockStore({ userData: initialState });
    const expectedActions = [{ type: SET_WATER_DRUNK_DATA, payload: { waterDrunk: 20, date: "02/02/2020" } }];

    it("dispatches action to set water drunk data", () => {
      store.dispatch(setWaterDrunkData({ waterDrunk: 20, date: "02/02/2020" }));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("action: resetWaterDrunkData", () => {
    const store = mockStore({ userData: initialState });
    const expectedActions = [{ type: RESET_WATER_DRUNK_DATA }];

    it("dispatches action to reset water drunk data", () => {
      store.dispatch(resetWaterDrunkData());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
