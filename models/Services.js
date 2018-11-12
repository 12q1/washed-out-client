import t from "tcomb-form-native";

const Services = t.struct({
  washing: t.Boolean,
  drying: t.Boolean,
  ironing: t.Boolean
});

export const formOptions = {
  fields: {}
};

export default Services;
