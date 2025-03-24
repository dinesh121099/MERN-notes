// promise was introduced in ES6
// creating a promise using the promise constructor
const promise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve(`"Sucessful!!" ${condition}`);
  } else {
    reject("Failed!!");
  }
});
console.log(promise);
promise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//.fetch returns a promise and using promise chaining we can extract the response and error
// The fetch API wraps the raw HTTP response in the "respose object"

const API =
  "https://api.open-meteo.com/v1/forecast?latitude=12.9719&longitude=77.5937&hourly=temperature_2m&timezone=Asia%2FBangkok";
const weatherApi = fetch(API);

weatherApi
  .then((response) => {
    response.json();
    console.log("Weather API",weatherApi);
  })
  .then((data) => data)
  .catch((error) => console.log("error:",error));

//Promise chaining methods
// .then()
// .catch()
// .finally()
// Promise.all([array of promises]).then().catch() //
// Promise.any([array of promises]).then().catch() //
// Promise.race([array of promises]).then().catch() //
