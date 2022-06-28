import logo from "./logo.svg";
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Home, Cart, ProductList } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/productlist/?category" element={<ProductList />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
