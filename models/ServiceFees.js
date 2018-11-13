import t from "tcomb-form-native";

const ServiceFees = t.struct({
  washing: t.Number,
  drying: t.Number,
  ironing: t.Number,
  folding: t.Number,
  pickup: t.Number,
  delivery: t.Number
});

export const formOptions = {
  fields: {}
};

export default ServiceFees;
