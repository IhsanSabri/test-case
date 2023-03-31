import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "rebass";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/UI/Header/Header";
import MainPage from "./components/UI/MainPage/MainPage";
import ProductDetails from "./components/UI/ProductDetails/ProductDetails";
import { fetchProducts } from "./services/ProductSlice";

const App = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    products && setData(products)
  }, [products])

  return (
    <Router>
      <Header setData={setData}/>
      <Routes>
        <Route path="/" element={<Flex style={{ justifyContent: 'space-evenly' }}><MainPage data={data} setData={setData} /></Flex>} />
        <Route path="/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
