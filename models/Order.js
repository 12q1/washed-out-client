import t from "tcomb-form-native";

const Order = t.struct({
  items: t.String,
  notes: t.String,
  dropoff: t.String,
  agree: t.Boolean
});

export default Order;
