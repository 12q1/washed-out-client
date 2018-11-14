import { combineReducers } from "redux";
import user from "./user";
import feed from "./feed";
import selectedUser from "./selectedUser";
import serviceRequest from "./serviceRequest";
import messages from "./messages";
import chats from "./chats";

export default combineReducers({
  user,
  feed,
  selectedUser,
  serviceRequest,
  messages,
  chats
});
