import { gql } from "apollo-boost";
import client from "../../Client";
export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR";
export const CREATED_COMMENT = "CREATED_COMMENT";

export default (fromId, toId, comment) => {
  return function(dispatch, getState) {
    queryCreateComment(fromId, toId, comment)
      .then(res => {
        dispatch({
          type: CREATED_COMMENT,
          payload: res.data.createComment
        });
      })
      .catch(error => {
        console.log(error);
        dispatch({
          type: CREATE_COMMENT_ERROR
        });
      });
  };
};

function queryCreateComment(fromId, toId, { content, rating }) {
  return client.mutate({
    variables: {
      fromId,
      toId,
      content,
      rating
    },
    mutation: gql`
      mutation CreateComment(
        $fromId: Int!
        $toId: Int!
        $content: String!
        $rating: Float!
      ) {
        createComment(
          fromId: $fromId
          toId: $toId
          content: $content
          rating: $rating
        ) {
          id
          from {
            fullName
          }
          to {
            fullName
          }
          content
          rating
        }
      }
    `
  });
}
