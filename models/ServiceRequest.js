import t from "tcomb-form-native";
import Services from "./Services";

export default t.struct({
  items: t.list(
    t.struct({
      itemType: t.String,
      count: t.Number
    })
  ),
  specifications: t.maybe(t.String),
  services: Services,
  additionalCharge: t.Number
});

export const formOptions = {
  fields: {}
};
