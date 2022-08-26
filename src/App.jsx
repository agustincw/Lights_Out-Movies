import React from "react";
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import MoviesGrid from "./commons/MoviesGrid"
import SingleCard from "./components/SingleCard"
import Register from "./components/Register";
import Login from "./components/Login"
// import Grid from "./commons/Grid";
// import SingleCard from "./components/singleCard";
// import Register from "./components/register";
// import Login from "./components/login";
// import Search from "./components/search";

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/:type" element={<MoviesGrid />} />
          <Route path="/:type/:id" element={<SingleCard />} />
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
        </Routes>
    </>
  );
};

export default App;