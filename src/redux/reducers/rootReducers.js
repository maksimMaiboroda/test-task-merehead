import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

/* import { reducer as formReducer } from "redux-form"; */

export default combineReducers({
   usersPage: usersReducer,
  /*form: formReducer, */
});
