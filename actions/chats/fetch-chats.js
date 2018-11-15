import { gql } from "apollo-boost";
import client from "../../Client";

export const FETCH_CHATS_ERROR = "FETCH_CHATS_ERROR";
export const FETCHED_CHATS = "FETCHED_CHATS";

export default userId => {
  return dispatch => {
    queryChats(userId)
      .then(res => {
        dispatch({
          type: FETCHED_CHATS,
          payload: res.data.getChats
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: FETCH_MESSAGES_ERROR,
          payload: error
        });
      });
  };
};

function queryChats(userId) {
  return client.query({
    query: gql`
            {
              getChats(userId: ${userId}) {
                  id
                  fullName
                  picture
              }
            } 
          `
  });
}
