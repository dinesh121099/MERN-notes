// Callback Hell
fetch("https://api.example.com/user")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  })
  .then((user) => {
    console.log("User:", user);
    return fetch(`https://api.example.com/orders?userId=${user.id}`);
  })
  .then((response) => {
    if (!response.ok) throw new Error("Failed to fetch orders");
    return response.json();
  })
  .then((orders) => {
    console.log("Orders:", orders);
    const orderDetailsPromises = orders.map((order) =>
      fetch(`https://api.example.com/orders/${order.id}`)
        .then((response) => {
          if (!response.ok)
            throw new Error(`Failed to fetch order ${order.id}`);
          return response.json();
        })
        .catch((error) => {
          console.error("Order fetch error:", error);
        })
    );
    return Promise.all(orderDetailsPromises);
  })
  .then((orderDetails) => {
    console.log("Order Details:", orderDetails);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

  // Nested Promises: The orders.map inside the .then() introduces more nested .then() calls.
  // Error Handling Complexity: Errors within the map loop (fetch for each order) are caught locally (.catch() in the map), while global errors are caught at the outer .catch().
  // Readability Declines: The flow of the logic is hard to follow as Promises are nested in multiple layers.
  // Debugging Nightmare: Tracking which .then() caused an error can be challenging.


async function fetchUserData() {
  try {
    const userResponse = await fetch("https://api.example.com/user");
    if (!userResponse.ok) throw new Error("Failed to fetch user");
    const user = await userResponse.json();
    console.log("User:", user);

    const ordersResponse = await fetch(
      `https://api.example.com/orders?userId=${user.id}`
    );
    if (!ordersResponse.ok) throw new Error("Failed to fetch orders");
    const orders = await ordersResponse.json();
    console.log("Orders:", orders);

    const orderDetails = await Promise.all(
      orders.map(async (order) => {
        const orderResponse = await fetch(
          `https://api.example.com/orders/${order.id}`
        );
        if (!orderResponse.ok)
          throw new Error(`Failed to fetch order ${order.id}`);
        return orderResponse.json();
      })
    );

    console.log("Order Details:", orderDetails);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchUserData();
