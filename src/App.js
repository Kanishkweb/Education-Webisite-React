import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import ErrorComponent from './components/errorComponent'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'


const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
      </>
    ),
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
    ]
  }
]);

function App() {
  const ref = useRef(10)
  return (
    <>
      <LoadingBar color='#f11946' ref={ref} height={3}/>
      <RouterProvider router={Router} />
      <Footer />
    </>
  );
}

export default App;
