import React, {useState} from 'react'
import { Container, Typography, Box, TextField, Button} from '@mui/material';
import NumberField from '../GameInput/NumberField';
import ImagesDropzone from 'components/ImagesDropzone';
const CreateGame = () => {
  const [files, setFiles] = useState([])

  const handleUpload = () => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`

    files.forEach(
      async (acceptedFile) => {
        console.log("accept", acceptedFile)
        const formData = new FormData();
        formData.append("file", acceptedFile);
        formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET)
  
        const response = await fetch(url, {
          method: "post",
          body: formData,
        })
        const data = await response.json()
        console.log(data)
      }
    )
  }


  const handleClick = (event) => {
    handleUpload()

  };

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

            <NumberField name={"min players"} />

            <NumberField name={"max players"} />

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