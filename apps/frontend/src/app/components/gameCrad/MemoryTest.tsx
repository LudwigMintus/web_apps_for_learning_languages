import React from "react";
import "./css/memoryTest.css";

const MemoryTest = () => {
  return (
    <div className="memory-test-container">
      <div className="card card-left"></div>
      <div className="card card-center">
        <img
          src="https://example.com/moose.jpg"
          alt="Moose"
          className="image"
        />
      </div>
      <div className="card card-right"></div>
      <div className="button-container">
        <button className="button">Не знаю</button>
        <button className="button">Знаю</button>
      </div>
    </div>
  );
};

export default MemoryTest;
