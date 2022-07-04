import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./features/Home";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailProduct from "./features/DetailProduct";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail-product" element={<DetailProduct />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
