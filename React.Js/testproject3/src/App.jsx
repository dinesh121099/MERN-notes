import "./App.css";
import Accordion from "./components/Accordian/accordian.jsx";
// import Carousal from "./components/Carousal/carousal.jsx";
import { lazy, Suspense, useEffect, useState } from "react";
import Table from "./components/table/table.jsx";
import axios from "axios";
const LazyComponent = lazy(() => import("./components/Carousal/carousal.jsx"));

function App() {
  const [imgList, setimgList] = useState([]);
  const [list, setlist] = useState([]);
  const [fruitsList, setfruitsList] = useState([]);
  const endpoint = "https://my-json-server.typicode.com/dinesh121099/Db/db";

  function api(endpoint) {
    axios
      .get(endpoint)
      .then(({data}) => {
        setimgList(data.imgList);
        setlist(data.list);
        setfruitsList(data.fruits);
      })
      .catch((err) => console.error(err.response?.status, err.message));
  }

  useEffect(() => {
    api(endpoint);
  }, []);

  return (
    <>
      <Accordion list={list} />

      <Suspense fallback={<p>...Loading !!!</p>}>
        <LazyComponent imgList={imgList} />
      </Suspense>
      {/* <Carousal imgList={imgList} /> */}

      <Table fruits = {fruitsList}/>
    </>
  );
}

export default App;
