import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import PasswordReset from 'components/forms/PasswordReset'
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import signInImage from 'assets/images/login_image.jpg'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Play BOX
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={6}
        sx={{
          backgroundImage: `url(${signInImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
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


          </Box>
          <Grid item xs>
            <Button variant="text" onClick={togglePasswordReset}>
              Mot de passe oublié
            </Button>
            {passwordReset && <PasswordReset togglePasswordReset={togglePasswordReset} />}
          </Grid>
          <Grid item>
            <Button variant="text" onClick={toggleIsRegistered}>
              {isRegistered ? "S'inscrire" : "Deja inscrit ?"}
            </Button>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;