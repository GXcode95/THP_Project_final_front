import React, {useState} from 'react'
import { Checkbox, Container, FormGroup, FormControlLabel, Typography, Box, TextField, Button, Snackbar} from '@mui/material';
import NumberField from '../GameInput/NumberField';
import ImagesDropzone from 'components/ImagesDropzone';
import APIManager from 'services/Api'
import validateGameForms from 'helpers/validateGameForms';
import { useDispatch } from 'react-redux';
import { setSnackbar } from 'store/snackbar/actions';

const CreateGame = () => {
  const dispatch = useDispatch()
  const [files, setFiles] = useState([])
  const [name, setName] = useState()
  const [description, setDescription] = useState()
  const [creator, setCreator] = useState()
  const [editor, setEditor] = useState()
  const [maxPlayer, setMaxPlayer] = useState()
  const [minPlayer, setMinPlayer] = useState()
  const [age, setAge] = useState()
  const [price, setPrice] = useState()
  const [tags, setTags] = useState()

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

        publicIdList.push(data.public_id)
        console.log(publicIdList)
        if (i === files.length -1) uploadGame(publicIdList)
      }
    )
  }

  const uploadGame = async (publicIdList) => {
    
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
    console.log("Errors messages", validateGameForms(gameInfo))

    const errorsMessages = validateGameForms(gameInfo)
    const tags = getAllCheckedTags()
    console.log("----------------------")
    console.log("----------------------")
    console.log("----------------------")
    console.log(tags)
    console.log("----------------------")
    console.log("----------------------")
    console.log("----------------------")
    
    if (errorsMessages.length > 0 ){
      dispatch(setSnackbar(true, "error", errorsMessages))
    }else{
      const response = await APIManager.createGameAdmin(gameInfo, publicIdList, tags)
      response.error ? alert(`une erreur est survenue :"${response.error}"`) : alert("jeu créer avec succès")
    }
  }

  const getAllCheckedTags = () => {
    const checkboxLabels = document.querySelectorAll('#form-group-checkboxs>label input')
    let checkedTags = []

    checkboxLabels.forEach( input => {
      if(input.parentElement.classList.contains('Mui-checked')) 
        checkedTags.push(parseInt(input.name))
    })
    return checkedTags
  }

  React.useEffect (
    () => {
      const fetchAllTags = async () => {
        const response = await APIManager.getTags()
        if (response.error)
          alert(response.error)
        else
          setTags(response)
      }
      fetchAllTags()
    },[]
  )
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
          
          <Box noValidate sx={{ mt: 1 }}>
            <ImagesDropzone files={files} setFiles={setFiles} />
              <Button
                onClick={handleClick}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Valider
              </Button>

            <TextField
              margin="normal"
              required
              fullWidth
              name="name"
              label="Nom du jeu"
              onChange={e => setName(e.target.value)}
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
              onChange={e => setDescription(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="creator"
              label="Créateurs"
              onChange={e => setCreator(e.target.value)}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="editor"
              label="Éditeur"
              onChange={e => setEditor(e.target.value)}
            />
                
            <NumberField name={"age"} onChange={setAge} />

            <NumberField name={"min_players"} onChange={setMinPlayer} />

            <NumberField name={"max_players"} onChange={setMaxPlayer} />

            <NumberField name={"price"} onChange={setPrice} />

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

            <FormGroup id="form-group-checkboxs">
              {tags && tags.map( tag => (
                <FormControlLabel 
                  control={<Checkbox name={`${tag.id}`} />} 
                  label={tag.name} 
                  key={tag.id} 
                />
              ))}
            </FormGroup>

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
