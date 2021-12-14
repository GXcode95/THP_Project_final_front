import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import PasswordReset from 'components/forms/PasswordReset'
import signIn from 'assets/images/bg_signin.jpg'
import { BrowserView } from 'react-device-detect';

const Login = () => {
  const [isRegistered, setIsRegistered] = React.useState(true)
  const [passwordReset, setPasswordReset] = React.useState(false)
  const toggleIsRegistered = () => {
    setIsRegistered(!isRegistered)
  }
  const togglePasswordReset = async () => {
    setPasswordReset(!passwordReset)
  }

  return (
    <Grid
      container
      sx={{
        width: '100%',
      }}
    >
      <Grid
        item
        xs={false}
        sm={false}
        md={6}
        lg={6}
        sx={{
          backgroundImage: `url(${signIn})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '3rem',
          height: '100%',
          width: '100%'
        }}
        className="login-image"
      />
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
      >
        <Box
          sx={{
           
            display: 'flex',
            flexDirection: 'column'
          }}
        >

          <Typography
            className="title-signin"
            variant="h2"
            color="primary.main"
            align="center"
          >
            {isRegistered ? "Se connecter" : "S'inscrire"}
          </Typography>
          {isRegistered ? <SignIn /> : <SignUp />}

          <Grid
            container
            direction="row"
            align="center"
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
            >
              <Button variant="text" onClick={toggleIsRegistered}>
                {isRegistered ? "S'inscrire" : "Deja inscrit ?"}
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={6}
            >
              <Button variant="text" onClick={togglePasswordReset}>
                Mot de passe oublié
              </Button>
              {passwordReset && <PasswordReset togglePasswordReset={togglePasswordReset} />}
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
export default Login
