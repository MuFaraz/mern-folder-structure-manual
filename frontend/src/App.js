import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import "./App.css";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
import Admin from "./components/Admin";
function App() {
  let sidebar = [
    {
      title: "Product",
      path: "product",
    },
    {
      title: "Admin",
      path: "admin",
    },
  ];
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Sidebar side_bar = {sidebar} />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/product" element={<Product name="Product" />} />
            <Route path="/admin" element={<Product name="Admin" />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
