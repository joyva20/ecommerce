import React from 'react'
import './Sidebar.css'
import dashboard_icon from '../Assets/Dashboard_icon.png'
import add_product_icon from '../Assets/Product_Cart.png'
import list_product_icon from '../Assets/Product_list_icon.png'
import list_user_icon from '../Assets/User_list_icon.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/dashboard' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={dashboard_icon} alt="" />
          <p>Dashboard</p>
        </div>
      </Link>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="" />
          <p>Product List</p>
        </div>
      </Link>
      <Link to='/listuser' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_user_icon} alt="" />
          <p>User List</p>
        </div>
      </Link>
      
    </div>
  )
}

export default Sidebar
