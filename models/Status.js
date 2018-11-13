import t from "tcomb-form-native";

const Status = t.enums({
  Available: "Available",
  NotAvailable: "Not Available"
});

const Status = t.struct({
  status: Status //enum defined above
});

export default Status;
