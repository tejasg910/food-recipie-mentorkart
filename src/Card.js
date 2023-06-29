import React from "react";

const Card = ({ image, title, time }) => {
  return (
    <div className="card w-96 max-h-[20rem] bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Total Time: {time ? time + " minutes" : "Not mentioned"}{" "}
        </h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Know More...</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
