import { createStore } from "redux";
import AsyncStorage from "@react-native-community/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./RootReducer";

const persistConfig = {
  key: "WaterDrinkerStore",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

persistStore(store);

export default store;
