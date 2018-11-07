const api = new API({uri: "http://localhost:4000/graphql"});
import request from 'superagent'
const users = api.service('users');

export const USER_SIGNUP_ERROR = 'USER_SIGNUP_ERROR';

export default (user) => {
  return (dispatch) => {
      request.post('localhost:4000/graphql').set('Content-Type', "application/json").send(user).catch(console.error)
    dispatch({ type: API_LOADING });
    users.create(user)
      .then((result) => {
        dispatch(signIn(user));
      })
      .catch((error) => {
        dispatch({ type: API_ERROR, payload: error });
        dispatch({
          type: USER_SIGNUP_ERROR,
          payload: error
        })
      });
  }

}