import t from "tcomb-form-native";

const Order = t.struct({
    items: t.list(t.String), //a list of strings
    notes: t.maybe(t.String),
    dropoff: t.Date,
    agree: t.Boolean
});

export const formOptions = {
    auto: 'placeholders',
    fields: {
        notes: {
            config:{
                size: 'md'
            }
        },
        dropoff: {
            mode: 'datetime',
            config: {
                format: date => moment(date).format('dddd, MMMM Do YYYY, h:mm a'),
                dateFormat: date => moment(date).format('dddd, MMMM Do YYYY'),
                timeFormat: date => moment(date).format('h:mm a'),
              }
        }
    }
};


export default Order;
