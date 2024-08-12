// projectActions.js
import { SET_PROJECT_DATA } from "./actionTypes";

export const setProjectData = (projectKey, newData) => ({
  type: SET_PROJECT_DATA,
  payload: { projectKey, newData },
});
