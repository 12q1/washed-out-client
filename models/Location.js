import t from "tcomb-form-native";

const Location = t.struct({
  country: t.String,
  city: t.String,
  postalCode: t.String,
  street: t.String,
  houseNumber: t.String,
  addition: t.String
});

export const formOptions = {
  fields: {}
};

export default Location;
