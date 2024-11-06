
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToWishList } from '../Utilities/addToDB';

const Details = () => {

    const {bookId} = useParams();
    // console.log(bookId)
    const id = parseInt(bookId)

    const data = useLoaderData();
    // console.log(data)

    const book = data.find(book => book.bookId === id)
    console.log(book)


    const {bookId:currentBookId, image, bookName, author, review, rating, category, tags } = book;

    const handleMarkAsRead = (id) =>{
        /**
         * what to store : bookId
         * where to store : database
         * array, list, collection
         * check if the book is already in the readlist
         * if not, then add the book to the list
         * if yes, donot add the book
         */
        addToStoredReadList(id)
    }

    const handleWishlist = (id) =>{
        addToWishList(id)
    }

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
      <button className="btn" onClick={()=> handleMarkAsRead(bookId)}>Mark as Read</button>
      <button className="btn btn-primary" onClick={() => addToWishList(bookId)}>Add to Wishlist</button>
      </div>
      
    </div>
  </div>
</div>
    );
};

export default Details;