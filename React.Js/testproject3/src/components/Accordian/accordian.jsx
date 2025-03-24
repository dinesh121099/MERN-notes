import { useState } from "react";
import "./accordian.css";

const Accordion = ({ list }) => {
  const [selectedIndex, setIndex] = useState(null);

  function handleAcc(index) {
    if (selectedIndex != index) {
      setIndex(index);
    } else {
      setIndex(null);
    }
    // console.log(selectedIndex, index)
  }

  return (
    <>
      <div className="accordion">
        <h4 className="acc-title">Quantity list</h4>
        {list.length > 0 ? (
          list.map((ele, index) => (
            <div
              className="accordian-item"
              key={ele.name}
              onClick={() => handleAcc(index)}
            >
              <div className="accordion-header">
                {ele.name}
              </div>
              {selectedIndex == index && <div> {ele.qty} </div>}
            </div>
          ))
        ) : (
          <p className="loading">Loading.....</p>
        )}
      </div>
    </>
  );
};

export default Accordion;
