// src/shop/ShopHome.js
import { Routes, Route } from 'react-router-dom';

import DashboardPage from '../auth/DashboardPage';

function ShopHome() {
  return (
    <>
    <h1>handleLogout</h1>
    <div className="shop-home">

      <Routes>
        <Route path="/home" element={<h1>Shop Home</h1>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        {/* Add more shop-related routes here */}
      </Routes>
    </div>
    </>
  );
}


export default ShopHome;