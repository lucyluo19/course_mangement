import { combineReducers } from "redux";
import authors from "./authorReducer";
import courses from "./courseReducer";
import apiCallInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses: courses,
  authors: authors,
  apiCallInProgress: apiCallInProgress
});

export default rootReducer;
