import logo from './logo.svg';
import './App.css';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {Home, Cart} from "./Pages";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header/>
      <div className='main'>
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
