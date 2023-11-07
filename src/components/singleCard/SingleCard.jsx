import React from "react";
import { Link } from "react-router-dom";

const SingleCard = ({ book }) => {
    const {image, title, subtitle, price} = book;
  return (
    <Link to={`../book/${book.isbn13}`}>
      <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
         className="object-cover w-full relative transition duration-200 transform hover:-translate-y-2 rounded-md"
          src={image}
          alt="cover book"
        />
      </figure>
      <div className="card-body bg-black bg-opacity-75 opacity-0 hover:opacity-100 text-gray-300 absolute inset-0 transition-opacity duration-200 rounded-md">
        <h2 className="card-title text-2xl justify-center items-center py-6">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <button className="badge">{price}</button>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SingleCard;
