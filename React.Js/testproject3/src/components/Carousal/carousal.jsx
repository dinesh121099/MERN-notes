import React from 'react'
import { useEffect, useState } from "react";
import "./carousal.css"

const Carousal = ({imgList}) => {  
  const [img, setImg] = useState(0);
  let interval = 0;
  
  useEffect(() => {
    interval = setInterval(() => {
      setImg((prevImg) => (prevImg < imgList.length - 1 ? prevImg + 1  : 0));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [imgList]);

  function handlePrev(){
    setImg((prevImg) => (prevImg - 1));
    clearInterval(interval);
  }

  function handleNext(){
    setImg((prevImg) => (prevImg < imgList.length -1? prevImg + 1: 0));
    clearInterval(interval);
  }

  return (
    <div className="carousel">
      <div className="carousel-container" style={{ transform: `translateX(-${img * 500}px)` }}>
        {imgList.map((src, index) => (
          <img key={index} className="carousel-item" src={src} alt={`carousel${index}`} loading='lazy'/>
        ))}
      </div>
      <button className='prev-button' onClick={handlePrev}>&lt;</button>
      <button className='next-button' onClick={handleNext}>&gt;</button>
    </div>
  )
}

export default Carousal