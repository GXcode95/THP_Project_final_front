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
import { light } from 'style/palette'
import { ThemeProvider, CssBaseline } from '@mui/material';
import NavBar from 'components/navigation/NavBar';
import BottomBar from 'components/BottomBar'
import HeroBanner from './components/navigation/NavBar/HeroBanner'
import GameDetails from 'components/GameDetails';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Router>
          <NavBar />
          <HeroBanner />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/jeux/:gameID" element={<GameDetails />} exact />
            <Route path="/jeux" element={<Game />} exact />
            <Route path="/panier" element={<Cart />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/connexion" element={<Login />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/abonnement" element={<Subscription />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <BottomBar />
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
