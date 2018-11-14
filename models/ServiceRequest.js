import t from "tcomb-form-native";

const tempServices = {
  washing: t.Boolean,
  drying: t.Boolean,
  ironing: t.Boolean,
  folding: t.Boolean,
  pickup: t.Boolean,
  delivery: t.Boolean
};

export default function(services, serviceFees) {
  const selectedServices = Object.keys(services).filter(
    key =>
      services[key] === true &&
      key !== "set" &&
      key !== "id" &&
      key !== "__typename"
  );

  const formOptions = {
    fields: {
      services: {
        fields: {}
      }
    }
  };

  const Services = selectedServices.reduce((acc, key) => {
    acc[key] = tempServices[key];
    formOptions.fields.services.fields[key] = {
      label: `${key}: €${serviceFees[key]} per ${
        key === "washing" ||
        key === "drying" ||
        key === "delivery" ||
        key === "pickup"
          ? "batch"
          : "item"
      }`
    };
    return acc;
  }, {});

  console.log(formOptions);

  return {
    ServiceRequest: t.struct({
      items: t.list(
        t.struct({
          itemType: t.String,
          count: t.Number
        })
      ),
      specifications: t.maybe(t.String),
      services: t.struct(Services),
      additionalCharge: t.Number
    }),
    formOptions
  };
}
