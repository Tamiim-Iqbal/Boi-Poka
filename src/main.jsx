import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Details from './Components/Details/Details';
import ListedBooks from './Components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books/:bookId',
        element: <Details></Details>,
        //temporary way
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'listedBooks',
        element: <ListedBooks></ListedBooks>,
        //temporary way
        loader: () => fetch('/booksData.json')
      },
    
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
