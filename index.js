import { latlngtest } from './latlngtest';

// latlngtest({
//     zipcode: 'abcde',
// }).then(res => console.log(111, res))

let dex;

latlngtest({
    address: '155 E Frye Rd Chandler AZ',
}).then((res) => {
    storevalue(res)
})

const storevalue = (val) => {
    console.log(234, val)
}

