import React from 'react';
import EditInputGrid from '../EditProfile/EditInput';
import NumberField from '../GameInput/NumberField';
import StringField from '../GameInput/StringField';
import { Container, Box, Typography, TextField } from '@mui/material';

const EditGame = () => {
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
          Editer un jeu
        </Typography>

        <EditInputGrid
          nameInput={<StringField name="name" label="Nom du jeu" defaultValue={"xxxxxxxx"}/>}
          descriptionInput={<StringField name="description" label="Description" type="textarea" multiline minRows="3" defaultValue={"xxxxxxxx"}/>}
          creatorInput={<StringField name="creator" label="Créateur" defaultValue={"xxxxxxxx"}/> }
          editorInput={<StringField name="editor" label="Éditeur" defaultValue={"xxxxxxxx"}/>}
          ageInput={<NumberField name="age"/>}
          minPlayersInput={<NumberField name="min players"/>}
          maxPlayersInput={<NumberField name="max players"/>}
          priceInput={<NumberField name="price"/>}
          dateinput={<TextField
            margin="normal"
            name="released_date"
            label="Date de parution"
            type="date"
            defaultValue="jj/mm/aaaa"
            width="220"
            InputLabelProps={{
              shrink: true,
            }}
          />}
        />
      </Box>
    </Container>
  )
};

export default EditGame;