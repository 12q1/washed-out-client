import { combineReducers } from "redux";
import user from "./user";
import feed from "./feed";
import selectedUser from "./selectedUser";

export default combineReducers({
  user,
  feed,
  selectedUser
});
