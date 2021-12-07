import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Cart from 'pages/Cart'
import Dashboard from 'pages/Dashboard';
import Game from 'pages/Game';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Subscription from 'pages/Subscription';
import NotFound from 'pages/NotFound'
import NavBar from 'components/NavBar';

const App = () => {
  return (
    <div className='App'>
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/jeux/:gameID" element={<Game />} exact />
          <Route path="/panier" element={<Cart />} exact />
          <Route path="/dashboard" element={<Dashboard />} exact />
          <Route path="/connexion" element={<Login />} exact />
          <Route path="/profile" element={<Profile />} exact />
          <Route path="/abonnement" element={<Subscription />} exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
    
