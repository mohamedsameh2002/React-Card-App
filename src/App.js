import AppNavbar from "./componanet/Navbar";
import { Route, Routes } from "react-router-dom";
import Product from "./componanet/Product"
import Cart from "./componanet/Cart"
function App() {
  return (
    <div className="App">
      <AppNavbar></AppNavbar>
      <Routes>
        <Route path="/" element={<Product></Product>}></Route>
        <Route path="cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
