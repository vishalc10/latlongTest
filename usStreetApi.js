import {callGeocoder} from './geocoder'

const callUSStreetApi = (fullAddress) => {
    /* Initialize the SDK. */
    const SmartyStreetsSDK = require("smartystreets-javascript-sdk");
    const SmartyStreetsCore = SmartyStreetsSDK.core;
    const Lookup = SmartyStreetsSDK.usStreet.Lookup;

    //Client side key
    const websiteKey = "8945708976961762"; // Update this with your website key.
    const credentials = new SmartyStreetsCore.SharedCredentials(websiteKey);

    //build new client
    const clientBuilder = new SmartyStreetsCore.ClientBuilder(credentials);
    const client = clientBuilder.buildUsStreetApiClient();

    // Create a new lookup with the input value.
    const lookup = new Lookup(fullAddress);
    lookup.maxCandidates = 1;
    lookup.match = "strict";

    // Send the lookup with the SDK. The SDK returns a promise.
    client.send(lookup)
    .then(handleResponse)
    .catch(handleError);
}

const handleResponse = (res) => {
    let lat = res.lookups[0].result[0].metadata.latitude;
    let lng = res.lookups[0].result[0].metadata.longitude;

    //return lat lng object
    return ({lat, lng});
}

const handleError = (res) => {
    //return error msg
    console.log(res.Error.msg);
    callGeocoder(fullAddress);
}