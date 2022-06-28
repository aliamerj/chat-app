import { persistStore } from "redux-persist";
import store from "../store";

export let persistor = persistStore(store);
