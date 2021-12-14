import React from 'react'
import SignIn from 'components/forms/SignIn'
import SignUp from 'components/forms/SignUp'
import PasswordReset from 'components/forms/PasswordReset'
import Grid from '@mui/material/Grid';
import signInImage from 'assets/images/login_image.jpg'
import { Button, Box, Typography } from '@mui/material'
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
          backgroundImage: `url(${signInImage})`,
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
          <Button variant="text" onClick={toggleIsRegistered}>
            {isRegistered ? "S'inscrire" : "Deja inscrit ?"}
          </Button>
          <Button variant="text" onClick={togglePasswordReset}>
            Mot de passe oublié
          </Button>
          {passwordReset && <PasswordReset togglePasswordReset={togglePasswordReset} />}
        </Box>
      </Grid>
    </Grid>
  );
}
export default Login

