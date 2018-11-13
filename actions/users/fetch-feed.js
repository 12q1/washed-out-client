import { gql } from "apollo-boost";
import client from "../../Client";

export const FETCH_FEED_ERROR = "FETCH_FEED_ERROR";
export const FETCHED_FEED = "FETCHED_FEED";

export default userId => {
  return dispatch => {
    queryFeed(userId)
      .then(res => {
        dispatch({
          type: FETCHED_FEED,
          payload: res.data.getFeed
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: FETCH_FEED_ERROR,
          payload: error
        });
      });
  };
};

function queryFeed(userId) {
  return client.query({
    query: gql`
            {
              getFeed(userId: ${userId}) {
                  id
                  fullName
                  picture
              }
            }
          `
  });
}
