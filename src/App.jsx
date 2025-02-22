import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { ToastContainer } from "react-toastify";

import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { HeroPage } from "./pages/heroapage/HeroPage";

import { HomePage } from "./pages/HomePage/HomePage";
import { ProductSinglePage } from "./pages/ProductSinglePage/ProductSinglePage";
import CategoryProductPage from "./pages/CategoryPage/CategoryPage";
import CartPage from "./pages/CartPage/CartPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { WishList } from "./pages/WishlistPage/WishlistPage";

import Login from "./pages/LoginPage/LoginPage";
import Register from "./pages/register/Register";

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <div style={{ height: "10vh" }}>
        <Navbar />
      </div>
      {!isAuthPage && (
        <>
          {location.pathname === "/" && <HeroPage />}
          <Header />
        </>
      )}
      {children}
      <Footer />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductSinglePage />} />
            <Route path="/:category" element={<CategoryProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/search/:query" element={<SearchPage />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
