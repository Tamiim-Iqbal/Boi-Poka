import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
 
const Books = () => {

    const [books, setBooks]= useState([])
    useEffect(() => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div>
            <h2 className='text-3xl font-medium text-center mt-10 mb-5'>Books</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book 
                    key={book.bookId}
                    book={book}
                    ></Book>)
                }
            </div>

        </div>
    );
};

export default Books;

/**
 * 1. State to store books
 * 2. Use effect
 * 3. fetch to load data
 * 4. set the data to state
 */
