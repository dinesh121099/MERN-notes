import { useEffect, useState } from "react";
import "./table.css";

function Table({ fruits }) {
  const [fruitsList, setfruitsList] = useState(fruits);

  useEffect(() => {
    setfruitsList(fruits)
  }, [fruits]);

  function handlechecks(id) {
    setfruitsList((prevList) =>
      prevList.map((ele) =>
        ele.id == id ? { ...ele, stock: ele.stock == "IN" ? "OUT" : "IN" } : ele
      )
    );
  }

  return (
    <>
      <table border="1">
        <thead>
          <tr key="Head">
            <th>ID</th>
            <th>Name</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {fruitsList.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td className={ele.stock == "IN" ? "green" : "red"}>
                {ele.stock}
              </td>
              <td>
                <input
                  type="checkbox"
                  checked={ele.stock == "IN"}
                  onChange={() => handlechecks(ele.id)}
                ></input>
              </td>
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
              <td>{ele.stock}</td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </>
  );
}

export default Table;
