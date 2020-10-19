const callZipApi = (zipData) => {
    /* Initialize the SDK. */
    const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
    const SmartyStreetsCore = SmartyStreetsSDK.core;
    const Lookup = SmartyStreetsSDK.usZipcode.Lookup;

    //Client side key
    const websiteKey = "8945708976961762"; // Update this with your website key.
    const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey);

    //build new client
    let client = SmartyStreetsCore.buildClient.usZipcode(credentials);

    // Create a new lookup with the input value.
    let lookup = new Lookup();
    lookup.city = zipData.city;
    lookup.state = zipData.state;
    lookup.zipCode = zipData.zipcode;

    //Make the call
    client.send(lookup)
        .then(handleResponse)
        .catch(handleError)
}

const handleResponse = (res) => {
    let lat = res.lookups[0].result[0].zipcodes[0].latitude;
    let lng = res.lookups[0].result[0].zipcodes[0].longitude;

    //return lat lng object
    return ({lat, lng});
}

const handleError = (res) => {
    //return error msg
    return (res.Error.msg)
}

module.exports.callZipApi = callZipApi;