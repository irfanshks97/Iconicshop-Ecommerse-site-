import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Provider } from "react-redux";
import store from "./store/store";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "./components/Footer/Footer";
import { ProductSinglePage } from "./pages/ProductSinglePage/ProductSinglePage";
import CategoryProductPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductSinglePage />} />
          <Route path="/:category" element={<CategoryProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
