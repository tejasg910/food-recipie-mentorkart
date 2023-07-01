import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, time, id }) => {
  return (
    <div className="card w-96 max-h-[20rem] bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Total Time: {time ? time + " minutes" : "Not mentioned"}
        </h2>
        <p>{title}</p>
        <div className="card-actions justify-end">
          <Link to={`/recepie?id=${id}`}>
            <button className="btn btn-primary">Know More...</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
