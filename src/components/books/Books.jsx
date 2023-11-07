import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import SingleCard from '../singleCard/SingleCard';
import LoadSpiner from '../loadSpiner/LoadSpiner';

const Books = () => {
  const navigation = useNavigation()
  console.log(navigation.state)
  if (navigation.state === 'loading') {
    return <LoadSpiner></LoadSpiner>
  }
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