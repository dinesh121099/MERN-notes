fetch("https://my-json-server.typicode.com/dinesh121099/Db/db")
  .then((response) => {
    if (!response.ok) {
      throw new Error("error: response not ok");
    }
    return response.json();
  })
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
