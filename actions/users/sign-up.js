export const USER_SIGNUP_ERROR = "USER_SIGNUP_ERROR";
export const USER_SIGNED_UP = "USER_SIGNED_UP";

export default () => {
  dispatch({
    type: USER_SIGNED_UP,
    payload: "hi"
  });

  // dispatch({
  //   type: USER_SIGNUP_ERROR,
  //   payload: error
  // });
};
