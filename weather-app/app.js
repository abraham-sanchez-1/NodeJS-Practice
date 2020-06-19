const request = require("request");
const secrets = require("../secrets");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const userLocation = process.argv[2];

if (!userLocation) {
  console.log("Please provide location in terminal");
} else {
  geocode(userLocation, (error, data) => {
    if (error) {
      return console.log(error);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forecastData);
    });
  });
}
