import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import PaginationContext from "./context/PaginationContext";
import { CartProvider } from "./context/CartContext";
import Detail from "./context/DetailsContext";
import Details from "./pages/Details";
const Shop = lazy(() => import("./pages/Shop"));

export default function App() {
  const [currentPage, SetCurrentPage] = useState(1);
  const [postPerPage, SetPostPerPage] = useState(3);
  const [details , setDetails] = useState({})
  return (
    <BrowserRouter >
      <Detail.Provider value={{
        details, 
        setDetails
      }}>
        
      <PaginationContext.Provider
        value={{
          currentPage,
          SetCurrentPage,
          postPerPage,
          SetPostPerPage,
        }}
      >
        <CartProvider>
          <Suspense fallback={<h1>Loading ...</h1>}>

          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/vite-react-router/" element={<Home />} />
                <Route path="/vite-react-router/shop" element={<Shop />} />
                  <Route path="/vite-react-router/cart" element={<Cart />} />
                  <Route path="/vite-react-router/details" element={<Details/>}/>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>{" "}
          </Suspense>

        </CartProvider>
        </PaginationContext.Provider>
        </Detail.Provider>

    </BrowserRouter>
  );
}
