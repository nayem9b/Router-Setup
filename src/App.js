import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Button from "./Components/Buttons/Button";
import About from "./Components/About/About";
import Cards from "./Components/Cards/Cards";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Error from "./Components/Error/Error";
import ImageSearch from "./Components/ImageSearch/ImageSearch";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import Title from "./Components/Title/Title";

function App() {
  const router = createBrowserRouter([
    {
      // it renders this element
      element: <Cards></Cards>,

      // when the URL matches this segment
      path: "teams/:teamId",

      // with this data loaded before rendering
      loader: async ({ request, params }) => {
        return fetch(`/fake/api/teams/${params.teamId}.json`, {
          signal: request.signal,
        });
      },

      // performing this mutation when data is submitted to it
      // action: async ({ request }) => {
      //   return updateFakeTeam(await request.formData());
      // },

      // and renders this element in case something went wrong
      errorElement: <Error></Error>,
    },
  ]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=30122663-8b50b24bc7bd52e576cb2d22f&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        isLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
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
                <Banner key={image.id} image={image}></Banner>
              ))}
            </div>
          }></Route>
        <Route path='/title' element={<Title></Title>}></Route>
        <Route
          path='/title/:titleId'
          element={
            <div className='grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-4'>
              {images.map((image) => (
                <Banner key={image.id} image={image}></Banner>
              ))}
            </div>
          }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
        <Route
          path='/teams/:teamId'
          loader={({ params }) => {
            return params.teamId;
          }}
        />
        ;
      </Routes>{" "}
      {/* // <RouterProvider router={router}></RouterProvider> */}
    </BrowserRouter>
  );
}

export default App;
