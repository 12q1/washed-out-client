import t from "tcomb-form-native";

export default t.struct({
  content: t.String
});

export const formOptions = {
  fields: {
    bio: {
      label: "",
      multiline: true,
      stylesheet: {
        ...t.form.Form.stylesheet,
        textbox: {
          ...t.form.Form.stylesheet.textbox,
          normal: {
            ...t.form.Form.stylesheet.textbox.normal,
            height: 50
          },
          error: {
            ...t.form.Form.stylesheet.textbox.error,
            height: 50
          }
        }
      }
    }
  }
};
