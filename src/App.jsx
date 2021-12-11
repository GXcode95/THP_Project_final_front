import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Cart from 'pages/Cart'
import Dashboard from 'pages/Dashboard';
import Game from 'pages/Game';
import Games from 'pages/Games'
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Subscription from 'pages/Subscription';
import NotFound from 'pages/NotFound'
import { light } from 'style/palette'
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import NavBar from 'components/navigation/NavBar';
import BottomBar from 'components/BottomBar'
import HeroBanner from './components/navigation/NavBar/HeroBanner'
import Cookies from 'js-cookie'
import { fetchUserSignInSuccess, fetchUserRequest, fetchUserError } from 'store/users/actions';
import APIManager from 'services/Api';
import { useDispatch } from 'react-redux';
import { MobileView } from 'react-device-detect';

const App = () => {
  const dispatch = useDispatch()

  React.useEffect( // sign in user if he have a valid jwt
    () => {
      const signInWithJwt = async () => {
        const jwt = Cookies.get('token')
        console.log('jwt =', jwt)
        if (jwt) {
          dispatch(fetchUserRequest)
          const response = await APIManager.signInUserJwt()
          response.error ?
            dispatch(fetchUserError(response.error)) :
            dispatch(fetchUserSignInSuccess(response))
        }
      }
      signInWithJwt()
    }, [dispatch]
  )

  return (
    <div className='App'>
      <ThemeProvider theme={light}>
        <CssBaseline />
        <Router>
          <NavBar />
          <HeroBanner />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/jeux" element={<Games />} exact />
            <Route path="/jeu/:gameID" element={<Game />} exact />
            <Route path="/panier" element={<Cart />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/connexion" element={<Login />} exact />
            <Route path="/profile" element={<Profile />} exact />
            <Route path="/abonnement" element={<Subscription />} exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Box py="3em" />
          <MobileView>
            <BottomBar />
          </MobileView>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
