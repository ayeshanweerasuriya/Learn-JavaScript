const ayeshan = {
  name: "Ayeshan",
  age: 23,
  address: "wewahena watta road",
  sex: "male",
  isAlive: true,
  quotes: ["Good Morning", "Welcome"],
  callQuotes: function () {
    console.log(this.quotes);
  },

  callFinalQoutes: function () {
    this.quotes.forEach((quote) => {
      console.log(quote);
    });
  },
};

// let result = ayeshan.quotes[1];
// ayeshan["name"] = "Kesara";

console.log(ayeshan.callFinalQoutes());
