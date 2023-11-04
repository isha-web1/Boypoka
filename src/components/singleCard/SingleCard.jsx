import React from "react";

const SingleCard = ({ book }) => {
    const {image, title, subtitle, price} = book;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
         className="object-cover w-full relative"
          src={image}
          alt="cover book"
        />
      </figure>
      <div className="card-body bg-black bg-opacity-75 text-gray-300 absolute inset-0">
        <h2 className="card-title text-2xl justify-center items-center py-6">{title}</h2>
        <p>{subtitle}</p>
        <div className="card-actions justify-end">
          <button className="badge">{price}</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
