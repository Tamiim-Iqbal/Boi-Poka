import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, image, bookName, author, review, rating, category, tags } = book;
  return (

      <Link to={`/books/${bookId}`}>
        <div className="card bg-base-300 w-96 shadow-xl p-5">
        <figure className="bg-base-200">
          <img
            src={image}
            className="max-h-64 py-6"
            alt={bookName}

          />
        </figure>
        <div className="card-body -ml-6 ">
        <div className="flex gap-4 justify-center">
        {
            tags.map((tag, index) => <button key={index} className="btn btn-xs w-fit bg-green-100 text-green-600">{tag}</button>)
        }
        </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="divider"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="flex items-center gap-1">
            {rating}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            </div>
          </div>
        </div>
      </div>
      </Link>

  );
};

export default Book;
 