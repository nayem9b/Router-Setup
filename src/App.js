import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import About from "./Components/About/About";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Error from "./Components/Error/Error";
import ImageSearch from "./Components/ImageSearch/ImageSearch";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Title/Title";
import PostDetails from "./Components/PostDetails/PostDetails";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/post/:postId",
  // loader: async ({ params }) => {
  //   return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  // },
  //     element: <PostDetails></PostDetails>,
  //   },
  // ]);
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=30122663-8b50b24bc7bd52e576cb2d22f&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <BrowserRouter>
        <Navbar></Navbar>
        <ImageSearch searchText={(text) => setTerm(text)}></ImageSearch>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/card' element={<Cards></Cards>}></Route>
          <Route
            path='/banner'
            element={
              <div className='grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {images.map((image) => (
                  <Banner
                    key={image.id}
                    image={image}
                    link='/post/:postId'></Banner>
                ))}
              </div>
            }></Route>
          <Route path='/title' element={<Title></Title>}></Route>
          <Route
            path='/post/:postId'
            element={
              <div className='grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {images.map((image) => (
                  <PostDetails key={image.id} image={image}></PostDetails>
                ))}
              </div>
            }></Route>

          <Route path='/about' element={<About></About>}></Route>
          <Route path='*' element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
