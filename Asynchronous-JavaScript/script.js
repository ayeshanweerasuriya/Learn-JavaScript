// Initializing API Fetch

const getToDos = (callback) => {
  const request = new XMLHttpRequest(); // (01. create request object

  // (03. tracking the progress of the request
  request.addEventListener("readystatechange", () => {
    // readyState means request state
    // console.log(request, request.readyState);

    // if it is in 4th step (Done) get the data
    if (request.readyState === 4 && request.status === 200) {
      //   console.log(request.responseText);
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      //   console.log("reach readystate, 404");
      callback("Could not fetch data", undefined);
    }
  });

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // (02. setting up type of request and request location
  request.send(); // (03. send request
};

// callback error handling
getToDos((error, data) => {
  error ? console.log(error) : console.log(data);
});
