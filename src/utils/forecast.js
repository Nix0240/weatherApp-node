const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=72330d1eef820f59388af78ac0d8c00a&units=metric`;

  request({ url, json: true }, (error, {body}) => {
    if (error) {
      callback("Low level error check your network connection",undefined);
    } else if (body.cod === "400") {
      callback("Could not fetch",undefined);
    } else {
      callback(undefined,
        `Temperature is  ${ body.main.temp} and it Feels like ${body.main.feels_like}`
      );
    }
  });
};

module.exports = forecast;
