import React, { useState } from 'react';
import EditInputGrid from '../EditProfile/EditInput';
import NumberField from '../GameInput/NumberField';
import StringField from '../GameInput/StringField';
import { Container, Box, Typography, TextField} from '@mui/material';
import CloseButton from 'components/buttons/CloseButton';

const EditGameForm = ({ game, toggleEditMode }) => {
  console.log("GAMEMEMEMEMEM",game)
  const [name, setName] = useState(game.name)
  const [description, setDescription] = useState(game.description)
  const [creator, setCreator] = useState(game.creator)
  const [editor, setEditor] = useState(game.editor)
  const [maxPlayer, setMaxPlayer] = useState(game.max_player)
  const [minPlayer, setMinPlayer] = useState(game.min_player)
  const [age, setAge] = useState(game.min_age)
  const [price, setPrice] = useState(game.price)
  const [releaseDate, setReleaseDate] = useState(game.release_date)

  const handleChange = (e, setValue) => {
    const targetValue = e.target.parentElement.querySelector(".MuiInputBase-input").value
    const targetedElement = e.target.parentElement.querySelector(".MuiInputBase-input")
    console.log("INPUTVALUE", targetedElement)
    setValue(targetValue)
  }


  return (
    <Container component="main" maxWidth="xs" >
      <Box
        className="scroll-no-scrollbar"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          top: 0,
          left: 0,
          ml: "20%",
          mt: "5%",
          height: "90%",
          width: "60%",
          justifyContent: "center",
          position: "fixed",
          zIndex: "5",
          backgroundColor: "white.main",
          border: "1px solid",
          borderColor: "primary.main"
        }}
      >
        <CloseButton onClick={toggleEditMode} sx={{ position: "absolute", top: 50, right:50, fontSize: "3em" }} fontSize="3em"/>
        <Typography variant="h2" color="primary" >
          Editer un jeu
        </Typography>
        
        <EditInputGrid
          nameInput={<StringField name="name" label="Nom du jeu" defaultValue={name} onChange={e =>handleChange(e, setName)}  />}
          descriptionInput={<StringField name="description" label="Description" type="textarea" multiline minRows="3" defaultValue={description} onChange={e => handleChange(e, setDescription)}/>}
          creatorInput={<StringField name="creator" label="Créateur" defaultValue={creator} onChange={e => handleChange(e, setCreator)}/>}
          editorInput={<StringField name="editor" label="Éditeur" defaultValue={editor} onChange={e => handleChange(e, setEditor)}/>}
          ageInput={<NumberField name="age" defaultValue={age} onChange={e => handleChange(e, setAge)}/>}
          minPlayersInput={<NumberField name="min players" defaultValue={minPlayer} onChange={e => handleChange(e, setMinPlayer)}/>}
          maxPlayersInput={<NumberField name="max players" defaultValue={maxPlayer} onChange={e => handleChange(e, setMaxPlayer)}/>}
          priceInput={<NumberField name="price" defaultValue={price} onChange={e => handleChange(e, setPrice)}/>}
          dateinput={<TextField
            margin="normal"
            name="released_date"
            label="Date de parution"
            type="date"
            width="220"
            defaultValue={releaseDate}
            InputLabelProps={{
              shrink: true,
            }}
            />}
        />
      </Box>
    </Container>
  )
};

export default EditGameForm;