import "./App.css";
import Home from "./Components/Home";
import Navabr from "./Components/Navabr";
import {Routes, Route} from 'react-router-dom'
import Products from "./Components/Products";
import Product from "./Components/Product";

function App() {
  return (
    <>
      <Navabr />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/products" element={<Products />}></Route>
        <Route  path="/products/:id" element={<Product />}></Route>
      </Routes>
      
    </>
  );
}
export default App;
