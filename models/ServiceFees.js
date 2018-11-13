import t from "tcomb-form-native";

const tempServiceFees = {
  washing: t.Number,
  drying: t.Number,
  ironing: t.Number,
  folding: t.Number,
  pickup: t.Number,
  delivery: t.Number
};

export const tempFormOptions = {
  fields: {
    washing: {
      label: "washing in € per batch"
    },
    drying: {
      label: "drying in € per batch"
    },
    ironing: {
      label: "ironing in € per item"
    },
    folding: {
      label: "folding in € per item"
    },
    pickup: {
      label: "pickup in € per batch"
    },
    delivery: {
      label: "delivery in € per batch"
    }
  }
};

export default function(services) {
  const selectedServices = Object.keys(services).filter(
    key =>
      services[key] === true &&
      key !== "set" &&
      key !== "id" &&
      key !== "__typename"
  );

  const ServiceFees = selectedServices.reduce((acc, key) => {
    acc[key] = tempServiceFees[key];
    return acc;
  }, {});

  const formOptions = selectedServices.reduce(
    (acc, key) => {
      acc.fields[key] = tempFormOptions.fields[key];
      return acc;
    },
    { fields: {} }
  );

  return { ServiceFees: t.struct(ServiceFees), formOptions };
}
