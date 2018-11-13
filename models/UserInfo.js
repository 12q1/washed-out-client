import t from "tcomb-form-native";

const UserInfo = t.struct({
  name: t.String, //a list of strings
  bio: t.maybe(t.String)
});

export const formOptions = {
  auto: "placeholders",
  order: ["name", "bio"],
  fields: {
    name: {
      label: "Your full name"
    },
    bio: {
      label: "About you",
      multiline: true,
      stylesheet: {
        ...t.form.Form.stylesheet,
        textbox: {
          ...t.form.Form.stylesheet.textbox,
          normal: {
            ...t.form.Form.stylesheet.textbox.normal,
            height: 100
          },
          error: {
            ...t.form.Form.stylesheet.textbox.error,
            height: 100
          }
        }
      }
    }
  }
};

export default UserInfo;
