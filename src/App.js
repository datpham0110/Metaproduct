import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.scss";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Blog from "./pages/Blog"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <BrowserRouter>
      {/* Seting router change auto top */}
      <ScrollTop>
        <Header />
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/detail" element={ <Details /> } />
            <Route path="/blog" element={ <Blog /> } />
          </Routes>
        <Footer />
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App;
