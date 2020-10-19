const callGeocoder = (fullAddress) => {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        'address': fullAddress
      }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var lat = results[0].geometry.location.lat();
          var lng = results[0].geometry.location.lng();
          
          return ({lat, lng});
        }
      })
}

module.exports.callGeocoder = callGeocoder;