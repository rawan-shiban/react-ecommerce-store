
import { Routes, Route } from "react-router-dom"
import BtmHeader from "./components/header/BtmHeader"
import TopHeader from "./components/header/TopHeader"
import Product from "./components/slideProducts/Product";
import SlideProduct from "./components/slideProducts/SlideProduct"
import { AnimatePresence } from "framer-motion";
import Home from "./page/home/Home";
import Cart from "./page/cart/Cart";
import ProductDetails from "./page/productDetails/ProductDetails";
import {Toaster} from "react-hot-toast";
import ScrollToTab from "./components/slideProducts/ScrollToTab";
import CategoryPage from "./page/CategoryPage/CategoryPage";
import SearchResults from "./page/home/SearchResults";
import Favorites from "./page/favorites/favorites";
function App() {


  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>
<Toaster position="bottom-right" toastOptions={{
  style:{
  background:'#e9e9e9',
  borderRediues:'5px',
  padding:'14px'
  }
  }}  />
<ScrollToTab/>
  <AnimatePresence mode="wait">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="category/:category" element={<CategoryPage />} />
      </Routes>
  </AnimatePresence>
    </>
  )
}

export default App
