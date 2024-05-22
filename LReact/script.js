const { versatile, nsfw } = require("./tags");
const { apiCall } = require("./api");

// console.log(versatile[0]);
// console.log(nsfw[0]);

apiCall()
  .then((data) => {
    console.log(data.images[0].url);
  })
  .catch((error) => {
    console.log("Failed to fetch data: ", error.message);
  });
