import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Books from './components/books/Books.jsx';
import BookDetails from './components/bookDetails/BookDetails.jsx';
import ErrorPage from './components/erroPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement :<ErrorPage></ErrorPage>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/books',
        element : <Books></Books>,
        loader : () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path : 'book/:id',
        element : <BookDetails></BookDetails>,
        loader : ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.id}`)

      },
      {
        path : '/about',
        element : <About></About>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
