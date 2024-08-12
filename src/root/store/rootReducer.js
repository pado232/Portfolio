import { combineReducers } from "redux";
// import projectReducer from "./reducers/projectReducer";
import lockReducer from "./reducers/lockReducer";

const rootReducer = combineReducers({
  // project: projectReducer,
  lock: lockReducer,
});

export default rootReducer;
