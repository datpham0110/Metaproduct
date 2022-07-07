import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Blog from "./pages/Blog"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/detail" element={ <Details /> } />
          <Route path="/blog" element={ <Blog /> } />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
