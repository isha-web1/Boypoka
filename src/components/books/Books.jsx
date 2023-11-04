import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from '../singleCard/SingleCard';

const Books = () => {
    const {books} = useLoaderData();
    console.log(books)
    return (
        <div className='my-container'>
            <div className='grid gap-6 mb-8 lg:grid-cols-3 sm:grid-cols-2'>
              {
                books.map(book =><SingleCard
                book={book}
                ></SingleCard> )
              }
            </div>
            
        </div>
    );
};

export default Books;