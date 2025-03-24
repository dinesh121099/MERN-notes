// Start (initialization of Promise)
const fetchData = () => {
    // Created a promise
    return new Promise((resolve, reject) => {
      // asynchronous operation starts i.e setTimeout()
      // setTimeout is at pending state
      setTimeout(() => {
        const success = true;
        // if asynchronous operation completes
        //             |
        // fulfilled state for success & rejected for error
        if (success) {
          // resolve changing state from pending to fulfilled
          resolve("Data fetched successfully");
        } else {
          // reject changing state from pending to rejected
          reject("Error fetching data");
        }
      }, 5000);
    });
  };
   
console.log(fetchData());
fetchData()
.then((result) => {
 console.log(result);
})
.catch((err) => console.log(err));