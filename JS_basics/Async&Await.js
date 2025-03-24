let promise = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve("Promise resolved value");
    } else {
      reject("Promise rejected value");
    }
  }, 2000);
});

async function getdata() {
  try {
    let value = await promise;
    console.log("value:", value);
  } catch (error) {
    console.log("error:", error);
  }
}
getdata();

// promise.then(res => console.log(res))
// .catch(error => console.log(error));
