import { combineReducers } from "redux";
import projectReducer from "./projectReducer";
import lockReducer from "./lockReducer/lockReducer";

const rootReducer = combineReducers({
  project: projectReducer,
  lock: lockReducer,
});

export default rootReducer;
