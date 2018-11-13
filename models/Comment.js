import t from "tcomb-form-native";

export default t.struct({
  content: t.String
});

export const formOptions = {
  fields: {
    content: {
      type: "textarea",
      attrs: {
        rows: 5
      }
    }
  }
};
