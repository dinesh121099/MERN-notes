import React from "react";
import "./table.css";

function Table() {
    
  const fruits = [
    {
      id: 0,
      name: "Apple",
      stock: "IN",
    },
    {
      id: 1,
      name: "Banana",
      stock: "IN",
    },
    {
      id: 2,
      name: "Pears",
      stock: "OUT",
    },
    {
      id: 3,
      name: "Plum",
      stock: "OUT",
    },
    {
      id: 4,
      name: "Orange",
      stock: "IN",
    },
  ];

  return (
    <>
      <table border = "1">
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
                <td className = {ele.stock == "IN" ? "green" : "red"}>{ele.stock}</td>
              </tr>
        ))}
        </tbody>
        {/* <tbody>
          {fruits
          .filter((ele) => ele.stock == "IN")
          .map((ele) => (
            <tr key = {ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td className = {ele.stock == "IN" ? "green" : "red"}>{ele.stock}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </>
  );
}

export default Table;
