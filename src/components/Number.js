import React from "react";
import "../index.css";
const PlayNumber = ({ number }) => {
  return (
    <div>
      <button className="number">{number}</button>
    </div>
  );
};

export default PlayNumber;
