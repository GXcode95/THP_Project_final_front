import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      passwor_confirmation: data.get('password_confirmation'),
      last_name: data.get('last_name'),
      first_name: data.get('first_name'),
      phone: data.get('phone')
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h2" color="primary" >
            S'inscrire
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email"
              type="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Mot de passe"
              type="password"
              name="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirmation mot de passe"
              type="password"
              name="password_confirmation"
            />

            <TextField
              margin="normal"
              fullWidth
              name="last_name"
              label="Nom"
            />

            <TextField
              margin="normal"
              fullWidth
              name="first_name"
              label="Prénom"
            />
            
            <TextField
              margin="normal"
              fullWidth
              name="phone"
              label="Téléphone"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Valider
            </Button>
          </Box>
        </Box>
      </Container>
  );
}

export default SignUp
