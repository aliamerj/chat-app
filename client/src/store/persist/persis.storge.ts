import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../reducers";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducerPersis = persistReducer(persistConfig, reducers);

export default reducerPersis;
