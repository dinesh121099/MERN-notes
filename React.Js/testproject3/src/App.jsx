import "./App.css";
import Accordion from "./components/Accordian/accordian.jsx";
// import Carousal from "./components/Carousal/carousal.jsx";
import { lazy, Suspense, useEffect, useState } from "react";
import Table from "./components/table/table.jsx";

const LazyComponent = lazy(() => import ("./components/Carousal/carousal.jsx"));

function App() {
  
  const [imgList, setimgList] = useState([]);
  const [list, setlist] = useState([]);

  const endpoint = "https://my-json-server.typicode.com/dinesh121099/Db/db";
  async function api(endpoint) {
    try{
      const res = await fetch(endpoint);
      if(!res.ok){
        console.error(res.status, res.body);
      }
      else{
        const data = await res.json();
        // console.log(data.imgList, data.list);
        setimgList(data.imgList);
        setlist(data.list);
      }
    }
    catch(err){
      console.error(err.status, err.message);
    }
  }
  
  useEffect(() => {
    api(endpoint);
  },[]);

  return (
    <>
      <Accordion list = {list} />

      <Suspense fallback = {<p>...Loading !!!</p>}>
        <LazyComponent imgList={imgList}/>
      </Suspense>
      {/* <Carousal imgList={imgList} /> */}
      <br />
      
      <Table/>
    </>
  );
}

export default App;
