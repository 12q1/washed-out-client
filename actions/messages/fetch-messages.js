import { gql } from "apollo-boost";
import client from "../../Client";

export const FETCH_MESSAGES_ERROR = "FETCH_MESSAGES_ERROR";
export const FETCHED_MESSAGES = "FETCHED_MESSAGES";

export default (userId, otherId) => {
  return (dispatch, getState) => {
    queryMessages(userId, otherId)
      .then(res => {
        dispatch({
          type: FETCHED_MESSAGES,
          payload: res.data.getMessages
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

function queryMessages(userId, otherId) {
  console.log(userId, otherId);
  return client.query({
    query: gql`
            {
              getMessages(userId: ${userId}, otherId: ${otherId}) {
                    id
                    from{
                        id
                        fullName
                        picture
                    }
                    content
                    status
                  }
            } 
          `
  });
}
