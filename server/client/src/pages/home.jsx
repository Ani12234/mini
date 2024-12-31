// src/pages/Home.js
import { Routes, Route, Link } from 'react-router-dom';
// import DashboardPage from '../pages/auth/DashboardPage'; // Adjust the import path if needed
import ShoppingListing from './../pages/shopping-view/listing';

function Home({ isAuthenticated }) {
  return (
    <div className="home-container">
      <h1>Welcome to Ou Platform</h1>
      <p>Explore our services:</p>

      <div className="options">
        {isAuthenticated ? (
          <>
            <Link to="/shop/home">Go to Shopping Home</Link>
            
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">Register</Link>
          </>
        )}
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/shop/listing" element={<ShoppingListing/>} />
        {/* Dashboard is available to all authenticated users */}
       
      </Routes>

      {/* Render Dashboard directly on the main Home page if authenticated */}
      {isAuthenticated && (
        <div className="dashboard-section">
          
         
        </div>
      )}
    </div>
  );
}

export default Home;
