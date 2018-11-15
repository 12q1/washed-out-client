import { gql } from "apollo-boost";
import client from "../../Client";
export const FETCH_FEED_ERROR = "FETCH_FEED_ERROR";
export const FETCHED_FEED_ITEM = "FETCHED_FEED_ITEM";

export default userId => {
  return dispatch => {
    queryFeed(userId)
      .then(res => {
        res.data.getFeed.forEach(user => {
          queryGetRating(user.id).then(ratingRes => {
            dispatch({
              type: FETCHED_FEED_ITEM,
              payload: { ...user, rating: ratingRes.data.getRating.rating }
            });
          });
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

function queryGetRating(userId) {
  return client.query({
    query: gql`
                {
                  getRating(userId: ${userId}) {
                    rating
                  }
                }
              `
  });
}
