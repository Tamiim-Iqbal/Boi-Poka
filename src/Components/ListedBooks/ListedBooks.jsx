import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredReadList } from '../Utilities/addToDB';
import Book from '../Book/Book';

const ListedBooks = () => {

    const [readList, setReadList] = useState
    ([]) 
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        // worst way
        // console.log(storedReadList, allBooks)

        const readBookList = allBooks.filter( book => storedReadListInt.includes(book.bookId))

        setReadList(readBookList)
    },[])

    return (
        <div>
            <h3 className='my-8'>Listed books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl'>Books I read : {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>

                <TabPanel>
                    <h2 className='text-2xl'>My Wishlist</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;