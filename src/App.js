import { Routes, Route, Link, Navigate } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import PageNotFound from "./Pages/404";
import DetailPage from "./Pages/DetailPage";
import CheckOutPage from "./Pages/CheckOutPage";
import { ProductsProvider } from "./Context/ProductContext";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
  <>
  <nav>
    <Link to="/products">برو به محصولات</Link>
    <Link to="/checkout">checkout</Link>
  </nav>
<CartProvider>
  <ProductsProvider>
  <Routes>
    <Route path="/" element={<Navigate to="/products" replace />} />
    <Route path="/products" element={<ProductsPage/>}/>
    <Route path="/products/:id" element={<DetailPage/>}/>
    <Route path="/checkout" element={<CheckOutPage/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </ProductsProvider>
  </CartProvider>
  </>
  );
}


export default App;
