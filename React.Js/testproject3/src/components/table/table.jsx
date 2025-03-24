import React from "react";

function Table() {
    
  const fruits = [
    {
      id: 0,
      name: "apple",
      stock: "IN",
    },
    {
      id: 1,
      name: "banana",
      stock: "IN",
    },
    {
      id: 2,
      name: "pears",
      stock: "OUT",
    },
    {
      id: 3,
      name: "plum",
      stock: "OUT",
    },
    {
      id: 4,
      name: "orange",
      stock: "IN",
    },
  ];

  return (
    <>
      <table border={1}>
        <thead>
          <tr key="Head">
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
        {fruits.map((ele) => (
              <tr key={ele.id} >
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td style ={{ backgroundColor: ele.stock == "IN" ? "green" : "red"}}>{ele.stock}</td>
              </tr>
        ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
