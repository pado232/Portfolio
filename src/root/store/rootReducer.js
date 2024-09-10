import { combineReducers } from "redux";
import lockReducer from "./reducers/lockReducer";

const rootReducer = combineReducers({
  lock: lockReducer,
});

export default rootReducer;
