import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import RickAndMortyCards from './RickAndMortyCards.jsx';
import Header from './Header.jsx';
import Principal from './Principal.jsx';
import Footer from './Footer.jsx';
import RecipeReviewCard from './RecipeReviewCard.jsx';
import Usuario from './Usuario.jsx';
import { UserProvider } from './UserProvider.jsx';

const router= createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <h1>Error 👀</h1>,
     children: [
      {
        path: "/rickandmorty",
        element: <RickAndMortyCards/>
      },
      {
        path: "contacts",
        element: <h2>Contactos </h2>,
      }
    ],
  },
    {
      path: "/about",
     children: [
      {
        path: "head",
        element: <Header/>
      },
      {
        path: "principal",
        element: <Principal/> ,
      },
      {
        path : "footer",
        element: <Footer/>
      }
    ],
  },
  {
    path:"/main",
    element: <RecipeReviewCard/>
  },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <UserProvider>
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  </UserProvider>
)
