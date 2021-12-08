import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, TextField, Button} from '@mui/material';
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import SelectNumber from './SelectNumber';

const CreateGame = () => {

  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      name: data.get('name'),
      description: data.get('description'),
      creator: data.get('creator'),
      editor: data.get('editor'),
      age: data.get('age'),
      min_players: data.get('min players'),
      max_players: data.get('max players'),
      released_date: data.get('released_date'),
      price: data.get('price')
    });
  };

  return (
    <Container component="main" maxWidth="xs">
        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center",
        >
          <Typography variant="h2" color="primary" >
            Ajouter un jeu
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nom du jeu"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="creator"
              label="Créateurs"
            />

            <TextField
              margin="normal"
              fullWidth
              name="editor"
              label="Éditeur"
            />

            <SelectNumber name={"age"} value={value} handleChange={handleChange} />

            <SelectNumber name={"min players"} value={value} handleChange={handleChange} />

            <SelectNumber name={"max players"} value={value} handleChange={handleChange} />

            <TextField
              name="released_date"
              label="Date de parution"
              type="date"
              defaultValue="jj/mm/aaaa"
              width={220}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              name="price"
              label="Prix"
              type="number"
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
};

export default CreateGame;
