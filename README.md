# What is this?

Get Lat Long from SmartyStreets and Google Geocoder

# Installation

`npm i latlngtest --save`

Then...

```
import { latlngtest } from 'latlngtest';

latlngtest({
    address: 'someAddress',
});

//OR

latlngtest({
    zipcode: 'XXXXX',
    city: 'Lorem',
    state: 'XY'
});
```

## Options

- _address_ - _Complete Address_
- _zipcode_ - _5 digit zip code_
- _city_ - _City name_
- _state_ - _State code_
