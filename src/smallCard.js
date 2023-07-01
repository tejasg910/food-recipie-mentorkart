import React from "react";

const smallCard = ({ title, content }) => {
  return (
    <div className="card w-56 bg-base-100 shadow-xl">
      <div className="card-body flex flex-col justify-center items-center uppercase">
        <h2 className="card-title text-center">{title}</h2>
        <p className="text-center"> {content}</p>
      </div>
    </div>
  );
};

export default smallCard;
