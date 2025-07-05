import React from "react";
import "./CSS/Admin.css";
import Sidebar from "../Components/Sidebar/Sidebar";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddProduct from "../Components/AddProduct/AddProduct";
import { Route, Routes } from "react-router-dom";
import ListProduct from "../Components/ListProduct/ListProduct";
import ListUser from "../Components/ListUser/ListUser";

const Admin = () => {

  return (
    <div className="admin">
      <Sidebar />
      <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/listuser" element={<ListUser />} />
      </Routes>
    </div>
  );
};

export default Admin;
