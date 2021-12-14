import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import PasswordReset from 'components/forms/PasswordReset'
import signIn from 'assets/images/bg_signin.jpg'

const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true)
  const [passwordReset, setPasswordReset] = React.useState(false)
  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }

  const togglePasswordReset = async() => {
    setPasswordReset(!passwordReset)
  }

  



  return (
    <div>
      <Grid container component="main" sx={{ height: '30vh' }}>
        <CssBaseline />
        <Grid
          item
          className="bg-signin"
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${signIn})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '5rem'
          }}
        />
        <Grid 
          item 
          xs={12} 
          sm={8} 
          md={5} 
          component={Paper} 
          elevation={10} 
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography variant="h2" color="primary.main" align="center" >
              {isRegistered ? "Se connecter" : "S'inscrire"}
            </Typography>

            {isRegistered ? <SignIn /> : <SignUp /> }

           
            <Grid 
              container
              justifyContent="center"
              alignItems="center"
              paddingLeft="4em"
            >
              <Grid item xs>
                <Button  variant="text" onClick={toggleIsRegistered}>
                  {isRegistered ? "S'inscrire" : "Deja inscrit ?"} 
                </Button>
              </Grid>

              <Grid item xs>
                <Button  variant="text" onClick={togglePasswordReset}>
                  Mot de passe oublié 
                </Button>
                {passwordReset && <PasswordReset togglePasswordReset={togglePasswordReset}/>}
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Login