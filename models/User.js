import t from "tcomb-form-native";

export const UserSignUp = t.struct({
  name: t.String,
  email: t.String,
  password: t.String
});

export const UserSignIn = t.struct({
  email: t.String,
  password: t.String
});

export const formOptions = {
  fields: {
    email: {
      keyboardType: "email-address", // change keyboard layout to email input
      autoCapitalize: "none" // start email addresses with lower-case
    },
    password: {
      secureTextEntry: true // mask password input
    }
  }
};
