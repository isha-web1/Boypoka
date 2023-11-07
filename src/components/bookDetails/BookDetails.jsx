import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookData = useLoaderData()
    console.log(bookData)
    return (
        <div>
                <h1>this is book details page</h1>
        </div>
    );
};

export default BookDetails;