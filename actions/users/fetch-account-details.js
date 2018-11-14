import { gql } from "apollo-boost";
import client from "../../Client";

export const FETCH_ACCOUNT_DETAILS_ERROR = "FETCH_ACCOUNT_DETAILS_ERROR";
export const FETCHED_ACCOUNT_DETAILS = "FETCHED_ACCOUNT_DETAILS";

export default userId => {
  return dispatch => {
    queryAccountDetails(userId)
      .then(userRes => {
        queryGetRating(userId).then(ratingRes => {
          queryGetComments(userId).then(commentsRes => {
            dispatch({
              type: FETCHED_ACCOUNT_DETAILS,
              payload: {
                ...userRes.data.getUser,
                rating: ratingRes.data.getRating.rating,
                comments: commentsRes.data.getComments
              }
            });
          });
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: FETCH_ACCOUNT_DETAILS_ERROR,
          payload: error
        });
      });
  };
};

function queryAccountDetails(userId) {
  return client.query({
    query: gql`
            {
              getUser(userId: ${userId}) {
                  id
                  fullName
                  picture
                  status
                  services {
                  id
                  washing
                  drying
                  ironing
                  folding
                  delivery
                  pickup
                  }
                  serviceFees {
                  id
                  washing
                  drying
                  ironing
                  folding
                  delivery
                  pickup
                  }
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

function queryGetComments(userId) {
  return client.query({
    query: gql`
    {
      getComments(userId: ${userId}){
        id
        content
        from{
          picture
          fullName
        }
        rating
      }
    }`
  });
}
