import t from "tcomb-form-native";
import ImageFactory from 'react-native-image-picker-form'

const Status = t.enums({
    Available: 'Available',
    NotAvailable: 'Not Available'
})

const Account = t.struct({
    name: t.String, //a list of strings
    address: t.String,
    bio: t.maybe(t.String),
    status: Status, //enum defined above
    wash: t.Boolean,
    dry: t.Boolean,
    iron: t.Boolean,
    fold: t.Boolean,
    delivery: t.Boolean,
});

export const formOptions = {
    auto: 'placeholders',
    order: ['image', 'name','address', 'bio', 'status', 'wash', 'dry', 'delivery'],
    fields: {
        name:{
            label: "Your Name"
        },
        address: {
            label: "Your Address"
        },
        bio:{
            label: "About You"
        },
        wash: {
            // you can use strings or JSX
            label: "Wash & Dry"
        },
        iron: {
            // you can use strings or JSX
            label: "Iron"
        },
        status: {
            label: "Status"
        },
    }
};


export default Account;
