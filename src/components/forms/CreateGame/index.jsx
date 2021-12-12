import React, {useState} from 'react'
import { Container, Typography, Box, TextField, Button} from '@mui/material';
import NumberField from '../GameInput/NumberField';
import ImagesDropzone from 'components/ImagesDropzone';
import APIManager from 'services/Api'

const CreateGame = () => {
  const [files, setFiles] = useState([])
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [creator, setCreator] = useState()
  const [editor, setEditor] = useState()
  const [maxPlayer, setMaxPlayer] = useState()
  const [minPlayer, setMinPlayer] = useState()
  const [age, setAge] = useState()
  const [price, setPrice] = useState()






  const handleClick = async () => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`
    let publicIdList=[]
    files.map(
      async (acceptedFile, i) => {
        console.log("accept", acceptedFile)
        const formData = new FormData();
        formData.append("file", acceptedFile);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
  
        const response = await fetch(url, {
          method: "post",
          body: formData,
        })
        const data = await response.json()

        
        console.log("JE PUSH LE PUBLIC ID => ", data.public_id)
        publicIdList.push(data.public_id)
        console.log(publicIdList)
        if (i === files.length -1) uploadGame(publicIdList)
      }
    )
  }

  const uploadGame = async (imagesId) => {
    const gameInfo = {
      name: name,
      description: description,
      creator: creator,
      editor: editor,
      max_player: maxPlayer,
      min_player: minPlayer,
      min_age: age,
      price: price,
      sell_stock: 100,
      rent_stock:100
    }
    
    const response = await APIManager.createGameAdmin(gameInfo, imagesId)
    response.error ? alert(`une erreur est survenue :"${response.error}"`) : alert("jeu créer avec succès")
  }

  return (
    <Container component="main" maxWidth="xs">

        <Box 
          display="flex" 
          flexDirection="column" 
          alignItems="center"
        >
          <Typography variant="h2" color="primary" >
            Ajouter un jeu
          </Typography>
          
          <Box  noValidate sx={{ mt: 1 }}>
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
              type="textarea"
              multiline
              minRows="3"
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
              required
              fullWidth
              name="editor"
              label="Éditeur"
            />
                
            <NumberField name={"age"} />

            <NumberField name={"min_players"} />

            <NumberField name={"max_players"} />

            <NumberField name={"price"} />
            
            <TextField
              margin="normal"
              name="released_date"
              label="Date de parution"
              type="date"
              defaultValue="jj/mm/aaaa"
              width={220}
              InputLabelProps={{
                shrink: true,
              }}
            />
            
            <ImagesDropzone files={files} setFiles={setFiles} />

            <Button
              onClick={handleClick}
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