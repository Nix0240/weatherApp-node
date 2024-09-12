const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.geocod.io/v1.7/geocode?q=${address}+&api_key=64d89ee7ddd467a9a747e96ae679e9d6a7edb96`;

  
  request({ url, json: true }, (error, {body}) => {
    // console.log("Body",body)
    if (error) {
      callback("low level error", undefined);
    } else if (body.error) {
      callback(body.error, undefined);
    } else {
    //   console("Data GC",response)
      callback(undefined,
         {
        lat: body.results[0].location.lat,
        lng:body.results[0].location.lng,
        locAdd: body.results[0].formatted_address,
      }
    );
    }
  });
};

module.exports = geocode;
