import { createStore } from "redux";
import rootReducer from "../pages/ProjectPage/Reducer/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
