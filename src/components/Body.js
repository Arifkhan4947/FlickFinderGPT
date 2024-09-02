import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, Router, Routes,Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import TvDetails from "./TvDetails";
import PeopleDetails from "./PeopleDetails";
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
      {/* <Router>
        <Routes>
          <Route path="/movie/details/:id" element={<MovieDetails />} />
          <Route path="/tv/details/:id" element={<TvDetails />} />
          <Route path="/people/details/:id" element={<PeopleDetails />} />
        </Routes>
      </Router> */}
    </div>
  );
};

export default Body;
