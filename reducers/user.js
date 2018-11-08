import { USER_SIGNUP_ERROR } from '../actions/users/sign-up';
import { USER_AUTH_ERROR } from '../actions/users/sign-in';


export default (state = null, { type, payload }) => {
  switch (type) {

    case USER_SIGNED_UP :
      AsyncStorage.setItem('chatUser', JSON.stringify(payload));
      return { ...payload };
      
    case USER_SIGNUP_ERROR :
    case USER_AUTH_ERROR :
      const { name, message, errors } = payload;
      return {
        error: { name, message, errors }
      };

    default :
      return state;
  }
}