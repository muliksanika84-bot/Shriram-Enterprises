import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Loader from "./components/Loader";
import Checkout from "./pages/Checkout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="cart" element={<Cart />} />
    <Route path="checkout" element={<Checkout />} />
</Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;