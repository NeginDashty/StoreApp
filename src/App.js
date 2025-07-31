import { Routes, Route, Link } from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
  <>
  <nav>
    <Link to="/products">برو به محصولات</Link>
  </nav>
 
  <Routes>
    <Route path="/products" element={<ProductsPage/>}/>
  </Routes>
  </>
  );
}

export default App;
