import logo from "./logo.svg";
import "./App.css";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Home, Cart, ProductList } from "./Pages";

function App() {
  //const { data, isLoading } = useFeaturedBanners();
  //console.log(data, isLoading);

  let pageComponent;

  switch (window.location.pathname) {
    case "/":
      pageComponent = <Home />;
      break;
    case "/productlist":
      pageComponent = <ProductList />;
      break;
    case "/cart":
      pageComponent = <Cart />;
      break;
    default:
      break;
  }

  return (
    <div className="App">
      <NavBar />
      <div className="main">{pageComponent}</div>
      <Footer />
    </div>
  );
}

export default App;
