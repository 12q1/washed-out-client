import t from "tcomb-form-native";

const Order = t.struct({
    items: t.String,
    notes: t.String,
    dropoff: t.Date,
    agree: t.Boolean
});

export const formOptions = {
    fields: {
        dropoff: {
            mode: 'time'
        }
    }
};


export default Order;
