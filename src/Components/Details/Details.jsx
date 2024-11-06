
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const {bookId} = useParams();
    // console.log(bookId)
    const id = parseInt(bookId)

    const data = useLoaderData();
    // console.log(data)

    const book = data.find(book => book.bookId === id)
    console.log(book)


    const {bookId:currentBookId, image, bookName, author, review, rating, category, tags } = book;

    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-md rounded-lg shadow-2xl" />
    <div className='lg:w-1/2 lg:mx-auto'>
      <h1 className="text-5xl font-semibold">{bookName}</h1>
      <p className='font-medium'>By : {author}</p>
        <div className="divider"></div>
        <p className='text-xl'>{category}</p>
        <div className="divider"></div>
      <p className='mb-6'><b>Review :</b> {review}</p>
      <b>Tag :</b> {
            tags.map((tag, index) => <button key={index} className="btn btn-xs w-fit bg-green-100 text-green-600">{tag}</button>)
        } 
        <br />
        <div className="divider"></div>
      <div className='flex gap-6'>
      <button className="btn">Read</button>
      <button className="btn btn-primary">Wishlist</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Details;