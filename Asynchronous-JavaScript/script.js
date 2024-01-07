const request = new XMLHttpRequest(); // (01. create request object

// (03. tracking the progress of the request
request.addEventListener("readystatechange", () => {
  console.log(request, request.readyState); // readyState means request state

  // if it is in 4th step (Done) get the data
  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // (02. setting up type of request and request location
request.send(); // (03. send request
