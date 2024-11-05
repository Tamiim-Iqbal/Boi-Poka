import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, review, rating, category, tags } = book;
  return (
    <div>
      <div className="card bg-base-300 w-96 shadow-xl p-4">
        <figure className="bg-base-200">
          <img
            src={image}
            className="max-h-64 py-6"
            alt={bookName}

          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
