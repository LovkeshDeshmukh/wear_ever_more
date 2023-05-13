import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProductPage from "./Components/ProductPage";
import Dashboard from "./Admin_Components/Dashboard";
import AddProduct from "./Admin_Components/AddProduct";
import AdminHeader from "./Admin_Components/AdminHeader";
import DashboardHeader from "./Admin_Components/DashboardHeader";
import ProductDetails from "./Admin_Components/ProductDetails"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productpage" element={<ProductPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/addproduct" element={<AddProduct/>} />
          <Route path="/adminheader" element={<AdminHeader/>} />
          <Route path="/dashboardheader" element={<DashboardHeader/>} />
          <Route path="/productdetails" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
