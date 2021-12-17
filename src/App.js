import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import ProductListPage from "./pages/ProductListPage";
import Home from './pages/Home';
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactUs from "./pages/ContactUs";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Router>
      <Home>     
          <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/products" element={<ProductListPage/>}/>
              <Route path="/product" element={<ProductPage/>}/>
              <Route path="/about" element={<AboutPage/>}/>
              <Route path="/contacts" element={<ContactUs/>}/>
          </Routes>      
      </Home>
    </Router>
  );
}

export default App;
