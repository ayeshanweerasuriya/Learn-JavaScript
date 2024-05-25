// const prompt = require("prompt-sync")();

// const

function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "Unites States",
  };

  console.log(city, state, newAddress.country);
}

addressMaker({ city: "Austin", state: "Texas" });

function add(...nums) {
  const numArray = nums;

  console.log(numArray);
}

add(1, 2, 3, 4, 5);
